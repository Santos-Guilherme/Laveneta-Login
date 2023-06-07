import prismaClient from "../../../prisma/prismaClient";

class PedidosService {
  async getPedidoPorMesa(mesa: number) {
    const pedido = await prismaClient.comanda.findFirst({
      where: {
        mesa: mesa
      }
    });

    if (!pedido) {
      throw new Error("Pedido não encontrado");
    }

    return pedido;
  }
}

export { PedidosService };