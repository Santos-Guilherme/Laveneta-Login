import { Request, Response } from "express";
import { PedidosService } from "../../Services/chef/PedidosProntosService";

class GetPedidosProntosConstroller {
  async getPedidosProntos(req: Request, res: Response) {
    const pedidosService = new PedidosService();
    const pedidosProntos = await pedidosService.getPedidosProntos();

    res.json(pedidosProntos);
  }
}

export { GetPedidosProntosConstroller };