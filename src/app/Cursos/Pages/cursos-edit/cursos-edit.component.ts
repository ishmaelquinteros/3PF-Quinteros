import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/Core/Models/i-cursos';

@Component({
  selector: 'app-cursos-edit',
  templateUrl: './cursos-edit.component.html',
  styleUrls: ['./cursos-edit.component.css']
})
export class CursosEditComponent implements OnInit {

  mensaje: string = "";
    
    idControl = new FormControl()
    nombreControl = new FormControl()
    descripcionControl = new FormControl()
    horasControl = new FormControl();
    fechaControl = new FormControl()

    FormCurso = new FormGroup({
      id: this.idControl,
      nombre: this.nombreControl,
      descripcion: this.descripcionControl,
      horasTotal: this.horasControl,
      fechaInicio: this.fechaControl,
    })
    
  constructor(
    public dialogRef: MatDialogRef<CursosEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cursos) { 
      this.FormCurso.patchValue(data)
    }

    Cerrar() {
      if (this.FormCurso.valid){
      this.dialogRef.close(this.FormCurso.value);
    } else {this.mensaje = "existen campos inválidos"}
}
  
ngOnInit(): void { }


}
