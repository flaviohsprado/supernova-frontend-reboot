import { HttpClient } from '@/src/services/HttpClient'

interface AuthCredentials {
    email: string
    password: string
}

interface ILoginResponse {
    accessToken: string
}

class AuthRepository extends HttpClient {
    public async login({
        email,
        password,
    }: AuthCredentials): Promise<ILoginResponse> {
        const { error, data } = await this.post<ILoginResponse>(
            '/public/auth/login',
            {
                email,
                password,
            }
        )

        if (error) throw new Error(data.message)

        const { accessToken } = data

        return { accessToken } as ILoginResponse
    }

    public async refresh(): Promise<ILoginResponse> {
        const { error, data } = await this.get<ILoginResponse>(
            '/public/auth/refresh'
        )

        if (error) throw new Error(data.message)

        const { accessToken } = data

        return { accessToken } as ILoginResponse
    }
}
export default new AuthRepository()
