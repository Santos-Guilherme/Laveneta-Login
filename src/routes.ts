import { Router, Request, Response } from "express";
import { AuthUserController } from "./Controllers/user/AuthUserController";
import { CreateUserController } from "./Controllers/user/CreateUserController";
import { CardapioController } from "./Controllers/cardapio/CardapioController";
import { PedidosController } from "./Controllers/pedidos/TodosPedidosController";
import { NewPedidoController } from "./Controllers/pedidos/NovoPedidoController";
import { PedidosMesaController } from "./Controllers/pedidos/PedidoMesaController";
import { PedidosProntosController } from "./Controllers/chef/PedidoProntoController";
import { PedidosEntregueController } from "./Controllers/chef/PedidoEntregueController";
import { GetPedidosProntosConstroller } from "./Controllers/chef/PedidosProntosController";
import { GetPedidosEntreguesController } from "./Controllers/chef/PedidosEntreguesController";
import { PagamentoComandaController } from "./Controllers/comanda/EfetuarPagamentoController";
import { ComandaController } from "./Controllers/comanda/ComandasPagasController";
import { ReservaController } from "./Controllers/reserva/ReservaController";


const router = Router();
const cardapioController = new CardapioController();
const pedidosController = new PedidosController();
const newPedidoController = new NewPedidoController();
const pedidosMesaController = new PedidosMesaController();
const pedidosProntosController = new PedidosProntosController();
const pedidosEntregueController = new PedidosEntregueController();
const getPedidosProntosConstroller = new GetPedidosProntosConstroller();
const getPedidosEntreguesController = new GetPedidosEntreguesController();
const pagamentoComandaController = new PagamentoComandaController();
const comandaController = new ComandaController();
const reservaController = new ReservaController();




//Rotas User ------------
router.post('/laveneta/userinsert', new CreateUserController().handle);
router.post('/laveneta/login', new AuthUserController().handle);

//Rotas Cardapio ------------
router.get('/laveneta/cardapio', cardapioController.getCardapio);

//Rotas Pedidos ------------
router.get('/laveneta/pedidos', pedidosController.getPedidos);
router.post("/laveneta/pedidos", newPedidoController.createPedido);
router.get("/laveneta/pedidos/:mesa", pedidosMesaController.getPedidoPorMesa);

//Rotas Chef ------------
router.put("/laveneta/pedidos/:id/pronto", pedidosProntosController.alterarEstadoPedidoParaPronto);
router.put("/laveneta/pedidos/:id/entregue", pedidosEntregueController.alterarEstadoEntregueParaTrue);
router.get("/laveneta/itens-prontos", getPedidosProntosConstroller.getPedidosProntos);
router.get("/laveneta/itens-entregues", getPedidosEntreguesController.getPedidosEntregues);

//Rotas Comanda ------------
router.put("/laveneta/comandas/:id/efetuarPagamento", pagamentoComandaController.efetuarPagamento);
router.get("/laveneta/comandas/pagas", comandaController.getComandasPagas);

//Rotas Reservas ------------
router.post("/laveneta/reserva", reservaController.criarReserva);
router.delete("/laveneta/reserva/:id", reservaController.deletarReserva);
router.get("/laveneta/reserva/cpf", reservaController.consultarReservaPorCPF);
router.get("/laveneta/reserva", reservaController.consultarReservas);

export { router };