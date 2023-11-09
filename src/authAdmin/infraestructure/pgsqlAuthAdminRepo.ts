import { AuthAdminRepository } from "../domain/authAdminRepository";
import { AuthAdmin } from "../domain/authAdmin";

export class PgsqlAuthAdminRepository implements AuthAdminRepository {
    async verifyAuthAdmin(email: string, password: string): Promise<AuthAdmin | null> {
        return null;
    }
}