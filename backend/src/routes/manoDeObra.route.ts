import { Router } from "express"
import { ManoDeObraController } from "../controllers/manoDeObra.controller"

const route = Router()

route.get('/', ManoDeObraController.getAll);
route.get('/:id', ManoDeObraController.getById);

route.post('/', ManoDeObraController.insert);
route.put('/:id', ManoDeObraController.update);



export default route