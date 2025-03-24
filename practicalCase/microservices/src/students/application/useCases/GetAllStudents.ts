import { IStudentRepository } from "../interfaces/IStudentRepository";
import { Student } from "../../core/entities/Student";

export class GetAllStudents {
  private userRepository: IStudentRepository;

  constructor(userRepository: IStudentRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<Student[]> {
    return await this.userRepository.getAll();
  }
}