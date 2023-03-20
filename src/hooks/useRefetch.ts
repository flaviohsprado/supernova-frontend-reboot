import { useQueryClient } from 'react-query'

export const useRefetch = () => {
    const queryClient = useQueryClient()

    const refetch = (entity: string) => {
        queryClient.invalidateQueries(entity)
    }

    return { refetch }
}
