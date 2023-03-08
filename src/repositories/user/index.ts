import { IUser } from '@/src/contexts/Auth.context'
import { HttpClient } from '@/src/services/HttpClient'

interface UserSignup {
    email: string
    username: string
    password: string
}

interface ISignupResponse {
    accessToken: string
}

class UserRepository extends HttpClient {
    public async me(): Promise<IUser> {
        const { error, data } = await this.get<IUser>('/users/me')

        if (error) throw new Error(data.message)

        return data as IUser
    }

    public async findOne(id: string): Promise<IUser> {
        const { error, data } = await this.get<IUser>(`/users/${id}`)

        if (error) throw new Error(data.message)

        return data as IUser
    }

    public async findAll(): Promise<IUser[]> {
        const { error, data } = await this.get<IUser[]>('/users')

        if (error) throw new Error(data.message)

        return data as IUser[]
    }

    public async create({
        email,
        username,
        password,
    }: UserSignup): Promise<ISignupResponse> {
        const { error, data } = await this.post<ISignupResponse>('/users', {
            email,
            username,
            password,
        })

        if (error) throw new Error(data.message)

        const { accessToken } = data

        return { accessToken }
    }
}
export default new UserRepository()
