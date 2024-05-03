import React from "react";
import ColumnGroupingTable from "./table_manage-devices";
import '../../App.css'
import { Button, IconButton, InputBase, MenuItem, Select, Typography, colors } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const LinkAdd = styled(Link)({
  textDecoration: 'none',
});

const DevicePage = () => {
  return (
    < section className="dashboard" >
      <header>
        <div className="search-bar">
          <div className="search-bar-block">
            <IconButton type="button" sx={{ p: '3px', color: '#4D44B5' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Tìm kiếm"
              inputProps={{ 'aria-label': 'Tìm kiếm' }}
            />
          </div>
          <div className="justify">
            <Select
              value={"Mới nhất"}
              className="drop-down"
              fullWidth
              style={{
                width: '207px',
                height: '60px',
                borderRadius: '40px',
                border: '2px solid var(--Color-Purple, #4D44B5)',
                boxShadow: '0px 20px 50px 0px rgba(191, 21, 108, 0.05)',
                textAlign: 'center'
              }}>
              <MenuItem value="Mới nhất">Mới nhất</MenuItem>
              <MenuItem value="Bộ lọc 1">Bộ lọc 1</MenuItem>
              <MenuItem value="Bộ lọc 2">Bộ lọc 2</MenuItem>
              <MenuItem value="Bộ lọc 3">Bộ lọc 3</MenuItem>
            </Select>
            <LinkAdd to="/manage-devices/add-device">
              <div style={{ borderRadius: '40px', overflow: 'hidden' }}>
                <Button className="xinnghi" style={{ backgroundColor: "#4d44b5", color: 'white', textTransform: 'none', fontWeight: '700', fontSize: '18px' }} startIcon={<AddIcon></AddIcon>}>Thêm</Button>
              </div>
            </LinkAdd>
          </div>
        </div>

      </header >
      <div className="table">

        <ColumnGroupingTable
          style={{
            width: "1475px",
            height: "807px",

          }}></ColumnGroupingTable>
      </div>
    </ section >

  );
};
export default DevicePage;
