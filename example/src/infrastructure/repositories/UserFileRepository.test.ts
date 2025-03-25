//import { UserRepository } from './UserRepository';
import mockfs from 'mock-fs';
import { UserFileRepository } from './UserFileRepository';

// Simuler un fichier JSON contenant des utilisateurs
const mockData = JSON.stringify([
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 }
]);

describe('UserFileRepository', () => {
  let userFileRepository: UserFileRepository;

  beforeEach(() => {
    // Avant chaque test, nous simulons un système de fichiers avec mock-fs
    mockfs({
      'data/users.json': mockData
    });
    userFileRepository = new UserFileRepository();
  });

  afterEach(() => {
    // Après chaque test, nous nettoyons la simulation du système de fichiers
    mockfs.restore();
  });

  it('should get all users', async () => {
    const users = await userFileRepository.getAll();
    expect(users).toHaveLength(2);
    expect(users[0].name).toBe('John Doe');
    expect(users[1].name).toBe('Jane Smith');
  });

  it('should get a user by id', async () => {
    const user = await userFileRepository.getById(1);
    expect(user).toBeDefined();
    expect(user?.name).toBe('John Doe');
  });

  it('should return null if user is not found by id', async () => {
    const user = await userFileRepository.getById(999);
    expect(user).toBeNull();
  });

});
