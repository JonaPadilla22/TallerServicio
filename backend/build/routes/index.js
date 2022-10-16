"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const usuarios_1 = __importDefault(require("./usuarios"));
const vehiculos_1 = __importDefault(require("./vehiculos"));
const routes = (0, express_1.Router)();
routes.use("/auth", auth_1.default);
routes.use("/usuarios", usuarios_1.default);
routes.use("/vehiculos", vehiculos_1.default);
exports.default = routes;
