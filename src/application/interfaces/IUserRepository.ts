import { User } from "../../core/entities/User";

export interface IUserRepository {
  getById(id: number): Promise<User | null>;
  getAll(): Promise<User[]>;
}
