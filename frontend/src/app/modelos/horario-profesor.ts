import { Estudiante } from "./estudiante";
import { Profesor } from "./profesor";
import { Curso } from "./curso";

export class HorarioProfesor {
    _id: string;
    profesor: Profesor;
    estudiante: Estudiante;
    curso: Curso;
    horario: string;  // formato k08,m09,j13...
}
