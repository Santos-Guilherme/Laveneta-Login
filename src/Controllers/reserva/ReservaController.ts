import { Request, Response } from "express";
import { ReservaService } from "../../Services/reserva/ReservaService";

class ReservaController {
  async criarReserva(req: Request, res: Response) {
    const nomeCliente = req.body.nomeCliente;
    const cpf = req.body.cpf;
    const data = new Date(req.body.data);
    const hora = req.body.hora;
    const mesaReservada = req.body.mesaReservada;
  
    // Validar o nome utilizando Regex
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Aceita apenas letras e espaços
    if (!nomeRegex.test(nomeCliente)) {
      return res.status(400).json({ error: "Nome inválido." });
    }
  
    // Validar o CPF utilizando Regex
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/; // Aceita apenas CPF no formato 999.999.999-99
    if (!cpfRegex.test(cpf)) {
      return res.status(400).json({ error: "CPF inválido." });
    }
  
    const reservaService = new ReservaService();
  
    const novaReserva = await reservaService.criarReserva({
      nomeCliente,
      cpf,
      data,
      hora,
      mesaReservada,
    });
  
    res.json(novaReserva);
  }

    async alterarReserva(req: Request, res: Response) {
        const { id } = req.params;
        const { data, hora } = req.body;

        const reservaService = new ReservaService();
        const reservaAtualizada = await reservaService.alterarReserva(id, data, hora);

        res.json(reservaAtualizada);
    }

    async deletarReserva(req: Request, res: Response) {
        const { id } = req.params;

        const reservaService = new ReservaService();
        const reservaDeletada = await reservaService.deletarReserva(id);

        res.json(reservaDeletada);
    }

    async consultarReservaPorCPF(req: Request, res: Response) {
        const { cpf } = req.query;

        const reservaService = new ReservaService();
        const reserva = await reservaService.consultarReservaPorCPF(cpf as string);

        res.json(reserva);
    }
    async consultarReservas(req: Request, res: Response) {
      const reservaService = new ReservaService();
      const reservas = await reservaService.consultarReservasAPartirDeHoje();
      res.json(reservas);
    }
    async consultarReservasPorData(req: Request, res: Response) {
      const { data } = req.query;
  
      const reservaService = new ReservaService();
      const reservas = await reservaService.consultarReservasPorData(data as string);
  
      res.json(reservas);
    }
}

export { ReservaController };
