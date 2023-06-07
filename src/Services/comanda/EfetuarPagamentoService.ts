import prismaClient from "../../../prisma/prismaClient";

class ComandaService {
  async efetuarPagamento(comandaId: string) {
    const comanda = await prismaClient.comanda.update({
      where: {
        id: comandaId,
      },
      data: {
        pagamento: true,
      },
    });

    return comanda;
  }
}

export { ComandaService };