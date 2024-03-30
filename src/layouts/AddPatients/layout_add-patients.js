import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import NavbarAddPatient from "./navbar_add-patients";
import { styled } from "@mui/material";

const LayoutContainer = styled('div')({
  display: 'flex',
});

const SidebarContainer = styled('div')({
  width: '325px',
  backgroundColor: "#4d44b5"
});

const ContentContainer = styled('div')({
  flex: '1', // Chiếm phần còn lại của không gian
});

const LayoutAddPatient = () => {
  return (
    <LayoutContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ContentContainer>
        <NavbarAddPatient />
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
    // <Sidebar/>
  );
};

export default LayoutAddPatient;
