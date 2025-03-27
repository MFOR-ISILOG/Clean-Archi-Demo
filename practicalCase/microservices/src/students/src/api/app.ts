import express from "express";
import cors from "cors"
import { getStudentController, getAllStudentsController } from "./controllers/StudentController";

const app = express();
const port = 3010;
const hostname = 'localhost';

app.use(cors({
  origin: [`http://${hostname}`,"http://127.0.0.1:8080"]
 }));

// Définition des routes de l'API
app.get("/api/student/:id", getStudentController);
app.get("/api/students",  getAllStudentsController);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
