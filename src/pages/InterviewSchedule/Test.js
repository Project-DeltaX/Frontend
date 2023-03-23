import React from "react";
import Layout from "../../components/Layout";
import Box from '@mui/material/Box';
import {DataGrid }from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    
  ];

const Allocation = () => {

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }
    return ( 
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} direction={"column"}>
        <Grid xs={4}>
          <Item>
          <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className="selectStyle">  No.of panel members</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="No.of panel members"
          onChange={handleChange}
        >
          <MenuItem value={10}>Five</MenuItem>
          <MenuItem value={20}>Ten</MenuItem>
          <MenuItem value={30}>Fifteen</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">No.of candidates</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="No.of candidates"
          onChange={handleChange}
        >
          <MenuItem value={10}>Four</MenuItem>
          <MenuItem value={20}>Two</MenuItem>
          <MenuItem value={30}>Fifteen</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            
          </Item>
        </Grid>
    
      </Grid>
    </Box>

     );

    }
export default Allocation;


