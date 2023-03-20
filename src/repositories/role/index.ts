import { HttpClient } from '@/src/services/HttpClient'

interface IRoleResponse {
    id: string
    name: string
    permissions: string
}

interface IRoleRequest {
    name: string
    permissions: string
}

class RoleRepository extends HttpClient {
    public async findOne(id: string): Promise<IRoleResponse> {
        const { error, data } = await this.get<IRoleResponse>(`/roles/${id}`)

        if (error) throw new Error(data.message)

        return data as IRoleResponse
    }

    public async findAll(): Promise<IRoleResponse[]> {
        const { error, data } = await this.get<IRoleResponse[]>('/roles')

        if (error) throw new Error(data.message)

        return data as IRoleResponse[]
    }

    public async create({
        name,
        permissions,
    }: IRoleRequest): Promise<IRoleResponse> {
        const { error, data } = await this.post<IRoleResponse>('/roles', {
            name,
            permissions,
        })

        if (error) throw new Error(data.message)

        return data
    }

    public async update(
        id: string,
        role: IRoleRequest
    ): Promise<IRoleResponse> {
        const { error, data } = await this.put<IRoleResponse>(
            `/roles/${id}`,
            role
        )

        if (error) throw new Error(data.message)

        return data as IRoleResponse
    }

    public async destroy(id: string): Promise<boolean> {
        const { error, data } = await this.delete<IRoleResponse>(`/roles/${id}`)

        if (error) {
            throw new Error(data.message)
        }

        return data.success
    }
}
export default new RoleRepository()
