

export interface Task{
    title: string,
    description: string,
    tag: string | undefined,
    done: boolean,
    id: string
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