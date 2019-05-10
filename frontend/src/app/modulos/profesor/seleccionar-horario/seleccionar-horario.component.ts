import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Profesor } from 'src/app/modelos/profesor';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seleccionar-horario',
  templateUrl: './seleccionar-horario.component.html',
  styleUrls: ['./seleccionar-horario.component.css']
})
export class SeleccionarHorarioComponent implements OnInit {

  objProfesor: Profesor;
  horario: string[] = [];
  idProfesor: string;

  @Output() CambiarHorarioEvent = new EventEmitter<string[]>();

  constructor(
    private serProfesor: ProfesorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.objProfesor = new Profesor();
    this.idProfesor = this.route.snapshot.params['id'];    
    if (this.idProfesor) {
      this.obtenerProfesor();
    }
  }

  obtenerProfesor() {
    this.serProfesor.obtenerProfesor(this.idProfesor).subscribe(res => {
      this.objProfesor = res as Profesor;
      //pintar el horario
      if (this.objProfesor.horario) {
        this.objProfesor.horario.forEach(horario => {
          this.horario = this.objProfesor.horario;
          document.getElementById(horario).className = "seleccionado";
          
        });
      }
    });
  }


  seleccionarCelda(e) {
    let celda: HTMLElement = e.path[0];
    let celda_id: string = e.path[0].id;

    if (celda_id != '') {
      if (this.horario.includes(celda_id)) {
        celda.className = '';
        this.horario.splice(this.horario.indexOf(celda_id), 1);
      } else {
        celda.className = 'seleccionado';
        this.horario.push(celda_id)
      }
    }
    this.CambiarHorarioEvent.emit(this.horario);
    
  }



}
