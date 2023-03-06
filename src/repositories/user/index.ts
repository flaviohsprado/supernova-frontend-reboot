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
    public async login({
        email,
        username,
        password,
    }: UserSignup): Promise<ISignupResponse> {
        const { error, data } = await this.post<ISignupResponse>('/users', {
            email,
            password,
        })

        if (error) throw new Error(data.message)

        const { accessToken } = data

        return { accessToken } as ISignupResponse
    }
}
export default new UserRepository()
