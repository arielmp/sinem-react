import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../modelos/estudiante';
import { Encargado } from '../modelos/encargado';
import { Profesor } from '../modelos/profesor';
import { Curso } from '../modelos/curso';
import { Nota } from '../modelos/nota';
import { Instrumento } from '../modelos/instrumento';
import { CargarEstudiante } from '../modelos/cargar-estudiante';

import { EstudianteService } from '../servicios/estudiante.service';
import { EncargadoService } from '../servicios/encargado.service';
import { InstrumentoService } from '../servicios/instrumento.service';
import { CursoService } from '../servicios/curso.service';
import { ProfesorService } from '../servicios/profesor.service';
import { NotaService } from '../servicios/nota.service';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {



  constructor(
    private serEstudiante: EstudianteService,
    private serEncargado: EncargadoService,
    private serInstrumento: InstrumentoService,
    private serCurso: CursoService,
    private serProfesor: ProfesorService,
    private serNota: NotaService
  ) { }

  objCursos: Curso[];
  objNotas: Nota[];
  objInstrumentos: Instrumento[];
  objProfesores: Profesor[];
  objEstudiantes: Estudiante[];
  objEncargados: Encargado[];


  ngOnInit() {
    this.obtenerCursos();
    this.obtenerInstrumentos();
    this.obtenerProfesores();
  }

  obtenerCursos() {
    this.serCurso.obtenerCursos().subscribe(res => {
      this.objCursos = res as Curso[];
      console.log(this.objCursos);
    })
  }

  obtenerInstrumentos() {
    this.serInstrumento.obtenerInstrumentos().subscribe(res => {
      this.objInstrumentos = res as Instrumento[];
      console.log(this.objInstrumentos);
    })
  }

  obtenerProfesores() {
    this.serProfesor.obtenerProfesores().subscribe(res => {
      this.objProfesores = res as Profesor[];
      console.log(this.objProfesores);
    });
  }

  obtenerNotas() {
    this.serNota.obtenerNotas().subscribe(res => {
      this.objNotas = res as Nota[];
      console.log(this.objNotas);
    });
  }

  obtenerEncargados() {
    this.serEncargado.obtenerEncargados().subscribe(res => {
      this.objEncargados = res as Encargado[];
      console.log(this.objEncargados);
    });
  }

  // FALTA ANALIZAR CADA FILA, AGREGAR CADA ESTUDIANTE A SU RESPECTIVOS CURSOS
  // ENCARGADOS A ESTUDIANTES
  // PROFESOR A ESTUDIANTES
  // NOTAS A CURSOS 


  /*analizarFila(fila: string[], numeroFila: number) {
    //this.agregarInstrumento(fila, numeroFila);
    //this.agregarProfesor(fila, numeroFila);
    //this.agregarCurso(fila, numeroFila, 2); // Instrumento
    //this.agregarCurso(fila, numeroFila, 44); // lenguaje
    //this.agregarCurso(fila, numeroFila, 49); // orquesta
    //this.agregarCurso(fila, numeroFila, 52); // ensamble
    //this.agregarCurso(fila, numeroFila, 55); // ensamble opcional
    this.agregarEstudiante(fila, numeroFila);
    //this.agregarEncargados(fila); 
  }*/

  arregloInstrumentos: string[] = [];
  objInstrumentosGuardar: Instrumento[] = [];
  instrumentosfilas: {}[] = [];


  objCargarEstudiantes: CargarEstudiante[] = [];

  probando() {
    let nota = this.objNotas.find(obj => {
      return obj.curso._id == "5c00ba065d137b0d148d9b30" && obj.estudiante._id == "5c02f902aa1ac0095c585a9f";
    });
    console.log(nota);
  }

  agregarInstrumento(fila: string[], numeroFila: number) {
    let nombre = fila[2].toUpperCase().trim();

    if (numeroFila == 0) {
      let instrumento = new Instrumento();
      instrumento.nombre = nombre;
      this.objInstrumentosGuardar.push(instrumento);
      this.arregloInstrumentos.push(nombre);
      console.log(nombre);
    } else {
      if (!this.arregloInstrumentos.includes(nombre)) {
        let instrumento = new Instrumento();
        instrumento.nombre = nombre;
        this.objInstrumentosGuardar.push(instrumento);
        this.arregloInstrumentos.push(nombre);
        console.log(nombre);
      }
    }
  }

  guardarInstrumentos() {
    this.objInstrumentosGuardar.forEach(inst => {
      this.serInstrumento.insertarInstrumento(inst).subscribe(res => {
        let instrumento = res as Instrumento;
        this.objInstrumentosGuardar[this.objInstrumentosGuardar.indexOf(inst)]._id = instrumento._id;
        console.log('guardado');
      })
    });
    console.log(this.objInstrumentosGuardar);
  }

  arregloProfesores: string[] = []
  objProfesoresGuardar: Profesor[] = [];
  agregarProfesor(fila: string[], numeroFila: number) {
    let nombre = fila[3].toUpperCase().trim();
    if (nombre != "") {
      if (numeroFila == 0) {
        let prof = new Profesor();
        prof.nombre = nombre;
        this.objProfesoresGuardar.push(prof);
        this.arregloProfesores.push(nombre);
        console.log(nombre);
      } else {
        if (!this.arregloProfesores.includes(nombre)) {
          let prof = new Profesor();
          prof.nombre = nombre;
          this.objProfesoresGuardar.push(prof);
          this.arregloProfesores.push(nombre);
          console.log(nombre);
        }
      }
    }
  }

  guardarProfesores() {
    this.objProfesoresGuardar.forEach(prof => {
      this.serProfesor.insertarProfesor(prof).subscribe(res => {
        let profe = res as Profesor;
        this.objProfesoresGuardar[this.objProfesoresGuardar.indexOf(prof)]._id = profe._id;
        console.log('guardado');
      })
    });
    console.log(this.objProfesoresGuardar);
  }

  arregloCursos: string[] = [];
  objCursosGuardar: Curso[] = [];
  agregarCurso(fila: string[], numeroFila: number, celda: number) {
    let objCurso: Curso;
    let nombre = fila[celda].toUpperCase().trim();
    if (nombre != "") {
      if (numeroFila == 0) {
        objCurso = new Curso();
        objCurso.nombre = nombre;
        if (celda == 2) {
          objCurso.tipo = 'Instrumento';
        }
        if (celda == 44) {
          objCurso.tipo = 'Lenguaje';
        }
        if (celda == 49) {
          objCurso.tipo = 'Orquesta';
        }
        if (celda == 52) {
          objCurso.tipo = 'Ensamble';
        }
        if (celda == 55) {
          objCurso.tipo = 'Emsamble';
        }
        this.objCursosGuardar.push(objCurso);
        this.arregloProfesores.push(nombre);
        console.log(nombre);
      } else {
        if (!this.arregloProfesores.includes(nombre)) {
          objCurso = new Curso();
          objCurso.nombre = nombre;
          if (celda == 2) {
            objCurso.tipo = 'Instrumento';
          }
          if (celda == 44) {
            objCurso.tipo = 'Lenguaje';
          }
          if (celda == 49) {
            objCurso.tipo = 'Orquesta';
          }
          if (celda == 52) {
            objCurso.tipo = 'Ensamble';
          }
          if (celda == 55) {
            objCurso.tipo = 'Emsamble';
          }
          this.objCursosGuardar.push(objCurso);
          this.arregloProfesores.push(nombre);
          console.log(nombre);
        }
      }
    }
  }

  guardarCursos() {
    this.objCursosGuardar.forEach(curso => {
      this.serCurso.insertarCurso(curso).subscribe(res => {
        let cursoguardado = res as Curso;
        this.objCursosGuardar[this.objCursosGuardar.indexOf(curso)]._id = cursoguardado._id;
      })
    });
    console.log(this.objCursosGuardar);
  }


  objEstudiantesGuardar: Estudiante[] = []
  agregarEstudiante(filaCVS: string[], fila: number) {
    let objEstudiante: Estudiante;
    objEstudiante = new Estudiante();
    //LLENAR ESTUDIANTE
    objEstudiante.expediente = filaCVS[1];
    objEstudiante.prestamo = filaCVS[4];
    objEstudiante.nombre = filaCVS[7];
    objEstudiante.fecha_nacimiento = filaCVS[8];
    objEstudiante.lugar_nacimiento = filaCVS[9];
    objEstudiante.cedula = filaCVS[10];
    objEstudiante.sexo = filaCVS[11];
    objEstudiante.telefono = filaCVS[12];
    objEstudiante.email = filaCVS[13];
    objEstudiante.direccion = filaCVS[14];
    objEstudiante.institucion_educativa = filaCVS[15];
    objEstudiante.grado = filaCVS[16];
    objEstudiante.poliza_estudiantil = filaCVS[37];
    objEstudiante.otros_medios = filaCVS[38];
    objEstudiante.otras_senas = filaCVS[39];
    objEstudiante.estado_estudiante = filaCVS[60];


    //Guardar instrumento
    objEstudiante.instrumento_principal = this.objInstrumentos.find(obj => {
      return obj.nombre === filaCVS[2].trim();
    })

    // ENCARGADO 1 
    if (filaCVS[17].toUpperCase().trim() != '' && filaCVS[17].toUpperCase().trim() != 'NO INDICA') {
      objEstudiante.encargados.push(
        this.objEncargados.find(obj => {
          return obj.nombre === filaCVS[17].toUpperCase().trim();
        })
      );
    }

    // ENCARGADO 2
    if (filaCVS[27].toUpperCase().trim() != '' && filaCVS[27].toUpperCase().trim() != 'NO INDICA') {
      objEstudiante.encargados.push(
        this.objEncargados.find(obj => {
          return obj.nombre === filaCVS[27].toUpperCase().trim();
        })
      );
    }

    this.objEstudiantesGuardar.push(objEstudiante);


    //agregar a objeto de datosEstudiante
    let cargar = new CargarEstudiante()
    cargar.estudianteActual = objEstudiante;
    cargar.numeroFila = fila + 1;

    //Curso individual
    cargar.cursoInstrumento = this.objCursos.find(obj => {
      return obj.nombre === 'INSTRUMENTO' && obj.profesor.nombre === filaCVS[3].trim();
    });
    cargar.iNotaIntrumento = filaCVS[40];
    cargar.observaciones = filaCVS[59];

    //lenguaje
    if (filaCVS[44].trim() != '') {
      cargar.existelenguaje = true;
      cargar.cursoLenguaje = this.objCursos.find(obj => {
        return obj.nombre === filaCVS[44].trim() && obj.profesor.nombre === filaCVS[45].trim() && obj.horario === filaCVS[46].trim();
      });
      cargar.iNotaLenguaje = filaCVS[47];
    }


    //orquesta ensamble0
    if (filaCVS[49].trim() != '') {
      console.log(filaCVS[49].trim());
      cargar.existeOrquesta = true;
      cargar.cursoOrquesta = this.objCursos.find(obj => {
        return obj.nombre === filaCVS[49].trim();
      });
      cargar.iNotaOrquesta = filaCVS[50];
    }

    //ensamble 1
    if (filaCVS[52].trim() != '') {
      console.log(filaCVS[52].trim());
      cargar.existeEnsamble = true;
      cargar.cursoEnsamble = this.objCursos.find(obj => {
        return obj.nombre === filaCVS[52].trim();
      });
      cargar.iNotaEnsamble = filaCVS[53];
    }

    //ensamble 2
    if (filaCVS[55].trim() != '') {
      console.log(filaCVS[55].trim());
      cargar.existeEnsambleComp = true;
      cargar.cursoEnsambleComp = this.objCursos.find(obj => {
        return obj.nombre === filaCVS[55].trim();
      });
      cargar.iNotaEnsambleComplementario = filaCVS[56];
    }

    this.objCargarEstudiantes.push(cargar);
    console.log(cargar);
  }


  guardarEstudiantes() {
    this.objCargarEstudiantes.forEach(cargarEst => {
      this.serEstudiante.insertarEstudiante(cargarEst.estudianteActual).subscribe(res => {
        let estudiante = res as Estudiante;
        this.objCargarEstudiantes[this.objCargarEstudiantes.indexOf(cargarEst)].estudianteActual = estudiante;
        console.log('guardado');
      })
    })
  }

  guardarCursoInstrumento() {
    this.objCargarEstudiantes.forEach(carEst => {
      console.log(carEst.cursoInstrumento);
      let indice = this.objCursos.find(obj => {
        return obj._id === carEst.cursoInstrumento._id;
      })
      this.objCursos[this.objCursos.indexOf(indice)].estudiantes.push(carEst.estudianteActual);
    });

    this.objCursos.forEach(curso => {
      this.serCurso.editarCurso(curso).subscribe(res => {
        console.log('guardado');
      });
    });
  }

  guardarCursoLenguaje() {
    this.objCargarEstudiantes.forEach(carEst => {
      if (carEst.existelenguaje == true) {
        let indice = this.objCursos.find(obj => {
          return obj._id === carEst.cursoLenguaje._id;
        });
        this.objCursos[this.objCursos.indexOf(indice)].estudiantes.push(carEst.estudianteActual);
      }
    });

    this.objCursos.forEach(curso => {
      this.serCurso.editarCurso(curso).subscribe(res => {
        console.log('guardado');
      });
    });


  }

  guardarCursoOrquesta() {
    this.objCargarEstudiantes.forEach(carEst => {
      if (carEst.existeOrquesta == true) {
        console.log(carEst);
        let indice = this.objCursos.find(obj => {
          return obj._id === carEst.cursoOrquesta._id;
        });
        this.objCursos[this.objCursos.indexOf(indice)].estudiantes.push(carEst.estudianteActual);
      }
    });

    this.objCursos.forEach(curso => {
      this.serCurso.editarCurso(curso).subscribe(res => {
        console.log('guardado');
      });
    });
  }

  guardarCursoEnsamble() {
    this.objCargarEstudiantes.forEach(carEst => {
      if (carEst.existeEnsamble == true) {
        console.log(carEst);
        let indice = this.objCursos.find(obj => {
          return obj._id === carEst.cursoEnsamble._id;
        });
        this.objCursos[this.objCursos.indexOf(indice)].estudiantes.push(carEst.estudianteActual);
      }
    });

    this.objCursos.forEach(curso => {
      this.serCurso.editarCurso(curso).subscribe(res => {
        console.log('guardado');
      });
    });
  }

  guardarCursoEnsambleComp() {
    this.objCargarEstudiantes.forEach(carEst => {
      if (carEst.existeEnsambleComp == true) {
        console.log(carEst);
        let indice = this.objCursos.find(obj => {
          return obj._id === carEst.cursoEnsambleComp._id;
        });
        this.objCursos[this.objCursos.indexOf(indice)].estudiantes.push(carEst.estudianteActual);
      }
    });

    this.objCursos.forEach(curso => {
      this.serCurso.editarCurso(curso).subscribe(res => {
        console.log('guardado');
      });
    });
  }

  guardarNotas() {
    this.objCargarEstudiantes.forEach(carEst => {


      // Nota Instrumento
      let indiceNotaInstrumento = this.objNotas.find(obj => {
        return obj.curso._id === carEst.cursoInstrumento._id && obj.estudiante._id === carEst.estudianteActual._id;
      });
      console.log(indiceNotaInstrumento);
      console.log(this.objNotas[this.objNotas.indexOf(indiceNotaInstrumento)]);
      this.objNotas[this.objNotas.indexOf(indiceNotaInstrumento)].nota_i = carEst.iNotaIntrumento;
      this.objNotas[this.objNotas.indexOf(indiceNotaInstrumento)].comentario = carEst.observaciones;

      //Nota Lenguaje
      if (carEst.existelenguaje) {
        let indiceNotaLenguaje = this.objNotas.find(obj => {
          return obj.curso._id === carEst.cursoLenguaje._id && obj.estudiante._id === carEst.estudianteActual._id;
        });
        this.objNotas[this.objNotas.indexOf(indiceNotaLenguaje)].nota_i = carEst.iNotaLenguaje;
      }

      //Nota Orquesta
      if (carEst.existeOrquesta) {
        let indiceNotaOrquesta = this.objNotas.find(obj => {
          return obj.curso._id === carEst.cursoOrquesta._id && obj.estudiante._id === carEst.estudianteActual._id;
        });
        this.objNotas[this.objNotas.indexOf(indiceNotaOrquesta)].nota_i = carEst.iNotaOrquesta;
      }

      //Nota Ensamble
      if (carEst.existeEnsamble) {
        let indiceNotaEnsamble = this.objNotas.find(obj => {
          return obj.curso._id === carEst.cursoEnsamble._id && obj.estudiante._id === carEst.estudianteActual._id;
        });
        this.objNotas[this.objNotas.indexOf(indiceNotaEnsamble)].nota_i = carEst.iNotaEnsamble;
      }

      //Nota Ensamble 2
      if (carEst.existeEnsambleComp) {
        let indiceNotaEnsambleComp = this.objNotas.find(obj => {
          return obj.curso._id === carEst.cursoEnsambleComp._id && obj.estudiante._id === carEst.estudianteActual._id;
        });
        this.objNotas[this.objNotas.indexOf(indiceNotaEnsambleComp)].nota_i = carEst.iNotaEnsambleComplementario;
      }
    });

    this.objNotas.forEach(nota => {
      this.serNota.editarNota(nota).subscribe(res => {
        console.log('guardado');
      })
    });
  }


  objEncargadosGuardar: Encargado[] = []
  arregloEncargados: string[] = [];
  agregarEncargados(filaCVS: string[]) {

    let nombreUno: string
    nombreUno = filaCVS[17].toUpperCase().trim();

    let existe = this.arregloEncargados.includes(nombreUno);

    if (nombreUno != "" && nombreUno != "NO INDICA" && !existe) {
      let objEncargadoUno = new Encargado();
      this.arregloEncargados.push(nombreUno);

      //Llenar encargado uno
      objEncargadoUno.nombre = filaCVS[17].toUpperCase().trim();;
      objEncargadoUno.cedula = filaCVS[18];
      objEncargadoUno.estado_civil = filaCVS[19];
      objEncargadoUno.telefono_fijo = filaCVS[20];
      objEncargadoUno.telefono_movil = filaCVS[21];
      objEncargadoUno.email = filaCVS[22];
      objEncargadoUno.oficio = filaCVS[23];
      objEncargadoUno.lugar_trabajo = filaCVS[24];
      objEncargadoUno.telefono_trabajo = filaCVS[25];
      objEncargadoUno.direccion_trabajo = filaCVS[26];

      this.objEncargadosGuardar.push(objEncargadoUno);

    }

    let nombreDos: string
    nombreDos = filaCVS[27].toUpperCase().trim();
    let existeDos = this.arregloEncargados.includes(nombreDos);

    if (nombreDos != "NO INDICA" && nombreDos != "" && !existeDos) {
      let objEncargadoDos = new Encargado();
      this.arregloEncargados.push(nombreDos);

      //llenar encargado dos
      objEncargadoDos.nombre = filaCVS[27].toUpperCase().trim();;
      objEncargadoDos.cedula = filaCVS[28];
      objEncargadoDos.estado_civil = filaCVS[29];
      objEncargadoDos.telefono_fijo = filaCVS[30];
      objEncargadoDos.telefono_movil = filaCVS[31];
      objEncargadoDos.email = filaCVS[32];
      objEncargadoDos.oficio = filaCVS[33];
      objEncargadoDos.lugar_trabajo = filaCVS[34];
      objEncargadoDos.telefono_trabajo = filaCVS[35];
      objEncargadoDos.direccion_trabajo = filaCVS[36];

      this.objEncargadosGuardar.push(objEncargadoDos);
    }
  }

  guardarEncargados() {
    this.objEncargadosGuardar.forEach(encar => {
      this.serEncargado.insertarEncargado(encar).subscribe(res => {
        let encargado = res as Encargado;
        this.objEncargadosGuardar[this.objEncargadosGuardar.indexOf(encar)]._id = encargado._id;
        console.log('guardado');
      })
    });
    console.log(this.objEncargadosGuardar);
  }








  obtenerEstudiantes() {
    this.serEstudiante.obtenerEstudiantes().subscribe(res => {
      this.objEstudiantes = res as Estudiante[];
    })
  }






  file: any;
  texto: string;
  fileChanged(e) {
    this.file = e.target.files[0];
  }

  SubmitForm() {
    this.uploadDocument();
  }

  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.texto = fileReader.result.toString();
    }
    fileReader.readAsText(this.file);
  }

  separarCVSEncargado() {
    let ArregloCVS, filaCVS: string[];
    let fila: string;
    let sad: number;
    ArregloCVS = this.texto.split(";vbf");
    for (let i = 0; i < 313; i++) {
      fila = ArregloCVS[i].toString();
      if (i == 0 || i == 312) {
        console.log(fila);
      }
      filaCVS = fila.split(';');   // cada fila del cvs
    
    this.agregarEncargados(filaCVS);
      //this.analizarFila(filaCVS, i);
    }
  }

  separarCVSEstudiante() {
    let ArregloCVS, filaCVS: string[];
    let fila: string;
    let sad: number;
    ArregloCVS = this.texto.split(";vbf");
    for (let i = 0; i < 313; i++) {
      fila = ArregloCVS[i].toString();
      if (i == 0 || i == 312) {
        console.log(fila);
      }
      filaCVS = fila.split(';');   // cada fila del cvs
      this.agregarEstudiante(filaCVS,i);
      //this.analizarFila(filaCVS, i);
    }
  }
}