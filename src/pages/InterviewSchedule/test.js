// import React, { useState, useEffect } from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Grid from "@mui/material/Grid";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";

// const Allocation = () => {
//   const [cData, setCData] = useState([]);
//   const [pData, setPData] = useState([]);
//   const [selectedPanelMember, setSelectedPanelMember] = useState(null);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);

//   const handlePanelMemberSelection = (panelMember) => {
//     setSelectedPanelMember(panelMember);
//   };

//   const handleCandidateSelection = (candidate) => {
//     setSelectedCandidate(candidate);
//   };

//   const handleAllocateInterview = async () => {
//     if (selectedPanelMember && selectedCandidate) {
//       const body = {
//         panelMemberName: selectedPanelMember.firstName,
//         panelMemberEmail: selectedPanelMember.email,
//         candidateName: selectedCandidate.name,
//         candidateEmail: selectedCandidate.email,
//       };
//       try {
//         const response = await fetch(
//           "https://your-api-endpoint.com/allocate-interview", // Replace with your API endpoint
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(body),
//           }
//         );

//         if (response.ok) {
//           console.log("Allocation saved successfully");
//         } else {
//           console.error("Error saving allocation");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   useEffect(() => {
//     const fetchCandidateData = async () => {
//       try {
//         const response = await fetch(
//           "https://bgn8o86ukl.execute-api.us-east-1.amazonaws.com/New/candidatedata"
//         );
//         const jsonData = await response.json();
//         setCData(jsonData);
//         console.log(jsonData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCandidateData();
//   }, []);

//   useEffect(() => {
//     const fetchPanelMemberData = async () => {
//       try {
//         const response = await fetch(
//           "https://szhbcgr633.execute-api.us-east-1.amazonaws.com/new1/pmemberdata"
//         );
//         const jsonData = await response.json();
//         setPData(jsonData);
//         console.log(jsonData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchPanelMemberData();
//   }, []);

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={6}>
//         <FormControl fullWidth>
//           <InputLabel id="panel-member-label">Panel Member</InputLabel>
//           <Select
//             labelId="panel-member-label"
//             id="panel-member-select"
//             value={selectedPanelMember}
//             label="Panel Member"
//             onChange={(e) => handlePanelMemberSelection(e.target.value)}
//           >
//             {pData.map((panelMember) => (
//               <MenuItem key={panelMember.email} value={panelMember}>
//                 {panelMember.firstName}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={12}>
//         <div className
//         <div className="Table">
//         <h3>Panel Member List</h3>
//         <TableContainer
//           component={Paper}
//           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead sx={{ backgroundColor: "#9485a8" }}>
//               <TableRow>
//                 <TableCell />
//                 <TableCell>PanelMemberName</TableCell>
//                 <TableCell align="left">JobTitle</TableCell>
//                 <TableCell align="left">P.email</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody style={{ color: "Bluet" }}>
//               {pData.map((row, index) => (
//                 <TableRow
//                   style={{ backgroundColor: "#b8a9cc" }}
//                   key={row.email}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={selectedPanelMember === row}
//                       onChange={() => handlePanelMemberSelection(row)}
//                     />
//                   </TableCell>
//                   <TableCell component="th" scope="row">
//                     {row.firstName}
//                   </TableCell>
//                   <TableCell align="left">{row.guestRole}</TableCell>
//                   <TableCell align="left">{row.email}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </Grid>
//     <Grid item xs={6}>
//       <FormControl fullWidth>
//         <InputLabel id="candidate-label">Candidate</InputLabel>
//         <Select
//           labelId="candidate-label"
//           id="candidate-select"
//           value={selectedCandidate}
//           label="Candidate"
//           onChange={(e) => handleCandidateSelection(e.target.value)}
//         >
//           {cData.map((candidate) => (
//             <MenuItem key={candidate.email} value={candidate}>
//               {candidate.name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Grid>
//     <Grid item xs={12}>
//       <div className="Table">
//         <h3>Candidate list</h3>
//         <TableContainer
//           component={Paper}
//           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead sx={{ backgroundColor: "#9485a8" }}>
//               <TableRow>
//                 <TableCell />
//                 <TableCell>CandidateName</TableCell>
//                 <TableCell align="left">Position</TableCell>
//                 <TableCell align="left">C.email</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody style={{ color: "Blue" }}>
//               {cData.map((row) => (
//                 <TableRow
//                   style={{ backgroundColor: "#b8a9cc" }}
//                   key={row.name}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={selectedCandidate === row}
//                       onChange={() => handleCandidateSelection(row)}
//                     />
//                   </TableCell>
//                   <TableCell component="th" scope="row">
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="left">{row.jobRole}</TableCell>
//                   <TableCell align="left">{row.email}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </Grid>
//     <Grid item xs={12}>
//       <Button
// <Button
// variant="contained"
// style={{ backgroundColor: "#1e0342", color: "white" }}
// onClick={handleAllocateInterview}
// disabled={!selectedPanelMember || !selectedCandidate}
// >
// Allocate for interview
// </Button>
// </Grid>
// </Grid>
// );
// };

// export default Allocation;



// ...imports

const SMCandidate = () => {
    const [sData, setSData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://api-gateway-url/endpoint', // Replace with your API Gateway URL
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
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
  
    const handleEmailSend = async () => {
      const selectedCandidates = sData.filter((row) => row.selected);
  
      const promises = selectedCandidates.map((candidate) => {
        const requestBody = { candidateEmail: candidate.candidateEmail };
  
        return fetch('https://api-gateway-url/endpoint', { // Replace with your API Gateway URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
      });
  
      try {
        await Promise.all(promises);
        console.log('Emails sent successfully');
      } catch (error) {
        console.error('Error sending emails:', error);
      }
    };
  
    const handleCheckboxChange = (event, index) => {
      const newData = [...sData];
      newData[index].selected = event.target.checked;
      setSData(newData);
    };
  
    return (
      <Grid container spacing={2}>
        {/* ... */}
        <Grid item xs={12}>
          <div className="Table">
            <TableContainer
              component={Paper}
              style={{ boxShadow: '0px 13px 20px 0px #80808029' }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: '#9485a8' }}>
                  <TableRow>
                    <TableCell />
                    <TableCell>CandidateName</TableCell>
                    <TableCell align="left">JobRole</TableCell>
                    <TableCell align="left">CandidateEmail</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ color: 'Bluet' }}>
                  {sData.map((row, index) => (
                    <TableRow
                      style={{ backgroundColor: '#b8a9cc' }}
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={row.selected || false}
                          onChange={(event) => handleCheckboxChange(event, index)}
                        />
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
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleEmailSend}>
            Send Email
          </Button>
        </Grid>
      </Grid>
    );
  };
  
  export default SMCandidate;
  