import { Candidate } from "./candidates";

export interface CandidatesRepository {
    addCandidate(candidate: Candidate): Promise<void>;
    getAllCandidates(): Promise<Candidate[]>;
    deleteCandidate(id: number): Promise<void>;
}