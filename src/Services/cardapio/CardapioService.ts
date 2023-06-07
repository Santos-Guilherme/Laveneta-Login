import prismaClient from "../../../prisma/prismaClient";

class CardapioService {
  async getCardapio() {
    const cardapio = await prismaClient.cardapio.findMany();
    return cardapio;
  }
}

export { CardapioService };