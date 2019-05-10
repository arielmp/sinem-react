import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/modelos/nota';
import { Curso } from 'src/app/modelos/curso';
import { NotaService } from 'src/app/servicios/nota.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-form-calificar-curso',
  templateUrl: './form-calificar-curso.component.html',
  styleUrls: ['./form-calificar-curso.component.css']
})
export class FormCalificarCursoComponent implements OnInit {

  objNotas: Nota[];
  objNotaActual: Nota;
  tipoForm: string;
  objCurso: Curso;
  cursoId: string;
  indiceActual: number = 0;
  objUsuarioIdentificado: Usuario;

  constructor(
    private serNota: NotaService,
    private serCurso: CursoService,
    public serTabla: FuncionesTablaService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.tipoForm = this.route.snapshot.data.tipoForm;
    this.cursoId = this.route.snapshot.params['id'];

    this.auth.usuarioActual.subscribe(usuario => {
      this.objUsuarioIdentificado = usuario;
      this.obtenerCurso();
      this.obtenerNotas();
    });
    
    this.objCurso = new Curso();
    this.objNotaActual = new Nota();
    this.objNotas = [];   
    

    this.serTabla.ordenar();
  }

  // trae el curso y el profesor del curso
  obtenerCurso(){
    this.serCurso.obtenerCurso(this.cursoId)
    .subscribe(res => {
      this.objCurso = res as Curso   
      if(this.objUsuarioIdentificado.tipo == 'profesor' && this.objCurso.profesor._id != this.objUsuarioIdentificado.profesor._id ){
        this.router.navigate(['/not-found']);
      }
    })
  }

  // trae la calificacion de las notas y el estudiante
  obtenerNotas(){
    this.serNota.obtenerNotasCurso(this.cursoId)
    .subscribe(res => {      
      this.objNotas = res as Nota[];    
      this.objNotaActual = this.objNotas[this.indiceActual];      
      
    })
  }

  guardarNota(){
    this.serNota.editarNota(this.objNotaActual)
    .subscribe(res => {      
      this.mostrarMensaje('Nota Guardada');     
      this.siguienteNota();
    })
  }

  siguienteNota(){  
    if(this.objNotas.length > (this.indiceActual + 1)){
      this.indiceActual++;
    }else{
      this.indiceActual = 0;
    }    
    this.objNotaActual = this.objNotas[this.indiceActual];
  }

  anteriorNota(){
    if(this.indiceActual == 0){
      this.indiceActual = this.objNotas.length - 1;
    }else{
      this.indiceActual--;
    }
    this.objNotaActual = this.objNotas[this.indiceActual];
  }

  seleccionarNota(nota: Nota){
    this.indiceActual= this.objNotas.indexOf(nota);
    this.objNotaActual = this.objNotas[this.indiceActual];    
    document.getElementById("calificacion").scrollIntoView();    
  }

  mostrarMensaje(msj: string){
    var contendorMensaje = document.getElementById('MensajeGuardado');
    contendorMensaje.innerHTML = msj;
    contendorMensaje.style.display = 'block';
    setTimeout(function(){contendorMensaje.style.display = 'none'}, 2000);
  }


}
