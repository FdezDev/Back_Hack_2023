import { Users } from "./users";

export interface UserRepository {
    addUser(Name: string, Cic: number, IddCi: number): Promise<Users | null>;
    getAllUser(): Promise<Users[]>;
    deleteUserById(id: number): Promise<boolean>;
}