import { Request, Response } from "express";
import { AddUserUseCase } from "../../application/addUsersUseCase";


export class AddUsersController {
    constructor(readonly addusersusecase: AddUserUseCase) { }

    async run(req: Request, res: Response) {
        const { Name, Cic, IddCi } = req.body;

        try {
            const adduses = await this.addusersusecase.run(Name, Cic, IddCi);

            if (adduses) {
                return res.status(201).send({
                    status: "success",
                    data: adduses,
                    message: "Client created successfully"
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
