import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export type DatatableProps<Data extends object> = {
    data: Data[]
    columns: ColumnData<Data, any>[]
}

interface ColumnData {
    dataKey: keyof Data
    label: string
    numeric?: boolean
    width: number
}

export interface IDataTableProps {
    data: Array<unknown>
    columns?: ColumnData[]
}

export default function Datatable({ data, columns }: IDataTableProps) {
    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {data.map((column, index) => (
                                <TableCell
                                    key={index}
                                    align={'right'}
                                ></TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={index}
                                >
                                    <TableCell key={index + 1} align={'right'}>
                                        {row.username}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
