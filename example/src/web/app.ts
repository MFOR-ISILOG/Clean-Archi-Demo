import express from "express";
import { getUserController, getAllUsersController } from "./controllers/UserController";

const app = express();
const port = 3000;

// Définition des routes de l'API
app.get("/api/user/:id", getUserController);
app.get("/api/users",  getAllUsersController);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


