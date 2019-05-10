import { Instrumento } from "./instrumento";

export class Profesor {
    _id: string;
    nombre: string;
    cedula: string;
    fecha_nacimiento: string;
    telefono_fijo: string;
    telefono_movil: string;
    email: string;
    direccion: string;
    tipo: string;
    instrumentos: Instrumento[];
    horario: string[];
    estado: string;

    constructor() {
        this.nombre = '';
        this.cedula = '';
        this.fecha_nacimiento = '';
        this.telefono_fijo = '';
        this.telefono_movil = '';
        this.email = '';
        this.direccion = '';
        this.tipo = '';
        this.instrumentos = []; 
        this.horario = [];
        this.estado = 'Activo';
    }
}
