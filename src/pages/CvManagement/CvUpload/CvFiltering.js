import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";

const tableData = [
  {
    id: "1",
    first_name: "John",
    last_name: "Smith",
    email: "john.smith@example.com",
  },
  {
    id: "1",
    first_name: "John",
    last_name: "Smith",
    email: "john.smith@example.com",
  },
];

const CvFiltering = () => {
  const [files, setFiles] = useState(null);

  return (
    <div>
      <Box
        sx={{
          width: 800,
          height: 300,
          backgroundColor: "#bdb2ff",
          padding: "1px",
          margin: "1px",
        }}
      >
        <div>
          <h5>Shortlisted CVs</h5>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First Namee</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>E-mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default CvFiltering;
