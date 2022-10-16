import { Router } from "express"
import { VehiculosController } from "../controllers/vehiculos"

const route = Router()

route.get('/', VehiculosController.getAll);
route.get('/:id', VehiculosController.getById);
route.post('/', VehiculosController.insert);
route.put('/:id', VehiculosController.update);

export default route