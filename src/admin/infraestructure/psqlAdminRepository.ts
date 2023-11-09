import { Admin } from "../domain/admin";
import { AdminRepository } from "../domain/adminRepository";
import AdminModel from "./models/adminModel";


export class PgsqlAdminRepository implements AdminRepository {
    async addAdmin(Name: string, email: string, password: string): Promise<Admin | null> {
        try {
            const createdAdmin = await AdminModel.create({ Name, email, password });
            return new Admin(createdAdmin.id, createdAdmin.name, createdAdmin.email, createdAdmin.password);
        } catch (error) {
            console.error("Error in PgsqlClientsRepository:", error);
            return null;
        }
    }
    
    async getAllUser(): Promise<Admin[]> {
        try {
            const admin = await AdminModel.findAll();
            return admin.map(admin => new Admin(admin.id, admin.name, admin.email, admin.password));
        } catch (error) {
            console.error("Error in PgsqlClientsRepository:", error);
            return [];
        }
    }
    
    deleteUserById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

  

    
}