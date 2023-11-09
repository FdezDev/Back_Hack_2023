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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCandidatesCase = void 0;
const candidates_1 = require("../domain/candidates");
//nombre, apellido, partido
class AddCandidatesCase {
    constructor(candidatesRepository) {
        this.candidatesRepository = candidatesRepository;
    }
    run(name, surname, party) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const candidate = new candidates_1.Candidate(name, surname, party, 0);
                yield this.candidatesRepository.addCandidate(candidate);
                return candidate;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.AddCandidatesCase = AddCandidatesCase;
