// import React, { useState, useEffect } from "react";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
// import Stack from "@mui/material/Stack";
// import IMCandidate from "./IMCandidate";
// import CMPanel from "./CMPanel";
// import IMPanel from "./IMpanel";
// import SMCandidate from "./SMCandidate";

// const Mailing = () => {
//   // A functional component named "Mailing" is defined here.
//   const [mail, setMail] = React.useState(""); // Two state variables "mail" and "setMail" are defined using the "useState" hook.
//   const [pData, setPData] = useState([]); // Another state variable "pData" and "setPData" are defined using the "useState" hook.

//   const handleChange = (event) => {
//     // A function named "handleChange" is defined here which updates the "mail" state variable whenever the user types something in the select dropdown.
//     setMail(event.target.value);
//   };

  
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={8}>
//         <FormControl
//           fullWidth
//           sx={{
//             "& label": {
//               color: "#1e0342", // change text color
//               fontWeight: "bold",
//             },
//           }}
//         >
//           <InputLabel id="demo-simple-select-label">Mail</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={mail}
//             label="Mail"
//             onChange={handleChange}
//           >
//             <MenuItem value={"InterviewMail to Candidates"}>InterviewMail to Candidates</MenuItem>
//             <MenuItem value={"InterviewMail to Panel member"}>InterviewMail to PanelMember</MenuItem>
//             <MenuItem value={"SelectedMail to Candidates"}>SelectedMail to Candidates</MenuItem>
//             <MenuItem value={"ConfirmationMail to panel member"}>SelectedMail to Candidates</MenuItem>
//             </Select>
           
           
//             {selectedOption === "InterviewMail to Candidates" ? (
//               <IMCandidate />
//             ) : selectedOption === "InterviewMail to PanelMember" ? (
//               <IMPanel />
//               ) : selectedOption === "SelectedMail to Candidates" ? (
//                 <SMCandidate />
//                 ) : selectedOption === "ConfirmationMail to PanelMembers" ? (
//                   <CMPanel />
//             ): (
//               "Select one"
//             )}
//           </FormControl>
           
      
//       </Grid>
//       <Grid item xs={4}>
//         <Stack direction="row" spacing={2}>
//           <Button
//             variant="contained"
//             endIcon={<SendIcon />}
//             style={{ backgroundColor: "#1e0342" }}
//           >
//             Send mail
//           </Button>
//         </Stack>
//       </Grid>
//     </Grid>
//   );
// };

// export default Mailing;

import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import IMCandidate from "./IMCandidate";
import CMPanel from "./CMPanel";
import IMPanel from "./IMpanel";
import SMCandidate from "./SMCandidate";

const Mailing = () => {
  const [mail, setMail] = React.useState("");
  const [pData, setPData] = useState([]);

  const handleChange = (event) => {
    setMail(event.target.value);
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={8}>
        <FormControl
          fullWidth
          sx={{
            "& label": {
              color: "#1e0342",
              fontWeight: "bold",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Mail</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mail}
            label="Mail"
            onChange={handleChange}
          >
            <MenuItem value={"InterviewMail to Candidates"}>InterviewMail to Candidates</MenuItem>
            <MenuItem value={"InterviewMail to PanelMember"}>InterviewMail to PanelMember</MenuItem>
            <MenuItem value={"SelectedMail to Candidates"}>SelectedMail to Candidates</MenuItem>
            <MenuItem value={"ConfirmationMail to PanelMembers"}>ConfirmationMail to PanelMembers</MenuItem>
          </Select>
           
          {mail === "InterviewMail to Candidates" ? (
            <IMCandidate />
          ) : mail === "InterviewMail to PanelMember" ? (
            <IMPanel />
          ) : mail === "SelectedMail to Candidates" ? (
            <SMCandidate />
          ) : mail === "ConfirmationMail to PanelMembers" ? (
            <CMPanel />
          ) : (
            ""
          )}
        </FormControl>
           
      </Grid>
      
    </Grid>
  );
};

export default Mailing;
