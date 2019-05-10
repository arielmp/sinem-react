import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Profesor } from 'src/app/modelos/profesor';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { Instrumento } from 'src/app/modelos/instrumento';



@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styleUrls: ['./form-profesor.component.css']
})
export class FormProfesorComponent implements OnInit {

  objProfesor: Profesor;
  tipoForm:string;
  nombreBoton: string;
  titulo: string;  

  constructor(
    private serProfesor: ProfesorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoForm = this.route.snapshot.data.tipoForm;
    this.objProfesor = new Profesor();    
    this.prepararForm();
  }

  prepararForm() {    
    if (this.tipoForm == 'editar') {
      this.nombreBoton = 'Actualizar';
      this.titulo = 'Actualizar Profesor';
      this.obtenerProfesor();
    } else if (this.tipoForm == 'insertar') {      
      this.nombreBoton = 'Insertar';
      this.titulo = 'Insertar Profesor';
    } else {
      this.obtenerProfesor();
      this.nombreBoton = 'Regresar';
      this.titulo = 'Ver Profesor';
    }
  }

  obtenerProfesor(){
    let id = this.route.snapshot.params['id'];
    this.serProfesor.obtenerProfesor(id)
      .subscribe(res => {
        if (res['status'] == 'error') {    //si ocurre algun error en el api
          this.router.navigate(['/profesores']);
        } else {
          this.objProfesor = res as Profesor;          
        }
      });
  }

  crearProfesor() {    
    this.serProfesor.insertarProfesor(this.objProfesor)
      .subscribe(res => {
        this.router.navigate(['/profesores']);
      });
  }

  editarProfesor() {
    this.serProfesor.editarProfesor(this.objProfesor)
      .subscribe(res => {
        this.router.navigate(['/profesores']);
      });
  }

  SubmitForm() {
    if (this.tipoForm == 'editar') {
      this.editarProfesor();
    } else if (this.tipoForm == 'insertar') {
      this.crearProfesor();
    } else {
      this.router.navigate(['/profesores']);
    }
  }

  habilitarBoton(estadoForm: boolean): boolean {
    if (this.tipoForm == 'ver') {
      return false;
    } else {
      return estadoForm;
    }
  }  

  //recibe un arreglo de instrumentos
  //este metodo escucha el evento del componente seleccionar_instrumento
  obtenerInstrumentosSeleccionados($event: Instrumento[]){
    this.objProfesor.instrumentos = $event;
    //$event.forEach(ins => {
    //  this.objProfesor.instrumentos.push(ins);
    //})
  }

  //recibe un arreglo de instrumentos
  //este metodo escucha el evento del componente seleccionar_instrumento
  obtenerHorarioSeleccionado($event: string[]){
    this.objProfesor.horario = $event;    
    console.log(this.objProfesor.horario);
  }
  
}