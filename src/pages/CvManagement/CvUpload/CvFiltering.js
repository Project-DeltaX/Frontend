import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Grid,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const CvFiltering = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://p58vbxt03i.execute-api.us-east-1.amazonaws.com/dev/shortedlist"
        );
        const json = await response.json();
        setTableData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Box
        sx={{
          width: 800,
          height: "fit-content",
          backgroundColor: "#bdb2ff",
          padding: "1px",
          margin: "1px",
        }}
      >
        <Grid container direction={"column"}>
          <Grid item md={4} container>
            <Grid item md={8} pl={2}>
              <h5>Shortlisted CVs</h5>
            </Grid>
          </Grid>

          <Grid item md={8} pl={1} pt={1} pb={1} pr={1}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>Position</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.first_name}</TableCell>
                      <TableCell>{row.last_name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.position}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CvFiltering;
