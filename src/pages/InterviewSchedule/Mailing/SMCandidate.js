// import React, { useState, useEffect } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import FormControl from "@mui/material/FormControl";
// import Checkbox from "@mui/material/Checkbox";
// const SMCandidate = () => {
//     const [sData, setSData] = useState([]);

//      useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://71sozhk0d6.execute-api.us-east-1.amazonaws.com/st1/internlist"
         
//         );
//         const jsonData = await response.json();
//         setSData(jsonData);
//         console.log(sData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);
//     return(
//  <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <FormControl
//           fullWidth
//           sx={{
//             "& label": {
//               color: "#1e0342", // change text color
//               fontWeight: "bold",
//             },
//           }}
//         ></FormControl>
         
     

//         <Grid item xs={12}>
//         <div className="Table">
          
//           <TableContainer
//             component={Paper}
//             style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//           >
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead sx={{ backgroundColor: "#9485a8" }}>
//                 <TableRow>
//                   <TableCell />
//                   <TableCell>CandidateName</TableCell>
//                   <TableCell align="left">JobRole</TableCell>
//                   <TableCell align="left">CandidateEmail</TableCell>
//                   <TableCell align="left">Status</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody style={{ color: "Bluet" }}>
//                 {sData.map((row) => (
//                   <TableRow
//                     style={{ backgroundColor: "#b8a9cc" }}
//                     key={row.name}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                     >
//                     <TableCell padding="checkbox">
//                       <Checkbox />
//                     </TableCell>
//                     <TableCell component="th" scope="row">
//                       {row.candidateName}
//                     </TableCell>
//                     <TableCell align="left">{row.jobRole}</TableCell>
//                     <TableCell align="left">{row.candidateEmail}</TableCell>
//                     <TableCell align="left">{row.status}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </Grid>
//       </Grid>
//       </Grid>
//     );
// };
// export default SMCandidate;
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
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
const SMCandidate = () => {
  const [sData, setSData] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://71sozhk0d6.execute-api.us-east-1.amazonaws.com/st1/internlist"
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

  const handleCandidateSelection = (candidateEmail) => {
    const isSelected = selectedCandidates.includes(candidateEmail);
    if (isSelected) {
      setSelectedCandidates((prevSelections) =>
        prevSelections.filter((email) => email !== candidateEmail)
      );
    } else {
      setSelectedCandidates((prevSelections) => [
        ...prevSelections,
        candidateEmail,
      ]);
    }
  };

  const handleSendEmail = async () => {
    try {
      const response = await fetch(
        "https://bwczldmpr2.execute-api.us-east-1.amazonaws.com/st23/interndetail", // Replace with your Lambda function endpoint
        {
          method: "POST",
          body: JSON.stringify(selectedCandidates),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
                        <Checkbox
                          checked={selectedCandidates.includes(row.candidateEmail)}
                          onChange={() => handleCandidateSelection(row.candidateEmail)}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.candidateName}
                      </TableCell>
                      <TableCell align="left">{row.jobRole}</TableCell>
                      <TableCell align
                        ="left">{row.candidateEmail}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
          <Grid>
            
          </Grid>
          <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ backgroundColor: "#1e0342" }}
            onClick={handleSendEmail}>Send Email
            
           
          </Button>
        </Stack>
      </Grid>
    
        </Grid>
      </Grid>
    );
  };
  
  export default SMCandidate;
  