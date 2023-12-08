export type User = {
    id?: string | undefined,
    name: string,
    username: string,
    roles: string[],
    tel: string,   
    password: string
} | null
