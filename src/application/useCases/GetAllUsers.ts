import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../../core/entities/User";

export class GetAllUsers {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    return await this.userRepository.getAll();
  }
}
