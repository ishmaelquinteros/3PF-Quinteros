export interface User {
    id: string,
    first_name: string,
    last_name: string,
    rol: string,
}

export interface LoginOk {
    token: string
}