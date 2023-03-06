import { createContext } from 'react'

export interface IUser {
    id: string
    username: string
    role: string
    avatar: string
}

export type AuthContextType = {
    isAuthenticated: boolean
    user: IUser | null
    signIn: (credentials: { email: string; password: string }) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)
