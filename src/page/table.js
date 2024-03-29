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
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const columns = [
    { id: 'name', label: 'Họ và tên', minWidth: 170 },
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'bhyt', label: 'Bảo hiểm y tế', minWidth: 100 },
    { id: 'city', label: 'Tỉnh/Thành phố', minWidth: 100 },
    { id: 'room', label: 'Phòng bệnh', minWidth: 100 },
    { id: 'phoneNumber', label: 'Số điện thoại', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 50 },
];


function createData(name, id, bhyt, city, room, phoneNumber) {
    return { name, id, bhyt, city, room, phoneNumber };
}

const rows = [
    createData('Đào Duy Quý', '007', '123-123-456', 'Thừa Thiên Huế', '001', '0373071643'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Nguyễn Văn A', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
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
        <div style={{}}>

            <Paper sx={{ width: '100%', height: '50%', borderRadius: '20px' }}>
                <TableContainer sx={{ maxHeight: 700, borderRadius: '20px', paddingLeft: '20px' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
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


                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} style={{ textAlign: 'center' }}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}

                                                    </TableCell>
                                                );
                                            })}

                                            <Fab color="secondary" aria-label="edit">
                                                <EditIcon />
                                            </Fab>
                                            <Fab color="secondary" aria-label="edit">
                                                <DeleteIcon />
                                            </Fab>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
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
        </div >
    );
}


