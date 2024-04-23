import * as React from 'react';
import { useState, useEffect } from 'react';
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
import EditMedicineDialog from './edit-medicine';
import DeleteConfirmationDialog from '../../component/DeleteDialog';
import api from "../../api";

const LinkAdd = styled(Link)({
    textDecoration: 'none',
});

const columns = [
    { id: 'name', label: 'Tên thuốc', minWidth: 150 },
    { id: 'id', label: 'Mã lô hàng', minWidth: 100 },
    { id: 'medicineType', label: 'Loại thuốc', minWidth: 100 },
    { id: 'medicalUseType', label: 'Tác dụng', minWidth: 100 },
    { id: 'price', label: 'Giá', minWidth: 100 },
    { id: 'ingredient', label: 'Thành phần', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];

const action = 'action';
export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedRow, setSelectedRow] = useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [rows, setRows]=useState([])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleEditClick = (row) => {
        setSelectedRow(row);
        setOpenEditDialog(true);
    };

    const handleEditDialogClose = () => {
        fetchData()
        setOpenEditDialog(false);
    };
    const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setOpenDeleteDialog(true);
    };

    const handleDeleteDialogClose = () => {
        fetchData()
        setOpenDeleteDialog(false);
    };
    const fetchData = async () => {
        try {
            const response = await api.get(`/medicines/`, {
                params: {
                    pageNo: 0,
                    pageSize: 30,
                    sortBy: 'name',
                    searchFlag: false,
                }
            });
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
    },[]);

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
                                        <TableRow role="checkbox" tabIndex={-1} key={row.code} >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} style={{ textAlign: 'center', minWidth: column.minWidth }}>
                                                        {
                                                            column.id == 'action' ? <Fab color="default" style={{ marginRight: '5px' }} onClick={() => handleEditClick(row)}>
                                                                <EditIcon />
                                                            </Fab> : (column.id == 'name' ? <LinkAdd className='if-link' to="/manage-medicines/info-medicine">{value}</LinkAdd> : value)

                                                        }
                                                        {
                                                            column.id == 'action' ? <Fab color="default" style={{ marginLeft: '5px' }} onClick={()=>handleDeleteClick(row)}>
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
            <EditMedicineDialog open={openEditDialog} onClose={handleEditDialogClose} info={selectedRow} />
            <DeleteConfirmationDialog open={openDeleteDialog} onClose={handleDeleteDialogClose}  apiURL ={`medicines/delete/${selectedRow.id}`}/>
        </div >
    );
}


