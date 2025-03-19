import { promises as fs } from 'fs';
import path from 'path';
import { User } from "../../core/entities/User";
import { IUserRepository } from "../../application/interfaces/IUserRepository";

const FILE_PATH = path.join(__dirname, '../../data/users.json');
export class UserFileRepository implements IUserRepository {

    // Récupérer tous les utilisateur
    public async getAll(): Promise<User[]> {
      const data = await fs.readFile(FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  
    // Récupérer un utilisateur par ID
    public async getById(id: number): Promise<User | null> {
      const people = await this.getAll();
      const res = people.find(person => person.id === id)
      return res !== undefined? res : null ;
    }
}  