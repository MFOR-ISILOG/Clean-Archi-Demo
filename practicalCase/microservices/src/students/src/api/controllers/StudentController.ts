import { Request, Response } from "express";
import { GetStudentById } from "../../application/useCases/GetStudentById";
import { GetAllStudents } from "../../application/useCases/GetAllStudents";
import { StudentFileRepository } from "../../infrastructure/repositories/StudentFileRpository";

// Création du repository et des cas d'utilisation
const studentRepository = new StudentFileRepository();
const getStudentById = new GetStudentById(studentRepository);
const getAllStudents = new GetAllStudents(studentRepository);

// Contrôleur pour récupérer un utilisateur par son ID
export const getStudentController = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const person = await getStudentById.execute(id);
    if (person) {
        return res.json(person); 
    }
    return res.status(404).json({ message: "Person not found" });
};

// Contrôleur pour récupérer tous les utilisateurs
export const getAllStudentsController = async (req: Request, res: Response): Promise<any> => {
 const persons = await getAllStudents.execute();
 return res.json(persons);
};