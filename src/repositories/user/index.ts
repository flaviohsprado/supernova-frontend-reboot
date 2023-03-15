import { HttpClient } from '@/src/services/HttpClient'

interface UserSignup {
    email: string
    username: string
    password: string
}

interface ISignupResponse {
    accessToken: string
}

interface IUserResponse {
    id: string
    username: string
    email: string
    accessToken: string
    role: string
    avatar: string
}

interface IUserRequest {
    username: string
    email: string
    password: string
}

class UserRepository extends HttpClient {
    public async me(): Promise<IUserResponse> {
        const { error, data } = await this.get<IUserResponse>('/users/me')

        if (error) throw new Error(data.message)

        return data as IUserResponse
    }

    public async findOne(id: string): Promise<IUserResponse> {
        const { error, data } = await this.get<IUserResponse>(`/users/${id}`)

        if (error) throw new Error(data.message)

        return data as IUserResponse
    }

    public async findAll(): Promise<IUserResponse[]> {
        const { error, data } = await this.get<IUserResponse[]>('/users')

        if (error) throw new Error(data.message)

        return data as IUserResponse[]
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

    public async update(
        id: string,
        user: IUserRequest
    ): Promise<IUserResponse> {
        const { error, data } = await this.put<IUserResponse>(
            `/users/${id}`,
            user
        )

        if (error) throw new Error(data.message)

        return data as IUserResponse
    }

    public async destroy(id: string): Promise<boolean> {
        const { error, data } = await this.delete<IUserResponse>(`/users/${id}`)

        if (error) {
            throw new Error(data.message)
        }

        return data.success
    }
}
export default new UserRepository()
