import { Box, Grid } from "@mui/material";
import React from "react";

const EmployeeInfo = () => {

    return (
        <Box className="box-employee-info">
            <Grid container my={2}>
                <Grid item xs={8.26} className="grid-profile-info">
                    <Box className="box-profile">
                        <Box className="box-head-profile">
                            <Box className="square square-yl"></Box>
                            <Box className="square square-or"></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3.25}></Grid>
            </Grid>
        </Box>
    );
}

export default EmployeeInfo;