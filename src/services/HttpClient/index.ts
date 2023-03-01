import axios, { AxiosResponse } from 'axios'

export class HttpClient {
    //private apiService: AxiosInstance
    private baseUrl?: string = 'http://localhost:3009/'

    static async get<T>(endpoint: string): Promise<AxiosResponse<T>> {
        const apiService = axios.create({
            baseURL: 'http://localhost:3009',
        })

        return await apiService.get<T>(endpoint)
    }

    static async post<T>(
        endpoint: string,
        data: any
    ): Promise<AxiosResponse<T>> {
        const apiService = axios.create({
            baseURL: 'http://localhost:3009',
        })

        return await apiService.post<T>(endpoint, data)
    }

    static async put<T>(
        endpoint: string,
        data: any
    ): Promise<AxiosResponse<T>> {
        const apiService = axios.create({
            baseURL: 'http://localhost:3009',
        })

        return await apiService.put<T>(endpoint, data)
    }

    static async delete<T>(endpoint: string): Promise<AxiosResponse<T>> {
        const apiService = axios.create({
            baseURL: 'http://localhost:3009',
        })

        return await apiService.delete<T>(endpoint)
    }
}
