import prismaClient from "../../../prisma/prismaClient";

class PedidosService {
  async getPedidos() {
    const pedidos = await prismaClient.comanda.findMany({
      where: {
        estadoPronto: false,
        estadoEntregue: false,
        pagamento: false
      },
      select: {
        id: true,
        mesa: true,
        pizzas: true,
        valorTotal: true,
        pagamento: true
      }
    });
    
    return pedidos;
  }
}

export { PedidosService };