"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marca_controller_1 = require("../controllers/marca.controller");
const route = (0, express_1.Router)();
route.get('/', marca_controller_1.BrandController.getAll);
route.get('/:id', marca_controller_1.BrandController.getById);
route.post('/', marca_controller_1.BrandController.insert);
route.put('/:id', marca_controller_1.BrandController.update);
exports.default = route;
