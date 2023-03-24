import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
 
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const Mailing = () => {
  const [mail, setMail] = React.useState('');

  const handleChange = (event) => {
    setMail(event.target.value);
  }
  return (
    <Grid container spacing={2}>
        <Grid item xs={8}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mail</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mail}
          label="Mail"
          onChange={handleChange}
        >
          <MenuItem value={10}>Interview mail Candidates</MenuItem>
          <MenuItem value={20}>Interview mail Panel member</MenuItem>
          <MenuItem value={30}>Selected mail Candidates</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12}>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
        </Grid>
        <Grid item xs={4}>
         
        </Grid>
        <Grid item xs={8}>
         
        </Grid>
      </Grid>
  );
};

export default Mailing;
