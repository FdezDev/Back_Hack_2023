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
exports.PgsqlUsersRepository = void 0;
const users_1 = require("../domain/users");
const usersModel_1 = __importDefault(require("./models/usersModel"));
class PgsqlUsersRepository {
    addUser(Name, Cic, IddCi) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUsers = yield usersModel_1.default.create({ Name, Cic, IddCi });
                return new users_1.Users(createdUsers.id, createdUsers.Name, createdUsers.Cic, createdUsers.IddCi);
            }
            catch (error) {
                console.error("Error in PgsqlClientsRepository:", error);
                return null;
            }
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield usersModel_1.default.findAll();
                return users.map(users => new users_1.Users(users.id, users.Name, users.Cic, users.IddCi));
            }
            catch (error) {
                console.error("Error in PgsqlClientsRepository:", error);
                return [];
            }
        });
    }
    deleteUserById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.PgsqlUsersRepository = PgsqlUsersRepository;
