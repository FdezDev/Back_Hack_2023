import { Admin } from "../domain/admin";
import { AdminRepository } from "../domain/adminRepository";

export class AddAdminUseCase {
    constructor(readonly adminRepository: AdminRepository) {}
    async run(name: string, email: string, password: string): Promise<Admin | null> {
        try {
            const createdAdmin = await this.adminRepository.addAdmin(name, email, password);
            return createdAdmin;
        } catch (error) {
            console.error("Error in addUserUseCase:", error);
            return null;
        }
    }
}