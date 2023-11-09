"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgsqlCandidatesRepository = void 0;
const candidates_1 = require("../domain/candidates");
const candidatesModel_1 = __importDefault(require("./models/candidatesModel"));
class PgsqlCandidatesRepository {
    addCandidate(candidate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield candidatesModel_1.default.create({
                name: candidate.name,
                surname: candidate.surname,
                party: candidate.party,
                id: candidate.id
            });
        });
    }
    getAllCandidates() {
        return __awaiter(this, void 0, void 0, function* () {
            const candidates = yield candidatesModel_1.default.findAll();
            return candidates.map((candidate) => {
                return new candidates_1.Candidate(candidate.name, candidate.surname, candidate.party, candidate.id);
            });
        });
    }
    deleteCandidate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield candidatesModel_1.default.destroy({
                where: {
                    id: id
                }
            });
        });
    }
}
exports.PgsqlCandidatesRepository = PgsqlCandidatesRepository;
