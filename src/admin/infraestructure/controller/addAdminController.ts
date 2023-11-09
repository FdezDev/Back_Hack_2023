import { Request, Response } from "express";
import { AddAdminUseCase } from "../../application/addAdminUseCase";


export class AddAdminController {
    constructor(readonly addAdminusecase: AddAdminUseCase) { }

    async run(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            const addadmin = await this.addAdminusecase.run(name, email, password);

            if (addadmin) {
                return res.status(201).send({
                    status: "success",
                    data: addadmin,
                    message: "Admin created successfully"
                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    message: "Error creating new client, please try again later"
                });
            }
        } catch (error) {
            console.error("Error in CreateClientsController:", error);
            res.status(500).send({
                status: "error",
                message: "Internal server error"
            });
        }
    }
}
