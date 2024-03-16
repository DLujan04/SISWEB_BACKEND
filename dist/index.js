"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const productRoutes_1 = __importDefault(require("./src/routes/productRoutes")); // Asegúrate de que esta ruta es correcta
const app = (0, express_1.default)();
const port = 3000;
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use('/api/product', productRoutes_1.default); // Aquí estás montando tus rutas de productos en '/api/product'
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
