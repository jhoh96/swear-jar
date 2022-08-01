import React from "react";
import Card from "../components/Card.jsx";
import DataTable from "../components/DataTable.jsx"

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './pageStyle.css'

export default function Instance() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className='instance-container'>
        <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
          <DataTable/>
        </Box>
        <Card className='instance-card'/>
      </Container>
    </React.Fragment>
  );
}
