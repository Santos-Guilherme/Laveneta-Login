import prismaClient from "../../../prisma/prismaClient";
interface AuthRequest {
    email: string;
    password: string;
}
class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        //verificar se email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new Error("User/PassWord Invalido")
        }
        //verificar validade password

        if (user.senha !== password) {
            throw new Error("User/PassWord Invalido.")
        }
        //return { ok: "Chamada serviço Auth" }
        return {
            nomeUsuario: user.nome
        }
    }
}
export { AuthUserService }

