import { Request, Response } from "express";
import { AuthUseCase } from "../../application/authUseCase";


// parte de autenticacion de la aplicacion con cic e iddci
export class AuthController {
    constructor(readonly authusercase: AuthUseCase) { }

    async run(req: Request, res: Response) {
        const { Cic, IddCi } = req.body;
        const auth = await this.authusercase.run(Cic, IddCi);
        if (auth.status === 'success') {
            return res.status(200).json({ auth });
        }
        return res.status(400).json({ auth });
    }
}
