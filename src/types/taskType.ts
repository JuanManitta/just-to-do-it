

export interface Task{
    id: string,
    title: string,
    description: string,
    date: string,
    tag: string,
    done: boolean,
}

export interface User{
    uid: string,
    name: string | undefined,
    email: string,
    password: string,
}

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    user: User | {};
    errorMessage: string | undefined;
}