import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const EmployeeInfo = () => {
    const image = 'https://bizweb.dktcdn.net/100/438/408/files/meme-ech-xanh-yody-vn-5.jpg?v=1692246402739';
    return (
        <Box className="box-employee-info">
            <Grid container my={2}>
                <Grid item xs={8.26} className="grid-profile-info">
                    <Box className="box-profile">
                        <Box className="box-head-profile">
                            <Box className="square square-or"></Box>
                            <Box className="square square-yl"></Box>
                        </Box>
                        <Box className="employee-info-avatar">
                            <img src={image} alt="Con pepe" style={{ width: '100%', height: '100%' }}></img>
                        </Box>
                        <Typography className="title-info_typo" fontWeight={900} fontSize={32} lineHeight={1.5} fontFamily={"Lato"} marginTop={3}>Đào Duy Quý</Typography>
                        <Typography className="title-info_typo" color={'#A098AE'} fontWeight={600} fontSize={'18px'} fontFamily={"Lato"} marginTop={1} marginBottom={3}>Trùm trường</Typography>
                        <div className="stack">
                            <Box className="box-phongban">
                                <Typography color={'#A098AE'} fontWeight={400} fontSize={'18px'}>
                                    Phòng ban
                                </Typography>
                                <Box className='stack-info-ele' gap={1}>
                                    <Box className="icon-info-ele">
                                        <LocalHospitalIcon />
                                    </Box>
                                    <Typography color={'#303972'} >
                                        Khoa học và kĩ thuật máy tính
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="box-bangcap">
                                <Typography color={'#A098AE'} fontWeight={400} fontSize={'18px'}>
                                    Bằng cấp
                                </Typography>
                                <Box className='stack-info-ele' gap={1}>
                                    <Box className="icon-info-ele">
                                        < BusinessCenterIcon />
                                    </Box>
                                    <Typography color={'#303972'}>
                                        Loại giỏi
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="box-sdt">
                                <Typography color={'#A098AE'} fontWeight={400} fontSize={'18px'}>
                                    Số điện thoại
                                </Typography>
                                <Box className='stack-info-ele' gap={1}>
                                    <Box className="icon-info-ele">
                                        <LocalPhoneIcon />
                                    </Box>
                                    <Typography color={'#303972'}>
                                        +84373071643
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="box-email">
                                <Typography color={'#A098AE'} fontWeight={400} fontSize={'18px'}>
                                    Email
                                </Typography>
                                <Box className='stack-info-ele' gap={1}>
                                    <Box className="icon-info-ele">
                                        <MailOutlineIcon />
                                    </Box>
                                    <Typography color={'#303972'}>
                                        daoduyquylop97@gmail.com
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3.25}></Grid>
            </Grid>
        </Box >
    );
}

export default EmployeeInfo;