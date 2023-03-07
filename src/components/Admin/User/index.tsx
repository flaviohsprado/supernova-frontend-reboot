import { IUser } from '@/src/contexts/Auth.context'
import Datatable from '../../global/Datatable'

export default function AdminDashboardUser() {
    const userMock: IUser[] = [
        {
            id: '1',
            username: 'John Doe',
            role: '',
            avatar: '',
        },
        {
            id: '1',
            username: 'John Doe',
            role: '',
            avatar: '',
        },
        {
            id: '1',
            username: 'John Doe',
            role: '',
            avatar: '',
        },
        {
            id: '1',
            username: 'John Doe',
            role: '',
            avatar: '',
        },
        {
            id: '1',
            username: 'John Doe',
            role: '',
            avatar: '',
        },
        {
            id: '1',
            username: 'John Doe',
            role: '',
            avatar: '',
        },
    ]
    return (
        <>
            <Datatable data={userMock} />
        </>
    )
}
