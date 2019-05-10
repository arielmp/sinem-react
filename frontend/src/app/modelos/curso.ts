import { Estudiante } from "./estudiante";
import { Profesor } from "./profesor";
import { Nota } from "./nota";

export class Curso {
    _id: string;
    nombre: string;              //lenguaje, instrumento...
    tipo: string;               // orquesta, ensamble, individual    
    fecha: string;              // año de vigencia
    horario: string;
    estado: string;             // activo,pendiente,cerrado
    notas: Nota[];
    profesor: Profesor;
    estudiantes: Estudiante[];    

    constructor() {
        this.nombre = '';
        this.tipo = '';
        this.fecha = '';
        this.horario = '';
        this.estado = '';
        //this.notas = [];
        this.profesor = new Profesor();
        this.estudiantes = [];
    }

}