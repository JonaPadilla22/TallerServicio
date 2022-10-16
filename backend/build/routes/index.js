"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const manoDeObra_route_1 = __importDefault(require("./manoDeObra.route"));
const marca_route_1 = __importDefault(require("./marca.route"));
const modelo_route_1 = __importDefault(require("./modelo.route"));
const tipoPersona_route_1 = __importDefault(require("./tipoPersona.route"));
const tipoRefaccion_route_1 = __importDefault(require("./tipoRefaccion.route"));
const tipoServicio_route_1 = __importDefault(require("./tipoServicio.route"));
const tipoUsuario_route_1 = __importDefault(require("./tipoUsuario.route"));
const routes = (0, express_1.Router)();
routes.use("/manoDeObra", manoDeObra_route_1.default);
routes.use("/marca", marca_route_1.default);
routes.use("/modeloVehiculo", modelo_route_1.default);
routes.use("/tipoPersona", tipoPersona_route_1.default);
routes.use("/tipoRefaccion", tipoRefaccion_route_1.default);
routes.use("/tipoServicio", tipoServicio_route_1.default);
routes.use("/tipoUsuario", tipoUsuario_route_1.default);
exports.default = routes;
// tipo_usuario
