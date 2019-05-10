import { Instrumento } from "./instrumento";
import { Profesor } from "./profesor";
import { Encargado } from "./encargado";

export class Estudiante {
    _id: string
    nombre: string;    
    fecha_nacimiento: string;
    lugar_nacimiento: string;
    cedula: string;
    sexo: string;
    telefono: string;
    email: string;
    direccion: string;
    institucion_educativa: string;
    grado: string;    
    expediente: string;
    prestamo: string;
    poliza_estudiantil: string;
    otros_medios: string;
    otras_senas: string;
    estado_estudiante: string;

    instrumento_principal : Instrumento;
    profesor_tutor : Profesor;
    instrumento_complementario : Instrumento;
    profesor_complementario : Profesor;
    encargados: Encargado[];

    constructor() {
        this.expediente= '';
        this.prestamo= '';
        this.nombre= '';
        this.fecha_nacimiento= '';
        this.lugar_nacimiento= '';
        this.cedula= '';
        this.sexo= '';
        this.telefono= '';
        this.email= '';
        this.direccion= '';
        this.institucion_educativa= '';
        this.grado= '';
        this.poliza_estudiantil= '';
        this.otros_medios= '';
        this.otras_senas= '';
        this.estado_estudiante= '';

        //this.instrumento_principal = new Instrumento();
        //this.profesor_tutor = new Profesor();
        //this.instrumento_complementario = new Instrumento();
        //this.profesor_complementario = new Profesor();
        this.encargados = [];
    }

}
