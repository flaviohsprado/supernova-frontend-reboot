import TokenHandler from '@/src/utils/TokenHandler.utils'
import axios, { AxiosError } from 'axios'

interface IResponseParams {
    error: boolean
    data?: any
    message: string
    status: number
    headers?: any
}

export class HttpClient {
    private readonly apiService = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            authorization: `Bearer ${TokenHandler.get()}`,
        },
    })

    protected async get<T>(endpoint: string): Promise<IResponseParams> {
        try {
            const client = axios.create({
                baseURL: process.env.NEXT_PUBLIC_API_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    authorization: `Bearer ${TokenHandler.get()}`,
                },
            })
            const { data, status, statusText } = await client.get<T>(endpoint)

            return {
                error: false,
                data,
                message: statusText,
                status,
            }
        } catch (error) {
            const axiosError = error as AxiosError

            return {
                error: true,
                data: axiosError.toJSON(),
                message: axiosError.message,
                status: Number(axiosError.status),
            }
        }
    }

    protected async post<T>(
        endpoint: string,
        body: any
    ): Promise<IResponseParams> {
        try {
            const { data, status, statusText } = await this.apiService.post<T>(
                endpoint,
                body
            )

            return {
                error: false,
                data,
                message: statusText,
                status,
            }
        } catch (error) {
            const axiosError = error as AxiosError

            return {
                error: true,
                data: axiosError.toJSON(),
                message: axiosError.message,
                status: Number(axiosError.status),
            }
        }
    }

    protected async put<T>(
        endpoint: string,
        body: any
    ): Promise<IResponseParams> {
        try {
            const { data, status, statusText } = await this.apiService.put<T>(
                endpoint,
                body
            )

            return {
                error: false,
                data,
                message: statusText,
                status,
            }
        } catch (error) {
            const axiosError = error as AxiosError

            return {
                error: true,
                data: axiosError.toJSON(),
                message: axiosError.message,
                status: Number(axiosError.status),
            }
        }
    }

    protected async delete<T>(endpoint: string): Promise<IResponseParams> {
        try {
            const { data, status, statusText } =
                await this.apiService.delete<T>(endpoint)

            return {
                error: false,
                data,
                message: statusText,
                status,
            }
        } catch (error) {
            const axiosError = error as AxiosError

            return {
                error: true,
                data: axiosError.toJSON(),
                message: axiosError.message,
                status: Number(axiosError.status),
            }
        }
    }
}
