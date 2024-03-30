import React from "react";
import { Link } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ConstructionIcon from "@mui/icons-material/Construction";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import '../App.css'

const Side = styled(Box)({
  width: "325px",
  color: "#fff",
  margin: "50px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "flex-start", // Căn trên cùng
});

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
});

const Logo = styled(Box)({
  width: "50px",
  height: "50px",
  backgroundColor: "#fb7d5b",
  borderRadius: "20px", // Bo góc để tạo hình tròn
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "10px",
});

const LogoText = styled(Typography)({
  fontSize: "30px",
  fontWeight: "bold",
  color: "#fff",
});
const LinkItem = styled(Link)({
  textDecoration: "none",
  color: "#fff",
  fontSize: "18px",
  fontWeight: 500,
  margin: "5px 0",
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
});

const Sidebar = () => {
  return (
    <Side>
      <LogoContainer>
        <Logo>
          <LogoText>H</LogoText>
        </Logo>
        <Typography variant="h4" fontWeight="bold">
          HOSPITAL
        </Typography>
      </LogoContainer>
      <LinkItem to="/">
        <HomeIcon style={{ marginRight: "5px" }} />
        Trang chủ
      </LinkItem>
      <LinkItem to="/manage-patients" id="patients">
        <Diversity1Icon style={{ marginRight: "5px" }} />
        Quản lý bệnh nhân
      </LinkItem>
      <LinkItem to="/manage-medicines" id="medicines">
        <VaccinesIcon style={{ marginRight: "5px" }} />
        Quản lý thuốc
      </LinkItem>
      <LinkItem to="/manage-employees" id="employees">
        <BadgeIcon style={{ marginRight: "5px" }} />
        Quản lý nhân viên
      </LinkItem>
      <LinkItem to="/manage-devices" id="devices">
        <ConstructionIcon style={{ marginRight: "5px" }} />
        Quản lý thiết bị
      </LinkItem>
      <LinkItem to="/manage-preventions" id="preventions">
        <LocalHotelIcon style={{ marginRight: "5px" }} />
        Quản lý phòng bệnh
      </LinkItem>
      <LinkItem to="/admin" id="admin">
        <PersonIcon style={{ marginRight: "5px" }} />
        Admin
      </LinkItem>
    </Side>
  );
};

export default Sidebar;
