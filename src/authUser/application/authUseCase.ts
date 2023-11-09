import { AuthRepository } from '../domain/authRepository';

type AuthResponse = { 
    status: 'success' | 'error', 
    IddCi?: number,
    message?: string 
};

export class AuthUseCase {
    constructor(private authRepository: AuthRepository) {}

    async run(Cic: number, IddCi: number): Promise<AuthResponse> {
        const auth = await this.authRepository.verifyAuth(Cic, IddCi);
        if (auth) {
            return { status: 'success', IddCi: auth.IddCi };
        }
        return { status: 'error', message: 'Cic or IddCi invalid' };
    }
}