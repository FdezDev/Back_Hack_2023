import { Candidate } from "../domain/candidates";
import { CandidatesRepository } from "../domain/candidatesRepository";

// get all candidates

export class GetCandidatesCase {
    constructor(readonly candidatesRepository: CandidatesRepository) {}

    async run(): Promise<Candidate[] | null> {
        try{
            const candidates = await this.candidatesRepository.getAllCandidates();
            return candidates;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}