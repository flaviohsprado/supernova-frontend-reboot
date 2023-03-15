import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { ReactNode } from 'react'
import DeleteDatatableButton from './DeleteButton'
import UpdateDatatableButton from './UpdateButton'

interface IDataTableProps {
    data: any[]
    handleDelete: (id: string) => void
    updateButton?: boolean
    deleteButton?: boolean
    hiddenColumns?: object
    childrenUpdate?: ReactNode
}

export default function DataTable({
    data,
    updateButton,
    deleteButton,
    hiddenColumns,
    childrenUpdate,
    handleDelete,
}: IDataTableProps) {
    const columns = getColumns(
        data,
        handleDelete,
        updateButton,
        deleteButton,
        childrenUpdate
    )
    const rows = getRows(data)

    return (
        <div style={{ height: '95vh', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                hideFooterPagination={true}
                hideFooter={true}
                columnHeaderHeight={40}
                columnVisibilityModel={{
                    ...hiddenColumns,
                }}
                sx={{
                    border: 'none',
                    '& .MuiDataGrid-columnHeaderTitle': {
                        color: 'white',
                    },
                    '& .MuiDataGrid-cellContent': {
                        color: 'white',
                    },
                    '& .MuiDataGrid-iconButtonContainer': {
                        color: 'white',
                    },
                    '& .MuiDataGrid-columnHeaders.MuiDataGrid-withBorderColor.css-1iyq7zh-MuiDataGrid-columnHeaders':
                        {
                            backgroundColor: 'primary.main',
                        },
                    '& .MuiDataGrid-pinnedColumnHeaders.MuiDataGrid-pinnedColumnHeaders--right.MuiDataGrid-withBorderColor.css-hx42b-MuiDataGrid-pinnedColumnHeaders':
                        {
                            backgroundColor: 'primary.main',
                        },
                    '& .MuiSvgIcon-root ': {
                        color: 'white',
                    },
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: 'secondary.light',
                        transition: 'background-color 0.2s',
                    },
                    '& .MuiDataGrid-withBorderColor': {
                        borderColor: '#3b3b3b',
                    },
                }}
            />
        </div>
    )
}

function getColumns(
    data: any,
    handleDelete: (id: string) => void,
    updateButton?: boolean,
    deleteButton?: boolean,
    childrenUpdate?: ReactNode
) {
    const columns: any = []

    if (data?.length > 0) {
        const firstRow = data[0]
        const keys = Object.keys(firstRow)

        keys.forEach((key) => {
            columns.push(getColumnDefinition(key))
        })

        if (updateButton || deleteButton) {
            columns.push(
                addActionButtons(
                    handleDelete,
                    updateButton,
                    deleteButton,
                    childrenUpdate
                )
            )
        }
    }

    return columns
}

function getRows(data: any) {
    const rows: any = []

    data?.forEach((row: any) => {
        const newRow: any = {}

        Object.keys(row).forEach((key) => {
            newRow[key] = row[key]
        })

        rows.push(newRow)
    })

    return rows
}

function getColumnWidthByKey(key: string): number {
    if (key === 'id') {
        return key.length * 150
    } else if (key === 'username') {
        return key.length * 25
    } else if (key === 'createdAt' || key === 'updatedAt') {
        return key.length * 25
    } else {
        return key.length * 50
    }
}

function getColumnDefinition(key: any): any {
    const keyType = typeof key

    if (keyType === 'number') {
        return {
            field: key,
            headerName: key,
            width: getColumnWidthByKey(key),
            type: 'number',
            align: 'right',
        }
    } else if (keyType === 'boolean') {
        return {
            field: key,
            headerName: key,
            width: getColumnWidthByKey(key),
            type: 'boolean',
        }
    } else if (keyType === 'string') {
        if (key === 'id') {
            return {
                field: key,
                headerName: key,
                width: getColumnWidthByKey(key),
                hide: true,
            }
        } else if (key === 'createdAt' || key === 'updatedAt') {
            return {
                field: key,
                headerName: key,
                width: getColumnWidthByKey(key),
                type: 'Date',
                align: 'center',
                headerAlign: 'center',
            }
        } else {
            return {
                field: key,
                headerName: key,
                width: getColumnWidthByKey(key),
            }
        }
    }
}

function addActionButtons(
    handleDelete: (id: string) => void,
    updateButton?: boolean,
    deleteButton?: boolean,
    childrenUpdate?: ReactNode
) {
    return {
        field: 'actions',
        type: 'actions',
        width: 100,
        getActions: (params: GridRenderCellParams<String>) => [
            updateButton && (
                <UpdateDatatableButton
                    key={`update-data-${params.id}`}
                    id={String(params.id)}
                >
                    {childrenUpdate}
                </UpdateDatatableButton>
            ),
            deleteButton && (
                <DeleteDatatableButton
                    key={`delete-data-${params.id}`}
                    id={String(params.id)}
                    handleDelete={handleDelete}
                />
            ),
        ],
    }
}
