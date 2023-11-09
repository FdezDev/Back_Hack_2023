import { Admin } from "./admin";

export interface AdminRepository {
    addAdmin(Name: string, email: string, password: string): Promise<Admin | null>;
    getAllUser(): Promise<Admin[]>;
    deleteUserById(id: number): Promise<boolean>;
}