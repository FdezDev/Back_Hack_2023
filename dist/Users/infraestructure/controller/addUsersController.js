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
exports.AddUsersController = void 0;
class AddUsersController {
    constructor(addusersusecase) {
        this.addusersusecase = addusersusecase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Name, Cic, IddCi } = req.body;
            try {
                const adduses = yield this.addusersusecase.run(Name, Cic, IddCi);
                if (adduses) {
                    return res.status(201).send({
                        status: "success",
                        data: adduses,
                        message: "Client created successfully"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "error",
                        data: [],
                        message: "Error creating new client, please try again later"
                    });
                }
            }
            catch (error) {
                console.error("Error in CreateClientsController:", error);
                res.status(500).send({
                    status: "error",
                    message: "Internal server error"
                });
            }
        });
    }
}
exports.AddUsersController = AddUsersController;
