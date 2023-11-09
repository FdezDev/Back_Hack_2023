import { Request, Response } from "express";
import { AddCandidatesCase } from "../../application/addCandidatesCase";

//nombre, apellido, partido

export class AddCandidatesController {
    static run: any;
    constructor(readonly addCandidatesCase: AddCandidatesCase) {}

    async run(req: Request, res: Response) {
        const { name, surname, party } = req.body;
        try {
            const addCandidatesResponse = await this.addCandidatesCase.run(name, surname, party);
            return res.status(200).json(addCandidatesResponse);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}