import { Request, Response } from "express";
import { PedidosService } from "../../Services/chef/PedidosEntreguesService";

class GetPedidosEntreguesController {
  async getPedidosEntregues(req: Request, res: Response) {
    const pedidosService = new PedidosService();
    const pedidosEntregues = await pedidosService.getPedidosEntregues();

    res.json(pedidosEntregues);
  }
}

export { GetPedidosEntreguesController };