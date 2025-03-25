import { Student } from "../../core/entities/Student";

export interface IStudentRepository {
  getById(id: string): Promise<Student | null>;
  getAll(): Promise<Student[]>;
}