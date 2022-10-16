import { Router } from "express";

import auth from "./auth";
import usuarios from "./usuarios";
import vehiculos from "./vehiculos"

const routes = Router();

routes.use("/auth", auth);
routes.use("/usuarios", usuarios);
routes.use("/vehiculos", vehiculos);

export default routes;