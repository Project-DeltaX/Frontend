import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
const SMCandidate = () => {
    const [sData, setSData] = useState([]);

     useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://np9fx7zlm6.execute-api.us-east-1.amazonaws.com/intern1"
        );
        const jsonData = await response.json();
        setSData(jsonData);
        console.log(sData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
    return(
 <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl
          fullWidth
          sx={{
            "& label": {
              color: "#1e0342", // change text color
              fontWeight: "bold",
            },
          }}
        ></FormControl>
         
     

        <Grid item xs={12}>
        <div className="Table">
          
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#9485a8" }}>
                <TableRow>
                  <TableCell />
                  <TableCell>CandidateName</TableCell>
                  <TableCell align="left">JobRole</TableCell>
                  <TableCell align="left">CandidateEmail</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "Bluet" }}>
                {sData.map((row) => (
                  <TableRow
                    style={{ backgroundColor: "#b8a9cc" }}
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.candidateName}
                    </TableCell>
                    <TableCell align="left">{row.jobRole}</TableCell>
                    <TableCell align="left">{row.candidateEmail}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      </Grid>
      </Grid>
    );
};
export default SMCandidate;