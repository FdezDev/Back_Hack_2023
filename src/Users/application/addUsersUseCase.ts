import { Users} from "../domain/users";
import { UserRepository } from "../domain/usersRepository";

export class AddUserUseCase {
    constructor(readonly userRepository: UserRepository) {}
    async run(Name: string, Cic: number, IddCi: number): Promise<Users | null> {
        try {
            const createdUser = await this.userRepository.addUser(Name, Cic, IddCi);
            return createdUser;
        } catch (error) {
            console.error("Error in addUserUseCase:", error);
            return null;
        }
    }
}