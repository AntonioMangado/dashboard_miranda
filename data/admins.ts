export interface Admin {
    id: number;
    username: string;
    email: string;
    password: string;
}

export const admins: Admin[] = [
    {
        id: 1,
        username: 'admin',
        email: "admin@gmail.com",
        password: 'admin',
    },
    {
        id: 2,
        username: 'antonio',
        email: "antonio@gmail.com",
        password: 'antonio',
    }
]
    