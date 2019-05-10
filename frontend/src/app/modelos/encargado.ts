import { Estudiante } from "./estudiante";

export class Encargado {
    _id: string;
    nombre: string;
    cedula: string;
    estado_civil: string;
    telefono_fijo: string;
    telefono_movil: string;
    email: string;
    oficio: string;
    lugar_trabajo: string;
    telefono_trabajo: string;
    direccion_trabajo: string;    
    estudiantes: Estudiante[];

    constructor() {
        this.nombre = '';
        this.cedula = '';
        this.estado_civil = '';
        this.telefono_fijo = '';
        this.telefono_movil = '';
        this.email = '';
        this.oficio = '';
        this.lugar_trabajo = '';
        this.telefono_trabajo = '';
        this.direccion_trabajo = '';
        this.estudiantes = [];
    }

}