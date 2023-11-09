import { Auth } from "./auth";

// este sera la autenticacion de la aplicacion
export interface AuthRepository {
    verifyAuth(Cic: number, IddCi: number): Promise<Auth | null>;
}