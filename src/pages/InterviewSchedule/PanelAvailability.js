// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Unstable_Grid2";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const PanelAvailability = () => {
//   const [pdata, setPdata] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://szhbcgr633.execute-api.us-east-1.amazonaws.com/new1/pmemberdata"
//         );
//         const jsonPdata = await response.json();
//         setPdata(jsonPdata);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//       <Grid xs={12}>
//         <h3> Panel Member</h3>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>Panel member name</StyledTableCell>
//                 <StyledTableCell align="right">Job role</StyledTableCell>
//                 <StyledTableCell align="right">E-mail</StyledTableCell>
//                 {/* <StyledTableCell align="right">Status</StyledTableCell> */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {pdata.map((row) => (
                
//                 <StyledTableRow key={row.email}>
//                   <StyledTableCell component="th" scope="row">
//                     {row.firstName}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.guestRole}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">{row.email}</StyledTableCell>
//                   {/* <StyledTableCell align="right">{row.Status}</StyledTableCell> */}
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Grid>
//     </Grid>
//   );
// };

// export default PanelAvailability;
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PanelAvailability = () => {
  const [pdata, setPdata] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://szhbcgr633.execute-api.us-east-1.amazonaws.com/new1/pmemberdata"
        );
        const jsonPdata = await response.json();
        setPdata(jsonPdata);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleRowSelect = (email) => {
    if (selectedRows.includes(email)) {
      setSelectedRows(selectedRows.filter((row) => row !== email));
    } else {
      setSelectedRows([...selectedRows, email]);
    }
  };

  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid item xs={12}>
        
       </Grid>
      <Grid item xs={12}>
        <h3>Panel Member</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Select</StyledTableCell>
                <StyledTableCell>Panel member name</StyledTableCell>
                <StyledTableCell align="right">Job role</StyledTableCell>
                <StyledTableCell align="right">E-mail</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pdata.map((row) => (
                <StyledTableRow key={row.email}>
                  <StyledTableCell>
                    <Checkbox
                      checked={selectedRows.includes(row.email)}
                      onChange={() => handleRowSelect(row.email)}
                    />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.guestRole}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default PanelAvailability;

