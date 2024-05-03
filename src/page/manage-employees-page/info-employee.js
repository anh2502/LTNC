import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useParams } from 'react-router-dom';
import api from "../../api"

const ViewMore = styled('div')(
    ({ active }) => ({
        display: active ? 'none' : 'flex',
    })
)

const EmployeeInfo = (image, name, position, department, degree, phoneNumber, email, calendar) => {
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const [data, setData] = useState([])

    image = 'https://bizweb.dktcdn.net/100/438/408/files/meme-ech-xanh-yody-vn-5.jpg?v=1692246402739';
    name = "Đào Duy Quý";
    position = "Trùm trường";
    department = "khoa học và kĩ thuật máy tính";
    degree = "Loại giỏi";
    phoneNumber = "0373071643";
    email = "daoduyquylop97@gmail.com";
    const today = new Date();
    const date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ', ' + today.getDate() + ' tháng ' + today.getMonth() + ' năm ' + today.getFullYear();
    calendar = {
        lastUpdate: date,
        dutySchedule: [
            {
                day: 'Thứ Hai',
                note: 'Phòng xyz',
                date: '20 tháng 3 năm 2021',
                time: '09:00 AM - 10:00 AM'
            },
            {
                day: 'Thứ Ba',
                note: 'Phòng xyz',
                date: '20 tháng 3 năm 2021',
                time: '09:00 AM - 10:00 AM'
            },
            {
                day: 'Thứ Tư',
                note: 'Phòng xyz',
                date: '20 tháng 3 năm 2021',
                time: '09:00 AM - 10:00 AM'
            },
            {
                day: 'Thứ Năm',
                note: 'Phòng xyz',
                date: '20 tháng 3 năm 2021',
                time: '09:00 AM - 10:00 AM'
            }
        ],
    }
    const fetchData = async () => {
        try {
            const response = await api.get(`/employees/${id}`);
            setData(response.data.data);
            console.log(data);
            return response.data; // Trả về dữ liệu nhận được từ API nếu cần
        } catch (error) {
            console.error('Error fetching data:', error);
            // Xử lý lỗi nếu cần
        }
    };
    useEffect(() => {
        // Gọi API với `id` được lấy từ URL
        fetchData();
    }, []);
    return (
        <Box className="box-employee-info">
            <Grid container my={2} justifyContent={"space-between"}>
                <Grid item xs={8.26} className="grid-profile-info">
                    <Box className="box-profile" paddingBottom={3}>
                        <Box className="box-head-profile">
                            <Box className="square square-or"></Box>
                            <Box className="square square-yl"></Box>
                        </Box>
                        <Box className="employee-info-avatar">
                            <img src={image} alt="Con pepe" style={{ width: '100%', height: '100%' }}></img>
                        </Box>
                        <Typography className="title-info_typo" fontWeight={900} fontSize={32} lineHeight={1.5} fontFamily={"Lato"} marginTop={3} textTransform={"capitalize"}>{data.employeeName}</Typography>
                        <Typography className="title-info_typo" color={'#A098AE'} fontWeight={600} fontSize={'18px'} fontFamily={"Lato"} marginTop={1} marginBottom={3} textTransform={"capitalize"}>{data.dutyType}</Typography>
                        <div className="stack">
                            <Box className="box-phongban">
                                <Typography color={'#A098AE'} fontWeight={400} fontSize={'18px'}>
                                    Phòng ban
                                </Typography>
                                <Box className='stack-info-ele' gap={1}>
                                    <Box className="icon-info-ele">
                                        <LocalHospitalIcon />
                                    </Box>
                                    <Typography color={'#303972'} textTransform={"capitalize"}>
                                        {data.department}
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
                                    <Typography color={'#303972'} textTransform={"capitalize"}>
                                        {data.degreeType}
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
                                        {data.phoneNumber}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="box-email">
                                <Typography color={'#A098AE'} fontWeight={400} fontSize={'18px'}>
                                    Địa chỉ
                                </Typography>
                                <Box className='stack-info-ele' gap={1}>
                                    <Box className="icon-info-ele">
                                        <MailOutlineIcon />
                                    </Box>
                                    <Typography color={'#303972'}>
                                        {data.address}
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3.4}>
                    <div className="info-employees-calendar">
                        <div className="noti">
                            <h2 className="title-noti">Lịch trực</h2>
                            <p className="content-noti">Cập nhật lần cuối: {calendar.lastUpdate}</p>
                        </div>
                        <div className="list-schedule">
                            {
                                calendar.dutySchedule.map((schedule) => (
                                    schedule === calendar.dutySchedule[0] || schedule === calendar.dutySchedule[1] || schedule === calendar.dutySchedule[2] ?
                                        <ViewMore active={false}>
                                            <div className="bg-schedule">
                                                <div className="left-schedule"></div>
                                                <div className="content-schedule">
                                                    <div className="day">{schedule.day}</div>
                                                    <div className="note">{schedule.note}</div>
                                                    <div className="date"><i class="fa-regular fa-calendar"></i> {schedule.date}</div>
                                                    <div className="time"><i class="fa-regular fa-clock"></i> {schedule.time}</div>
                                                </div>
                                            </div>
                                        </ViewMore> :
                                        <ViewMore active={!open}>
                                            <div className="bg-schedule">
                                                <div className="left-schedule"></div>
                                                <div className="content-schedule">
                                                    <div className="day">{schedule.day}</div>
                                                    <div className="note">{schedule.note}</div>
                                                    <div className="date"><i class="fa-regular fa-calendar"></i> {schedule.date}</div>
                                                    <div className="time"><i class="fa-regular fa-clock"></i> {schedule.time}</div>
                                                </div>
                                            </div>
                                        </ViewMore>
                                ))
                            }
                            <Button className="button-viewmore" onClick={() => setOpen(!open)}
                                style={{
                                    display: 'flex',
                                    backgroundColor: 'rgba(77, 68, 181, 0.1)',
                                    width: '100%',
                                    height: '57.42px',
                                    borderRadius: '40px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#4D44B5',
                                }}
                            >
                                {
                                    open === true ? <p className="close">Đóng</p> : <p className="more">Xem thêm</p>
                                }
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box >
    );
}

export default EmployeeInfo;