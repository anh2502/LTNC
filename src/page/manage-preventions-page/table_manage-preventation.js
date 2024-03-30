import * as React from 'react';
import PropTypes from 'prop-types';
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

var Patient = {
    a: "",
    b: ""
}

function createData(room, faculty, doctor, available, action, name) {
    return {
        room,
        faculty,
        doctor,
        available,
        action,
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
                <TableCell component="th" scope="row">
                    {row.room}
                </TableCell>
                <TableCell align="center">{row.faculty}</TableCell>
                <TableCell align="center">{row.doctor}</TableCell>
                <TableCell align="center">{row.available}</TableCell>
                <TableCell align="right">{row.action}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 0.5 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Tên bệnh nhân
                            </Typography>
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

Row.propTypes = {
    row: PropTypes.shape({
        faculty: PropTypes.string.isRequired,
        available: PropTypes.number.isRequired,
        doctor: PropTypes.string.isRequired,
        room: PropTypes.string.isRequired,
        patient: PropTypes.string.isRequired,
    }).isRequired,
};

const rows = [
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5, '...', 'Nguyễn Thị B'),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5, '...', 'Nguyễn Thị B'),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5, '...', 'Nguyễn Thị B'),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5, '...', 'Nguyễn Thị B'),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5, '...', 'Nguyễn Thị B'),
    createData('1', 'Khoa tim mạch', 'Nguyễn Văn A', 5, '...', 'Nguyễn Thị B'),
];

export default function CollapsibleTable() {
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
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Phòng </TableCell>
                            <TableCell align="center">Khoa</TableCell>
                            <TableCell align="center">Bác sĩ quản lý</TableCell>
                            <TableCell align="center">Giường bệnh khả dụng</TableCell>
                            <TableCell align="right">Action</TableCell>
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
        </div>
    );
}