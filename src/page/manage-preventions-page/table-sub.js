import { Fab, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import React from "react";

function createData(name, id, bedNumber) {
    return {
        name,
        id,
        bedNumber,
    }
}

const columns = [
    { id: 'name', label: "Họ và tên", minWidth: '20%' },
    { id: 'id', label: "Mã số bệnh nhân", minWidth: '20%' },
    { id: 'bedNumber', label: "Giường bệnh", minWidth: '20%' },
    { id: 'delete', label: "Xóa", minWidth: '20%' },
]

const rows = [
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
    createData('Ú òa =))', '123', 'Số 2'),
]

const PatientTable = () => {
    return (
        <Table >
            <TableHead>
                <TableRow>
                    <TableCell style={{ top: 0, minWidth: '20%', fontSize: '17px', fontWeight: '700', textAlign: 'center' }}>
                        <Typography variant='h5' style={{ fontWeight: '700' }} gutterBottom component="div">
                            Bệnh nhân
                        </Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ top: 0, minWidth: column.minWidth, fontSize: '17px', fontWeight: '700', textAlign: 'center' }}
                        >
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody >
                {rows
                    .map((row) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align} style={{ textAlign: 'center', minWidth: column.minWidth }}>
                                            {
                                                column.id == 'delete' ? <Fab color="default" style={{ marginLeft: '5px' }} href='https://media.vanityfair.com/photos/5f5156490ca7fe28f9ec3f55/master/pass/feels-good-man-film.jpg' target='_blank'>
                                                    <DeleteIcon />
                                                </Fab> : value
                                            }
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
            </TableBody>
        </Table>
    );
}

export default PatientTable;