import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import NavbarEmployee from "./navbar_manage-employees";
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

const LayoutEmployee = () => {
  return (
    <LayoutContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ContentContainer>
        <NavbarEmployee />
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
    // <Sidebar/>
  );
};

export default LayoutEmployee;
