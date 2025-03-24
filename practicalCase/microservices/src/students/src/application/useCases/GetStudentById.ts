import { IStudentRepository } from "../interfaces/IStudentRepository";
import { Student } from "../../core/entities/Student";

export class GetStudentById {
  private userRepository: IStudentRepository;

  constructor(userRepository : IStudentRepository) {
    this. userRepository = userRepository;
  }

  async execute(id: string): Promise<Student | null> {
    return await this. userRepository.getById(id);
  }
}