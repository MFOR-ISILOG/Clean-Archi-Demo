import express from "express";
import cors from "cors"
import { getStudentController, getAllStudentsController } from "./controllers/StudentController";

const app = express();
const port = 3010;

// Définition des routes de l'API
app.get("/api/student/:id", getStudentController);
app.get("/api/students",  getAllStudentsController);

app.use(cors({
  origin: "localhost"
}))
// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
