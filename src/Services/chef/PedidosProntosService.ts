import prismaClient from "../../../prisma/prismaClient";

class PedidosService {
  async getPedidosProntos() {
    const pedidosProntos = await prismaClient.comanda.findMany({
      where: {
        estadoPronto: true,
        estadoEntregue: false,
        pagamento: false
      },
      select: {
        mesa: true,
        pizzas: true,
        valorTotal: true
      }
    });

    return pedidosProntos;
  }
}

export { PedidosService };