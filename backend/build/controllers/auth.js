"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_1 = require("../services/auth");
class AuthController {
}
exports.AuthController = AuthController;
_a = AuthController;
AuthController.loginAuth = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = body;
        const response = yield (0, auth_1.loginUser)(item);
        if (response == "CONTRASEÑA INCORRECTA") {
            res.status(403);
        }
        else if (response == "DATOS INVÁLIDOS") {
            res.status(404);
        }
        else {
            res.status(200);
        }
        res.json(response);
    }
    catch (e) {
        res.send(e);
    }
});
