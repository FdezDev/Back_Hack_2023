import { Candidate } from "../domain/candidates";
import { CandidatesRepository } from "../domain/candidatesRepository";

//nombre, apellido, partido

export class AddCandidatesCase {
    constructor(readonly candidatesRepository: CandidatesRepository) {}

    async run(name: string, surname: string, party: string): Promise<Candidate | null> {
        try{
            const candidate = new Candidate(name, surname, party, 0);
            await this.candidatesRepository.addCandidate(candidate);
            return candidate;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}