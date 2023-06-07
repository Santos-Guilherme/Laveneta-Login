import prismaClient from "../../../prisma/prismaClient";

class PedidosService {
  async alterarEstadoPedidoParaPronto(idPedido: string) {
    const pedido = await prismaClient.comanda.update({
      where: {
        id: idPedido
      },
      data: {
        estadoPronto: true
      }
    });

    return pedido;
  }
}

export { PedidosService };