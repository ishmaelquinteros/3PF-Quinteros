import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from 'src/app/Core/Models/i-alumnos';


@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrls: ['./alumno-edit.component.css']
})
export class AlumnoEditComponent implements OnInit {

  idAlumno: string = "";
  mensaje: string = "";
    
    idControl = new FormControl()
    nombreControl = new FormControl()
    apellidoControl = new FormControl()
    mailControl = new FormControl();
    estadoControl = new FormControl()

    FormModificarAlumno = new FormGroup({
      id: this.idControl,
      nombres: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.mailControl,
      estado: this.estadoControl,
    })
    
  constructor(
    public dialogRef: MatDialogRef<AlumnoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos) { 
      this.FormModificarAlumno.patchValue(data)
      this.idAlumno = data.id
    }

    Cerrar() {
      if (this.FormModificarAlumno.valid){
      this.dialogRef.close(this.FormModificarAlumno.value);
    } else {this.mensaje = "existen campos inválidos"}
}
  ngOnInit(): void {
  }

}
