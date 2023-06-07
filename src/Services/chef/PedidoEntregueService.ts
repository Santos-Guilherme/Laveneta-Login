import prismaClient from "../../../prisma/prismaClient";

class PedidosService {
  async alterarEstadoEntregueParaTrue(idPedido: string) {
    const pedido = await prismaClient.comanda.update({
      where: {
        id: idPedido
      },
      data: {
        estadoEntregue: true
      }
    });

    return pedido;
  }
}

export { PedidosService };