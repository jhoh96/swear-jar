import React, { useState, useEffect } from "react";
import Axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


import './componentStyle.css'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'userName',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'instanceWord',
    headerName: 'Word Used',
    sortable: true,
    width: 160,
  },
  {
    field: 'instanceCost',
    headerName: '$ Cost',
    width: 150,
    editable: true,
  },

];


export default function DataTable() {

  const [poolInstances, setPoolInstances] = useState([])

  React.useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setPoolInstances(response.data)
    })
  }, [])


  return (
    <Box sx={{ height: '100%', width: '100%' }} className='data-box'>
      <DataGrid
        rows={poolInstances}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
}
