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

// const Allocation = () => {
//   const [member, setMember] = React.useState([]);
//   const [cData, setCData] = useState([]);
//   const [pData, setPData] = useState([]);
//   const handleChange = (event) => {
//     setMember(event.target.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://bgn8o86ukl.execute-api.us-east-1.amazonaws.com/New/candidatedata"
//         );
//         const jsonData = await response.json();
//         setCData(jsonData);
//         console.log(cData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://szhbcgr633.execute-api.us-east-1.amazonaws.com/new1/pmemberdata"
//           );
//         const jsonData = await response.json();
//         setPData(jsonData);
//         console.log(pData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={6}>
//         <FormControl
//           fullWidth
//           sx={{
//             "& label": {
//               color: "#1e0342", // change text color
//               fontWeight: "bold",
//             },
//           }}
//         >
//           <InputLabel id="demo-simple-select-label">Panel member</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={member}
//             label="Panel member"
//             onChange={handleChange}
//           >
//             <MenuItem value={10}>Five</MenuItem>
//             <MenuItem value={20}>Seven</MenuItem>
//             <MenuItem value={30}>Ten</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={12}>
//         <div className="Table">
//           <h3>Panel Member List</h3>
//           <TableContainer
//             component={Paper}
//             style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//           >
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead sx={{ backgroundColor: "#9485a8" }}>
//                 <TableRow>
//                   <TableCell>PanelMemberName</TableCell>
//                   <TableCell align="left">JobTitle</TableCell>
//                   <TableCell align="left">Email</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody style={{ color: "Bluet" }}>
//                 {pData.map((row) => (
//                   <TableRow
//                     style={{ backgroundColor: "#b8a9cc" }}
//                     key={row.name}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     <TableCell component="th" scope="row">
//                       {row.firstName}
//                     </TableCell>
//                     <TableCell align="left">{row.guestRole}</TableCell>
//                     <TableCell align="left">{row.email}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </Grid>
//       <Grid item xs={6}>
//         <FormControl
//           fullWidth
//           sx={{
//             "& label": {
//               color: "#1e0342", // change text color
//               fontWeight: "bold",
//             },
//           }}
//         >
//           <InputLabel id="demo-simple-select-label">Candidate</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={member}
//             label="Candidate"
//             onChange={handleChange}
//           >
//             <MenuItem value={10}>Five</MenuItem>
//             <MenuItem value={20}>Seven</MenuItem>
//             <MenuItem value={30}>Ten</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={12}>
//         <div className="Table">
//           <h3>Candidate list</h3>
//           <TableContainer
//             component={Paper}
//             style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//           >
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead sx={{ backgroundColor: "#9485a8" }}>
//                 <TableRow>
//                   <TableCell>Name</TableCell>
//                   <TableCell align="left">Position</TableCell>
//                   <TableCell align="left">Email</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody style={{ color: "Blue" }}>
//                 {cData.map((row) => (
//                   <TableRow
//                     style={{ backgroundColor: "#b8a9cc" }}
//                     key={row.name}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     <TableCell component="th" scope="row">
//                       {row.name}
//                     </TableCell>
//                     <TableCell align="left">{row.jobRole}</TableCell>
//                     <TableCell align="left">{row.email}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </Grid>
//       <Grid item xs={12}>
//         <Button variant="contained" style={{ backgroundColor: "#1e0342" }}>
//           Allocate for interview
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };
// export default Allocation;

import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const Allocation = () => {
  const [member, setMember] = React.useState([]);
  const [cData, setCData] = useState([]);
  const [pData, setPData] = useState([]);
  const [selectedPanelMember, setSelectedPanelMember] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);


  const handleChange = (event) => {
    setMember(event.target.value);
  };
  const handlePanelMemberSelection = (panelMember) => {
    setSelectedPanelMember(panelMember);
  };

  const handleCandidateSelection = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleAllocateInterview = async () => {
    if (selectedPanelMember && selectedCandidate) {
      const allocationData = {
        panelMemberName: selectedPanelMember.firstName,
        panelMemberEmail: selectedPanelMember.email,
        candidateName: selectedCandidate.name,
        candidateEmail: selectedCandidate.email,
      };
      try {
        const response = await fetch("https://y3xkww2phf.execute-api.us-east-1.amazonaws.com/allocation1/allocation", {
          method: "POST",
          body: JSON.stringify(allocationData),
        });

        if (response.ok) {
          console.log("Allocation saved successfully");
        } else {
          console.error("Error saving allocation");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bgn8o86ukl.execute-api.us-east-1.amazonaws.com/New/candidatedata"
        );
        const jsonData = await response.json();
        setCData(jsonData);
        console.log(cData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://szhbcgr633.execute-api.us-east-1.amazonaws.com/new1/pmemberdata"
        );
        const jsonData = await response.json();
        setPData(jsonData);
        console.log(pData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl
          fullWidth
          sx={{
            "& label": {
              color: "#1e0342", // change text color
              fontWeight: "bold",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Panel member</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={member}
            label="Panel member"
            onChange={handleChange}
          >
            <MenuItem value={10}>One</MenuItem>
            <MenuItem value={20}>Two</MenuItem>
            <MenuItem value={30}>Three</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <div className="Table">
          <h3>Panel Member List</h3>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#9485a8" }}>
                <TableRow>
                  <TableCell />
                  <TableCell>PanelMemberName</TableCell>
                  <TableCell align="left">JobTitle</TableCell>
                  <TableCell align="left">P.email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "Bluet" }}>
                {pData.map((row) => (
                  <TableRow
                    style={{ backgroundColor: "#b8a9cc" }}
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell align="left">{row.guestRole}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      <Grid item xs={6}>
        <FormControl
          fullWidth
          sx={{
            "& label": {
              color: "#1e0342", // change text color
              fontWeight: "bold",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Candidate</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={member}
            label="Candidate"
            onChange={handleChange}
          >
            <MenuItem value={10}>One</MenuItem>
            <MenuItem value={20}>Two</MenuItem>
            <MenuItem value={30}>Three</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <div className="Table">
          <h3>Candidate list</h3>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#9485a8" }}>
                <TableRow>
                  <TableCell />
                  <TableCell>CandidateName</TableCell>
                  <TableCell align="left">Position</TableCell>
                  <TableCell align="left">C.email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "Blue" }}>
                {cData.map((row) => (
                  <TableRow
                    style={{ backgroundColor: "#b8a9cc" }}
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.jobRole}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" style={{ backgroundColor: "#1e0342" }}>
          Allocate for interview
        </Button>
      </Grid>
    </Grid>
  );
};

export default Allocation;

