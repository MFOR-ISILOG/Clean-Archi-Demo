import { Request, Response } from "express";
import { GetStudentById } from "../../application/useCases/GetStudentById";
import { GetAllStudents } from "../../application/useCases/GetAllStudents";
import { StudentFileRepository } from "../../infrastructure/repositories/StudentFileRepository";

// Création du repository et des cas d'utilisation
const studentRepository = new StudentFileRepository();
const getUserById = new GetStudentById(studentRepository);
const getAllUsers = new GetAllStudents(studentRepository);

// Contrôleur pour récupérer un utilisateur par son ID
export const getUserController = async (req: Request, res: Response): Promise<any> => {
   const { id } = req.params; const person = await getUserById.execute(parseInt(id, 10));
if (person) {
 return res.json(person); 
 }
 return res.status(404).json({ message: "Person not found" });
};

// Contrôleur pour récupérer tous les utilisateurs
export const getAllUsersController = async (req: Request, res: Response): Promise<any> => {
 const persons = await getAllUsers.execute();
 return res.json(persons);
};
