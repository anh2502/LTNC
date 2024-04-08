import React from "react";
import '../../App.css'
import { Box, Paper, Stack, Table, TableBody, TableHead, Typography } from "@mui/material";


const PatientInfo = (image, name, curriculumVitae, hospitalizedDay, hospitalNumber, doctor, patient, examination, diagnose, treatmentDirection) => {
    image = 'https://bizweb.dktcdn.net/100/438/408/files/meme-ech-xanh-yody-vn-5.jpg?v=1692246402739';
    name = 'Đào Duy Quý';
    curriculumVitae = {
        birthDay: '09/11/2004',
        gender: 'Nam',
        healthInsuranceCode: '03333333333',
        address: 'Tổ 1, Ấp 1, Đường 1, Xã 1, Huyện 1, Thành phố 1',
    }
    hospitalizedDay = '30/02/2024';
    hospitalNumber = '4953';
    doctor = 'Nguyễn Thị Mai Anh';
    patient = {
        reason: 'ATSM',
        pathologicalProcess: 'ảo game quá nên không kiềm chế được',
        anamnesis: {
            self: 'ATSM từ năm 10 tuổi',
            family: 'Không có',
        },
    };
    examination = {
        body: 'Bình thường',
        agencies: 'Não không bình thường',
        diseaseSummary: 'Hay khùng vào đêm',
    };
    diagnose = {
        mainDiagnosis: 'ATSM',
        accompanyingDiagnosis: 'Ảo game',
        prognosis: 'Nặng',
    };
    treatmentDirection = 'Không có';
    return (
        <Box className="box-info" >
            <Box className="box-info_head" >
                <Box className="rectangle or"></Box>
                <Box className="rectangle yl"></Box>
            </Box>
            <Box className="avatar-info">
                <img src={image} alt="con pepe" style={{ width: '100%', height: '100%' }} />
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={32} lineHeight={1.5} fontFamily={"Lato"} textTransform={'capitalize'}>{name}</Typography>
            <Box className="paragraph-soyeulylich">
                <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Sơ yếu lý lịch:</Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Ngày/tháng/năm sinh: {curriculumVitae.birthDay}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Giới tính: {curriculumVitae.gender}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Mã số BHYT: {curriculumVitae.healthInsuranceCode}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Địa chỉ: {curriculumVitae.address}
                </Typography>
            </Box>
            <Box className="paragraph-ngaynhapvien">
                <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Vào viện ngày:</Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>{hospitalizedDay}</Typography>
            </Box>
            <Box className="paragraph-phongbenh">
                <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Phòng bệnh số:</Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>{hospitalNumber}</Typography>
            </Box>
            <Box className="paragraph-bsdt">
                <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Bác sĩ điều trị:</Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>{doctor}</Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Tóm tắt bệnh án:</Typography>
            <Box className="paragraph-benhan">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Lý do nằm viện: {patient.reason}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Quá trình bệnh lý: {patient.pathologicalProcess}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Tiền sử bệnh:
                    <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                        Bản thân: {patient.anamnesis.self}
                    </Typography>
                    <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                        Gia đình: {patient.anamnesis.family}
                    </Typography>
                </Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Khám bệnh:</Typography>
            <Box className="paragraph-khambenh">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Toàn thân: {examination.body}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Các cơ quan: {examination.agencies}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Tóm tắt bệnh: {examination.diseaseSummary}
                </Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Chẩn đoán</Typography>
            <Box className="paragraph-chandoan">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Bệnh chính: {diagnose.mainDiagnosis}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Bệnh kèm theo: {diagnose.accompanyingDiagnosis}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Tiên lượng: {diagnose.prognosis}
                </Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Hướng điều trị:</Typography>
            <Box className="paragraph-dieutri">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'} marginBottom={3}>{treatmentDirection}</Typography>
            </Box>
        </Box>

    );
};

export default PatientInfo;