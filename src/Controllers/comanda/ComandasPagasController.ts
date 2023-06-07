import { Request, Response } from "express";
import { ComandaService } from "../../Services/comanda/ComandasPagasService";

class ComandaController {
    async getComandasPagas(req: Request, res: Response) {
      const comandaService = new ComandaService();
      const comandasPagas = await comandaService.getComandasPagas();
  
      res.json(comandasPagas);
    }
  }
  
export { ComandaController };