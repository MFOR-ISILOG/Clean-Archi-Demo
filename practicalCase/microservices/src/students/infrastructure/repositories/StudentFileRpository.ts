import { promises as fs } from 'fs';
import path from 'path';
import { Student } from "../../core/entities/Student";
import { IStudentRepository } from "../../application/interfaces/IStudentRepository";

const FILE_PATH = path.join(__dirname, '../../data/students.json');
export class StudentFileRepository implements IStudentRepository {

    // Récupérer tous les utilisateur
    public async getAll(): Promise<Student[]> {
      const data = await fs.readFile(FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  
    // Récupérer un utilisateur par ID
    public async getById(id: number): Promise<Student | null> {
      const people = await this.getAll();
      const res = people.find(person => person.id === id)
      return res !== undefined? res : null ;
    }
}  