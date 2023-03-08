import { DataGrid } from '@mui/x-data-grid'

interface IDataTableProps {
    data: any[]
}

export default function DataTable({ data }: IDataTableProps) {
    const columns = getColumns(data)
    const rows = getRows(data)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                sx={{
                    '& .MuiDataGrid-columnHeaderTitle': {
                        color: 'white',
                    },
                    '& .MuiDataGrid-cellContent': {
                        color: 'white',
                    },
                    '& .MuiDataGrid-iconButtonContainer': {
                        color: 'white',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: 'primary.dark',
                    },
                    '& .MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall':
                        {
                            backgroundColor: 'primary.dark',
                            color: 'white',
                        },
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                }}
            />
        </div>
    )
}

function getColumns(data: any) {
    const columns: any = []

    if (data.length > 0) {
        const firstRow = data[0]
        const keys = Object.keys(firstRow)

        keys.forEach((key) => {
            const column = {
                field: key,
                headerName: key,
                width: 150,
            }

            columns.push(column)
        })
    }

    return columns
}

function getRows(data: any) {
    const rows: any = []

    data.forEach((row: any) => {
        const newRow: any = {}

        Object.keys(row).forEach((key) => {
            newRow[key] = row[key]
        })

        rows.push(newRow)
    })

    return rows
}
