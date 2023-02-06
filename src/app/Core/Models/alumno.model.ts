import { Alumnos } from "./i-alumnos";

export class classAlumno {
  
    constructor(
      public id: string,
      public nombres: string,
      public apellido: string,
      public estado: boolean,
      public email: string,
      public cursos: {}
    ) {}
  
    get fullName() {
      return this.nombres + ' ' + this.apellido
    }
    
}