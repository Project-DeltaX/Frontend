import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import "./Interview.css";
import AWS from "aws-sdk";




// const rows = [
//   createData(1, "Tharanika", "Perinparasah", 23, "vk123@gmail.com", "CV"),
//   createData(2, "Danuraha", "Thevanayagam", 23, "vk123@gmail.com", "CV"),
//   createData(3, "Thanushiyan", "Sivapalasundaram", 23, "vk123@gmail.com", "CV"),
//   createData(4, "Mahilan", "Shanmuganathan", 23, "vk123@gmail.com", "CV"),
// ];

const makeStyle = (status) => {

  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
  
}

const AllocatedCandidates = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://bgn8o86ukl.execute-api.us-east-1.amazonaws.com/New/candidatedata');
    const data = await response.json();
    setData(data);
  
  };
  return (
    <box rowspacing={3} m={10}>
      <div className="Table">
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>FirstName ID</TableCell>
                <TableCell align="left">CandidateID</TableCell>
                <TableCell align="left">Email </TableCell>
                <TableCell align="left">Last Name</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {data.map((data) => (
                <TableRow
                  key={data.CandidateID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="data">
                    {data.FirstName}
                  </TableCell>
                  <TableCell align="left">{data.FirstName}</TableCell>
                  <TableCell align="left">{data.CandidateID}</TableCell>
                  <TableCell align="left">{data.Email}</TableCell>
                  <TableCell align="left">{data.LastName}</TableCell>
                  
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </box>
  );
}


export default AllocatedCandidates;
