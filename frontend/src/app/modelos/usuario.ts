import { Profesor } from "./profesor";

export class Usuario {
    _id: string;
    nombre: string;
    email: string;
    password: string;
    tipo: string;
    profesor: Profesor;

    constructor() {
        this.nombre = '';
        this.email = '';
        this.password = '';
        this.tipo = '';
    }
}