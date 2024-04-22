import * as React from 'react';
import { useState } from 'react';
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

const LinkAdd = styled(Link)({
    textDecoration: 'none',
});

const columns = [
    { id: 'name', label: 'Tên thuốc', minWidth: 150 },
    { id: 'id', label: 'Mã lô hàng', minWidth: 100 },
    { id: 'bhyt', label: 'Ngày nhập kho', minWidth: 100 },
    { id: 'city', label: 'Hạn sử dụng', minWidth: 100 },
    { id: 'room', label: 'Số lượng', minWidth: 100 },
    { id: 'phoneNumber', label: 'Đơn vị nhập', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];

const action = 'action';

function createData(name, id, bhyt, city, room, phoneNumber) {
    return { name, id, bhyt, city, room, phoneNumber, action };
}

const rows = [
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
    createData('Paracetamol', '321323', '24-12-2023', '24-12-2026', '3000', '0123456789'),
];

export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedRow, setSelectedRow] = useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

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
        setOpenEditDialog(false);
    };
    const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setOpenDeleteDialog(true);
    };

    const handleDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
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
            <DeleteConfirmationDialog open={openDeleteDialog} onClose={handleDeleteDialogClose}  api={"api for delete"}/>
        </div >
    );
}


