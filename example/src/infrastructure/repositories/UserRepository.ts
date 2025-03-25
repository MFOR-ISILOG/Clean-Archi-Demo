import { IUserRepository } from "../../application/interfaces/IUserRepository";
import {User } from "../../core/entities/User";

// Repository simulé en mémoire
export class UserRepository implements IUserRepository {
  private users: User[] = [
    { id: 1, name: "John Doe", age: 22 },
    { id: 2, name: "Jane Doe", age: 21}
  ];

  async getById(id: number): Promise< User | null> {
    return this. users.find((user) => user.id === id) || null;
  }

  async getAll(): Promise< User[]> {
    return this. users;
  }
}
