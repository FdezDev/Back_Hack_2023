import { Users } from "../domain/users";
import { UserRepository } from "../domain/usersRepository";
import UsersModel from "./models/usersModel";

export class PgsqlUsersRepository implements UserRepository {
    async addUser(Name: string, Cic: number, IddCi: number): Promise<Users | null> {
        try {
            const createdUsers = await UsersModel.create({ Name, Cic, IddCi });
            return new Users(createdUsers.id, createdUsers.Name, createdUsers.Cic, createdUsers.IddCi, createdUsers.status);
        } catch (error) {
            console.error("Error in PgsqlClientsRepository:", error);
            return null;
        }
    }
    
    async getAllUser(): Promise<Users[]> {
        try {
            const users = await UsersModel.findAll();
            return users.map(users => new Users(users.id, users.Name, users.Cic, users.IddCi, users.status));
        } catch (error) {
            console.error("Error in PgsqlClientsRepository:", error);
            return [];
        }
    }
    deleteUserById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

  

    
}
