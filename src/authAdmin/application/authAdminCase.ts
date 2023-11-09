import { AuthAdminRepository } from '../domain/authAdminRepository';

type AuthResponse = { 
    status: 'success' | 'error', 
    token?: string,
    email?: string,
    message?: string 
};

export class AuthAdminCase {
    constructor(private authRepository: AuthAdminRepository) {}

    async run(email: string, password: string): Promise<AuthResponse> {
        const admin = await this.authRepository.verifyAuthAdmin(email, password);  
        if (!admin) return { status: 'error', message: 'Invalid credentials' };
        return { status: 'success', token: 'token', email: admin.email };
    }
}