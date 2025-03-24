import { Student } from "../../core/entities/Student";

export interface IStudentRepository {
  getById(id: number): Promise<Student | null>;
  getAll(): Promise<Student[]>;
}