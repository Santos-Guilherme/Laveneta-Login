import { Request, Response } from "express";
import { PedidosService } from "../../Services/chef/PedidoEntregueService";

class PedidosEntregueController {
  async alterarEstadoEntregueParaTrue(req: Request, res: Response) {
    const { id } = req.params;

    const pedidosService = new PedidosService();
    const pedido = await pedidosService.alterarEstadoEntregueParaTrue(id);

    res.json(pedido);
  }
}

export { PedidosEntregueController };