import { Estudiante } from "./estudiante";
import { Curso } from "./curso";

export class Nota {
      
    _id: string;
    estudiante: Estudiante;
    curso: Curso;
    nota_i: string;
    nota_ii: string;
    comentario: string;
    horario: string;  // si el curso es de instrumento

    constructor() {        
        this.estudiante = new Estudiante();
        this.curso = new Curso();
        this.nota_i = '';
        this.nota_ii = '';
        this.comentario = '';
        this.horario = '';
    }

}
