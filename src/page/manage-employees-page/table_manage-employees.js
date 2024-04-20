import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import EditEmployeeDialog from './edit-employee';
import api from "../../api";

const LinkAdd = styled(Link)({
    textDecoration: 'none',
});

const columns = [
    { id: 'employeeName', label: 'Họ và tên', minWidth: 150 },
    { id: 'employeeId', label: 'ID', minWidth: 100 },
    { id: 'dutyType', label: 'Chức vụ', minWidth: 100 },
    { id: 'address', label: 'Tỉnh/Thành phố', minWidth: 100 },
    { id: 'phoneNumber', label: 'Số điện thoại', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];

const action = 'action';
export default function ColumnGroupingTable() {
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    const [rows, setRows]=useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleEditClick = (row) => {
        setOpenEditDialog(true);
    };

    const handleEditDialogClose = () => {
        setOpenEditDialog(false);
    };
    const fetchData = async () => {
        try {
          const response = await api.get(`/employees/`, {
            params: {
                pageNo: 0,
                pageSize: 10,
                sortBy: 'id',
                searchFlag: false
              }
          });
          console.log(response.data); // Dữ liệu nhận được từ API
          setRows(response.data.data)
          return response.data; // Trả về dữ liệu nhận được từ API nếu cần
        } catch (error) {
          console.error('Error fetching data:', error);
          // Xử lý lỗi nếu cần
        }
      };
      
      // Gọi hàm fetchData để lấy dữ liệu từ API
      useEffect(() => {
        fetchData();
    }, []);

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
                                                            column.id == 'action' ? <Fab color="default" style={{ marginRight: '5px' }} onClick={() => handleEditClick(row)}>
                                                                <EditIcon />
                                                            </Fab> : (column.id == 'name' ? <LinkAdd className='if-link' to="/manage-employees/info-employee">{value}</LinkAdd> : value)
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
            <EditEmployeeDialog open={openEditDialog} onClose={handleEditDialogClose} info={""} />
        </div >
    );
}


