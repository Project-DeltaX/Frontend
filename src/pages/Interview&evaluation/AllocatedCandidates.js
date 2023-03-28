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
import { Box } from "@mui/system";




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
    const response = await fetch("https://mjhi541fog.execute-api.us-east-1.amazonaws.com/new6/allocatedcandidates");
    const data = await response.json();
    setData(data);
  
  };
  return (
   <Box m={10}>
    <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650,background:
              '#E8E1FA' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Candidate_Id</TableCell>
                <TableCell align="left">email</TableCell>
                <TableCell align="left">First_name </TableCell>
                <TableCell align="left">Last_name</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {data.map((data,index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="data">
                    {data.Candidate_Id}
                  </TableCell>
                  <TableCell align="left">{data.email}</TableCell>
                  <TableCell align="left">{data.First_name}</TableCell>
                  <TableCell align="left">{data.Last_name}</TableCell>
                  {/* <TableCell align="left">{data.LastName}</TableCell> */}
                  
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      

   </Box>
     
        

   
  );
}


export default AllocatedCandidates;
