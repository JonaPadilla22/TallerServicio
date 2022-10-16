import { Router } from "express";
import manoDeObra from "./manoDeObra.route";
import marca from "./marca.route";
import modelo from "./modelo.route";
import personType from "./tipoPersona.route";
import repairType from "./tipoRefaccion.route";
import serviceType from "./tipoServicio.route";
import userType from "./tipoUsuario.route";


const routes = Router();

routes.use("/manoDeObra", manoDeObra);
routes.use("/marca", marca);
routes.use("/modeloVehiculo", modelo);
routes.use("/tipoPersona", personType);
routes.use("/tipoRefaccion", repairType);
routes.use("/tipoServicio", serviceType);
routes.use("/tipoUsuario", userType);

export default routes;