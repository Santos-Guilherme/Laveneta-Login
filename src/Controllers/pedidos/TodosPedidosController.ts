import { Request, Response } from "express";
import { PedidosService } from "../../Services/pedidos/TodosPedidosService";

class PedidosController {
  async getPedidos(req: Request, res: Response) {
    const pedidosService = new PedidosService();
    const pedidos = await pedidosService.getPedidos();
    res.json(pedidos);
  }
}

export { PedidosController };