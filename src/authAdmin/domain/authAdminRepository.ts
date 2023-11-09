import { AuthAdmin } from "./authAdmin";

export interface AuthAdminRepository {
    verifyAuthAdmin(email: string, password: string): Promise<AuthAdmin | null>;
}