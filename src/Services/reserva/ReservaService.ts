import prismaClient from "../../../prisma/prismaClient";

interface NovaReserva {
    nomeCliente: string;
    cpf: string;
    data: Date;
    hora: string;
    mesaReservada: number;
}

class ReservaService {
    async criarReserva(reserva: NovaReserva) {
        const novaReserva = await prismaClient.reserva.create({
            data: reserva,
        });

        return novaReserva;
    }

    async alterarReserva(id: string, data: Date, hora: string) {
        const reservaAtualizada = await prismaClient.reserva.update({
            where: {
                id: id,
            },
            data: {
                data: data,
                hora: hora,
            },
        });

        return reservaAtualizada;
    }

    async deletarReserva(id: string) {
        const reservaDeletada = await prismaClient.reserva.delete({
            where: {
                id: id,
            },
        });

        return reservaDeletada;
    }


    async consultarReservaPorCPF(cpf: string) {
        const reserva = await prismaClient.reserva.findFirst({
            where: {
                cpf: cpf,
            },
        });

        return reserva;
    }
    async consultarReservasAPartirDeHoje() {
        const reservas = await prismaClient.reserva.findMany({
        });

        return reservas;
    }
    async consultarReservasPorData(data: string) {
        const reservas = await prismaClient.reserva.findMany({
          where: {
            data: {
              gte: new Date(data),
            },
          },
          select: {
            id: true,
            nomeCliente: true,
            cpf: true,
            data: true,
            hora: true,
            mesaReservada: true,
          },
        });
    
        return reservas;
      }
}

export { ReservaService };