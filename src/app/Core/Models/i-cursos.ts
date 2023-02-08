export interface Cursos {
    id: string,
    nombre: string,
    descripcion: string,
    fechaInicio: Date,
    horasTotal: number,
    alumnos: CursoAlumno
}
export interface CursoAlumno{
    idAlumno: string,
    nombreAlumno: string,
}