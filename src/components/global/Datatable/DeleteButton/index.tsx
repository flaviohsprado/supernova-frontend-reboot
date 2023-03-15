import useDialogContext from '@/src/hooks/useDialog'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

interface IDeleteDatatableButtonProps {
    id: string
    handleDelete: (id: string) => void
}

export default function DeleteDatatableButton({
    id,
    handleDelete,
}: IDeleteDatatableButtonProps) {
    const { dialog } = useDialogContext()

    function handleDestroy() {
        //TODO: transform this into a provider
        const response = dialog({
            title: 'Delete',
            message: 'Are you sure you want to delete this item?',
        })

        console.log('response', response)

        //if (response) handleDelete(id)
    }

    return (
        <IconButton
            aria-label="delete"
            sx={{
                '&:hover': {
                    backgroundColor: 'primary.main',
                    transition: 'background-color 0.2s',
                },
            }}
            onClick={handleDestroy}
        >
            <DeleteIcon />
        </IconButton>
    )
}
