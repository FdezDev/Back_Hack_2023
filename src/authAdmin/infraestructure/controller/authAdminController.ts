import { Request } from "express";
import { AuthAdminCase } from "../../application/authAdminCase";

export class AuthAdminController {
    constructor(private authAdminUseCase: AuthAdminCase) {}

    async run(req: Request) {
        const { email, password } = req.body;
        const authResponse = await this.authAdminUseCase.run(email, password);
        return authResponse;
    }
}