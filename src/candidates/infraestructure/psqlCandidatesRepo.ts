import { Candidate } from "../domain/candidates";
import { CandidatesRepository } from "../domain/candidatesRepository";
import CandidateModel from "./models/candidatesModel";

export class PgsqlCandidatesRepository implements CandidatesRepository {
    async addCandidate(candidate: Candidate): Promise<void> {
        await CandidateModel.create({
            name: candidate.name,
            surname: candidate.surname,
            party: candidate.party,
            id: candidate.id
        });
    }

    async getAllCandidates(): Promise<Candidate[]> {
        const candidates = await CandidateModel.findAll();
        return candidates.map((candidate) => {
            return new Candidate(
                candidate.name,
                candidate.surname,
                candidate.party,
                candidate.id
            );
        });
    }

    async deleteCandidate(id: number): Promise<void> {
        await CandidateModel.destroy({
            where: {
                id: id
            }
        });
    }
}

