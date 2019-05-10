import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/servicios/estudiante.service';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent implements OnInit {

  selectedFile:File = null

  constructor(private serEstudiante: EstudianteService) { }

  ngOnInit() {
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  subir(){
    this.serEstudiante.guardarImagen(this.selectedFile).subscribe(res => {
      console.log(res);
    });
  }

}
