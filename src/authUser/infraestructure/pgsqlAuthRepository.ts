import { AuthRepository } from "../domain/authRepository";
import UsersModel from "../../Users/infraestructure/models/usersModel";
import { Auth } from "../domain/auth";

export class PgsqlAuthRepository implements AuthRepository{
    async verifyAuth(Cic: number, IddCi: number): Promise<Auth | null> {
        const user = await UsersModel.findOne({ where: { Cic, IddCi } });
        if (user) {
            return { Cic: user.Cic, IddCi: user.IddCi };
        }
        return null;
    }
}