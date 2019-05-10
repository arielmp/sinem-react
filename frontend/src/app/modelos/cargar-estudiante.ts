import { Estudiante } from "./estudiante";
import { Curso } from "./curso";

export class CargarEstudiante {

    estudianteActual: Estudiante;
    numeroFila: number;
    
    existelenguaje: boolean = false;
    iNotaLenguaje: string;
    
    profesorString: string;
    instrumentoProfesorString: string;
    iNotaIntrumento: string;
    observaciones: string;
    
    existeOrquesta: boolean = false;
    iNotaOrquesta: string;

    existeEnsamble: boolean = false;
    iNotaEnsamble: string

    existeEnsambleComp: boolean = false;
    iNotaEnsambleComplementario: string;

    cursoInstrumento: Curso;
    cursoLenguaje: Curso;
    cursoOrquesta: Curso;   //ensamble0
    cursoEnsamble: Curso;      //ensamble1
    cursoEnsambleComp: Curso;   //ensamble2

    constructor(){
        this.iNotaEnsamble = '';
        this.iNotaIntrumento ='';
        this.iNotaEnsambleComplementario = '';
        this.iNotaLenguaje = '';
        this.iNotaOrquesta = '';
        this.observaciones = '';
    }

    


}


