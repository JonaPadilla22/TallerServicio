import { Router } from "express"
import { UserTypeController } from "../controllers/tipoUsuario.controller"

const route = Router()

route.get('/', UserTypeController.getAll);
route.get('/:id', UserTypeController.getById);

route.post('/', UserTypeController.insert);
route.put('/:id', UserTypeController.update);



export default route