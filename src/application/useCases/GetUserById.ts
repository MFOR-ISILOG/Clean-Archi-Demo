import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../../core/entities/User";

export class GetUserById {
  private userRepository: IUserRepository;

  constructor(userRepository : IUserRepository) {
    this. userRepository = userRepository;
  }

  async execute(id: number): Promise<User | null> {
    return await this. userRepository.getById(id);
  }
}
