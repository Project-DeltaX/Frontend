

// import React, { useState, useEffect } from "react";
// import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   backgroundColor: "#9f4dbd", // Header row color
//   color: theme.palette.common.white,
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: "#9f4dbd", // Data row color
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const CMPanel = () => {
//   const [pdata, setPdata] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://58rblmkvyc.execute-api.us-east-1.amazonaws.com/nw1/paneldata"
//         );
//         const jsonPdata = await response.json();
//         setPdata(jsonPdata);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleCheckboxChange = (event, email) => {
//     const updatedData = pdata.map((row) =>
//       row.email === email ? { ...row, checked: event.target.checked } : row
//     );
//     setPdata(updatedData);
//   };

//   return (
//     <Grid container rowSpacing={4}>
//       <Grid item xs={12}>

//       </Grid>
//       <Grid item xs={12}>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell></StyledTableCell>
//                 <StyledTableCell>Panel member name</StyledTableCell>
//                 <StyledTableCell align="right">Job role</StyledTableCell>
//                 <StyledTableCell align="right">E-mail</StyledTableCell>
//                 <StyledTableCell align="right">Status</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {pdata.map((row) => (
//                 <StyledTableRow key={row.email}>
//                   <StyledTableCell>
//                     <Checkbox
//                       checked={row.checked || false}
//                       onChange={(event) => handleCheckboxChange(event, row.email)}
//                     />
//                   </StyledTableCell>
//                   <StyledTableCell component="th" scope="row">
//                     {row.name}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">{row.jobPosition}</StyledTableCell>
//                   <StyledTableCell align="right">{row.email}</StyledTableCell>
//                   <StyledTableCell align="right">{row.status}</StyledTableCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Grid>
//     </Grid>
//   );
// };

// export default CMPanel;

import React, { useState, useEffect } from "react";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#1e0342", // Header row color
  color: theme.palette.common.white,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#9485a8", // Data row color
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CMPanel = () => {
  const [pdata, setPdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://58rblmkvyc.execute-api.us-east-1.amazonaws.com/nw1/paneldata"
        );
        const jsonPdata = await response.json();
        setPdata(jsonPdata);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (event, email) => {
    const updatedData = pdata.map((row) =>
      row.email === email ? { ...row, checked: event.target.checked } : row
    );
    setPdata(updatedData);
  };

  const handleStatusChange = (email, status) => {
    const updatedData = pdata.map((row) =>
      row.email === email ? { ...row, status: status } : row
    );
    setPdata(updatedData);
  };

  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        </Grid>

      <Grid item xs={12}>
      
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>Panel member name</StyledTableCell>
                <StyledTableCell align="right">Job role</StyledTableCell>
                <StyledTableCell align="right">E-mail</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pdata.map((row) => (
                <StyledTableRow key={row.email}>
                  <StyledTableCell>
                    <Checkbox
                      checked={row.checked || false}
                      onChange={(event) => handleCheckboxChange(event, row.email)}
                    />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.jobPosition}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: getStatusColor(row.status) }}
                      onClick={() => handleStatusChange(row.email, getNextStatus(row.status))}
                    >
                      {row.status}
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>

        <Grid item xs={12} rowSpacing={4}>
          </Grid>

        <Grid item xs={12}>
        <Stack direction="row" spacing={4}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ backgroundColor: "#1e0342" }}
          >
            Send mail
          </Button>
        </Stack>
      </Grid>

      </Grid>
   
  );
};

// Helper function to get the color for each status
const getStatusColor = (status) => {
  
      switch (status) {
        case "Accepted":
          return "#4CAF50"; // Green color
        case "Rejected":
          return "#F44336"; // Red color
        case "Pending":
          return "#FFEB3B"; // Yellow color
        // default:
        //   return "#FFFFFF"; // Default color (white)
      }
    };
    
    // Helper function to get the next status based on the current status
    const getNextStatus = (status) => {
      switch (status) {
        case "Accepted":
          return "Rejected";
        case "Rejected":
          return "Pending";
        case "Pending":
          return "Accepted";
        default:
          return "Pending"; // Default status (Pending)
      }
    };
    
    export default CMPanel;
    
