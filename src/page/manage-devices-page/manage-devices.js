import React from "react";
import ColumnGroupingTable from "./table_manage-devices";
import '../../App.css'
import { colors } from "@mui/material";
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.60001 19.6 4.10001 14.1 4.10001C8.6 4.10001 4 8.60001 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.60001 14 6.60001C18.1 6.60001 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z" fill="#4D44B5" />
            </svg>
            <input type="text" placeholder="Tìm kiếm..." />
          </div>
          <div className="justify">
            <div className="drop-down">
              <select >
                <option value="Mới nhất">Mới nhất</option>
                <option value="Bộ lọc 1">Bộ lọc 1</option>
                <option value="Bộ lọc 2">Bộ lọc 2</option>
                <option value="Bộ lọc 3">Bộ lọc 3</option>
              </select>
            </div>
            <LinkAdd to="/add-device">
              <div className="buttons">
                <button className="new-patient" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 17" fill="none">
                    <path d="M6.84703 10.6647H0.882324V6.42941H6.84703V0.5H11.0823V6.42941H17.1176V10.6647H11.0823V16.6647H6.84703V10.6647Z" fill="white" />
                  </svg> Thêm
                </button>
              </div>
            </LinkAdd>
          </div>
        </div>

      </header>
      <div className="table">

        <ColumnGroupingTable
          style={{
            width: "1475px",
            height: "807px",

          }}></ColumnGroupingTable>
      </div>
    </ section>

  );
};
export default DevicePage;
