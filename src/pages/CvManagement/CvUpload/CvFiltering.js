import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";


const data = [{
    id: "1"	,
    first_name: 'John',	
    last_name: 'Smith',	
    email: 'john.smith@example.com'
},
{
    id: "1"	,
    first_name: 'John',	
    last_name: 'Smith',	
    email: 'john.smith@example.com'
}]

const CvFiltering = () => {
    const [files, setFiles] = useState(null);

    return (
        <div>
            <box rowspacing={3}>
      <div className="Table">
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name </TableCell>
                <TableCell align="left">Email</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {data.map((data) => (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="data">
                    {data.first_name}
                  </TableCell>
                  <TableCell align="left">{data.id}</TableCell>
                  <TableCell align="left">{data.first_name}</TableCell>
                  <TableCell align="left">{data.last_name}</TableCell>
                  <TableCell align="left">{data.email}</TableCell>
                  
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </box>
        </div>
    )
};

export default CvFiltering;