export interface Alumnos {
    id: string,
    nombres: string,
    apellido: string,
    email: string,
    estado: boolean,
    cursos: AlumnoCurso
}
export interface AlumnoCurso{
    idCurso: string,
    nombreCurso: string,
}