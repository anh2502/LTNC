import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const LinkAdd = styled(Link)({
    textDecoration: 'none',
});

const columns = [
    { id: 'name', label: 'Tên thiết bị', minWidth: 150 },
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'status', label: 'Trạng thái', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];

const action = 'action';

function createData(name, id, status) {
    return { name, id, status, action };
}

const rows = [
    createData('Cái búa', '123', 'Đang bảo trì'),
    createData('Cái búa', '123', 'Đang bảo trì'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy hút bụi', '909', 'Hỏng'),
    createData('Cái búa', '123', 'Đang bảo trì'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy hút bụi', '909', 'Hỏng'),
    createData('Cái búa', '123', 'Đang bảo trì'),
    createData('Cái búa', '123', 'Đang bảo trì'),
    createData('Cái búa', '123', 'Đang bảo trì'),
    createData('Cái búa', '123', 'Đang bảo trì'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái búa', '123', 'Đang bảo trì'),
    createData('Cái búa', '123', 'Đang bảo trì'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
    createData('Cái máy giật điện', '456', 'Đang hoạt động'),
];

export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', height: '50%', borderRadius: '20px', overflowY: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 600, borderRadius: '20px', paddingLeft: '20px', overflowY: 'hidden' }}>
                <Table stickyHeader aria-label="sticky table" >
                    <TableHead sx={{ borderRadius: '20px', paddingLeft: '20px' }}>
                        <TableRow hover role="checkbox" tabIndex={-1} >
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
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} style={{ textAlign: 'center', minWidth: column.minWidth }}>
                                                    {
                                                        column.id == 'action' ? <Fab color="default" style={{ marginRight: '5px' }} href='https://media.vanityfair.com/photos/5f5156490ca7fe28f9ec3f55/master/pass/feels-good-man-film.jpg' target='_blank'>
                                                            <EditIcon />
                                                        </Fab> : value
                                                    }
                                                    {
                                                        column.id == 'action' ? <Fab color="default" style={{ marginLeft: '5px' }} href='https://media.vanityfair.com/photos/5f5156490ca7fe28f9ec3f55/master/pass/feels-good-man-film.jpg' target='_blank'>
                                                            <DeleteIcon />
                                                        </Fab> : <div></div>
                                                    }
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                margin={20}
                background={'#fff'}
            />
        </Paper>
    );
}


