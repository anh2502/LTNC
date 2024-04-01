import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PatientTable from './table-sub';

function createData(room, faculty, doctor, available) {
    return {
        room,
        faculty,
        doctor,
        available,
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align='center'>
                    {row.room}
                </TableCell>
                <TableCell align="center">{row.faculty}</TableCell>
                <TableCell align="center">{row.doctor}</TableCell>
                <TableCell align="center">{row.available}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Typography variant='h5' style={{ fontWeight: '900' }} sx={{ paddingTop: '20px', paddingLeft: '100px' }} gutterBottom component="div">
                                Bệnh nhân
                            </Typography>

                            <PatientTable ></PatientTable>

                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    {<TableCell TableCell align="left">{row.patient}</TableCell>}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

// Row.propTypes = {
//     row: PropTypes.shape({
//         faculty: PropTypes.string.isRequired,
//         available: PropTypes.number.isRequired,
//         doctor: PropTypes.string.isRequired,
//         room: PropTypes.string.isRequired,
//         patient: PropTypes.string.isRequired,
//     }).isRequired,
// };

const columns = [
    { id: 'room', label: 'Phòng', minWidth: '20%' },
    { id: 'department', label: 'Khoa', minWidth: '20%' },
    { id: 'managementDoctor', label: 'Bác sĩ quản lý', minWidth: '20%' },
    { id: 'roomNumber', label: 'Giường bệnh khả dụng', minWidth: '20%' },
]

const rows = [
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5),
];

export default function CollapsibleTable() {
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
                <TableContainer >
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
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
                            {rows.map((row) => (
                                <Row key={row.room} row={row} />
                            ))}
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

        </div>
    );
}