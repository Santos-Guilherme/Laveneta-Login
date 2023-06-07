import prismaClient from "../../../prisma/prismaClient";

class PedidosService {
  async getPedidosEntregues() {
    const pedidosEntregues = await prismaClient.comanda.findMany({
      where: {
        estadoEntregue: true,
        pagamento: false
      },
      select: {
        mesa: true,
        pizzas: true,
        valorTotal: true
      }
    });

    return pedidosEntregues;
  }
}

export { PedidosService };