import { Request, Response } from "express";
import { GetCandidatesCase } from "../../application/getCandidatesCase";

export class GetCandidatesController {
    static run: any;
    constructor(private getCandidatesCase: GetCandidatesCase) {}

    async run(req: Request, res: Response) {
        try {
            const getCandidatesResponse = await this.getCandidatesCase.run();
            return res.status(200).json(getCandidatesResponse);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}