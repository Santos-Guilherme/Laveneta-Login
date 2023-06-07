import { Request, Response } from "express";
import { PedidosService } from "../../Services/chef/PedidoProntoService";

class PedidosProntosController {
  async alterarEstadoPedidoParaPronto(req: Request, res: Response) {
    const { id } = req.params;

    const pedidosService = new PedidosService();
    const pedido = await pedidosService.alterarEstadoPedidoParaPronto(id);

    res.json(pedido);
  }
}

export { PedidosProntosController };