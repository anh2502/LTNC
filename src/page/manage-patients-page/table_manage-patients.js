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
    { id: 'name', label: 'Họ và tên', minWidth: 150 },
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'bhyt', label: 'Bảo hiểm y tế', minWidth: 100 },
    { id: 'city', label: 'Tỉnh/Thành phố', minWidth: 100 },
    { id: 'room', label: 'Phòng bệnh', minWidth: 100 },
    { id: 'phoneNumber', label: 'Số điện thoại', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];

const action = 'action';

function createData(name, id, bhyt, city, room, phoneNumber) {
    return { name, id, bhyt, city, room, phoneNumber, action };
}

const rows = [
    createData('Đào Duy Quý', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Siêu nhân đỏ', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Siêu nhân xanh', '087', '098-128-432', 'Thừa Thiên Huế', '006', '3214134321'),
    createData('Goku', '061', '123-981-371', 'Quảng Trị', '021', '0981237841'),
    createData('Naruto', '0097', '047-123-7298', 'Gia Lai', '901', '0187249871'),
    createData('Superman', '008', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Saitama', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Huấn Hoa Hồng', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Siu nhân cuồng phong', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Goku', '061', '123-981-371', 'Quảng Trị', '021', '0981237841'),
    createData('Naruto', '0097', '047-123-7298', 'Gia Lai', '901', '0187249871'),
    createData('Superman', '008', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Siêu nhân xanh', '087', '098-128-432', 'Thừa Thiên Huế', '006', '3214134321'),
    createData('Goku', '061', '123-981-371', 'Quảng Trị', '021', '0981237841'),
    createData('Huấn Hoa Hồng', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Siu nhân cuồng phong', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Đào Duy Quý', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Siêu nhân đỏ', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Siêu nhân xanh', '087', '098-128-432', 'Thừa Thiên Huế', '006', '3214134321'),
    createData('Goku', '061', '123-981-371', 'Quảng Trị', '021', '0981237841'),
    createData('Naruto', '0097', '047-123-7298', 'Gia Lai', '901', '0187249871'),
    createData('Superman', '008', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Saitama', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Naruto', '0097', '047-123-7298', 'Gia Lai', '901', '0187249871'),
    createData('Superman', '008', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Saitama', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Huấn Hoa Hồng', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Siu nhân cuồng phong', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Đào Duy Quý', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Siêu nhân đỏ', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Saitama', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Huấn Hoa Hồng', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Siu nhân cuồng phong', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Đào Duy Quý', '010', '123-123-901', 'Hồ Chí Minh', '002', '1234567890'),
    createData('Siêu nhân đỏ', '007', '123-456-923', 'Hồ Chí Minh', '001', '9817624712'),
    createData('Siêu nhân xanh', '087', '098-128-432', 'Thừa Thiên Huế', '006', '3214134321'),

];

export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>

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
                                                            </Fab> : (column.id == 'name' ? <LinkAdd className='if-link' to="/info-patient">{value}</LinkAdd> : value)
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
                    margin={20}
                    background={'#fff'}
                />
            </Paper>
        </div >
    );
}


