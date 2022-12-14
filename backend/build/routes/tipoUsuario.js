"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoUsuario_1 = require("../controllers/tipoUsuario");
const route = (0, express_1.Router)();
route.get('/', tipoUsuario_1.UserTypeController.getAll);
route.get('/:id', tipoUsuario_1.UserTypeController.getById);
route.post('/', tipoUsuario_1.UserTypeController.insert);
route.put('/:id', tipoUsuario_1.UserTypeController.update);
exports.default = route;
