import { cloneElement, ReactNode } from 'react'

interface IDeleteDatatableButtonProps {
    id: string
    children: ReactNode
}

export default function UpdateDatatableButton({
    id,
    children,
}: IDeleteDatatableButtonProps) {
    return <>{children && cloneElement(children as any, { id })}</>
}
