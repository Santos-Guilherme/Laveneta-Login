import prismaClient from "../../../prisma/prismaClient";

class ComandaService {
  async getComandasPagas() {
    const comandas = await prismaClient.comanda.findMany({
      where: {
        pagamento: true
      },
      select: {
        mesa: true,
        pizzas: true,
        valorTotal: true,
        pagamento: true
      }
    });

    return comandas;
  }
}

export { ComandaService };