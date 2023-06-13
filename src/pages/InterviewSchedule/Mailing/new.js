// import React, { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Checkbox,
//   Stack,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import axios from "axios";
// import { TextField, Grid } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import { Dayjs } from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';


// const Schedule = () => {
//   const [sData, setSData] = useState([]);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);
//   const [mode, setMode] = useState("");
//   const [value, setValue] = React.useState("");
    
  
//     const handleModeChange = (event) => {
//       setMode(event.target.value);
//     };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://nxhk699z3m.execute-api.us-east-1.amazonaws.com/stage1/schedule"
//       );
//       const jsonData = await response.json();
//       setSData(jsonData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCheckboxChange = (event, candidateEmail) => {
//     const checked = event.target.checked;

//     if (checked) {
//       setSelectedCandidates((prevSelected) => [...prevSelected, candidateEmail]);
//     } else {
//       setSelectedCandidates((prevSelected) =>
//         prevSelected.filter((item) => item !== candidateEmail)
//       );
//     }
//   };

//   const handleEditButtonClick = async (row) => {
//     // Handle edit logic for the current candidate
//     const updatedData = await showDialogAndGetData(row);
//     if (updatedData) {
//       try {
//         await axios.put(
//           "https://nxhk699z3m.execute-api.us-east-1.amazonaws.com/stage1/schedule",
//           updatedData
//         );
//         fetchData();
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const handleDeleteButtonClick = async () => {
//     // Handle delete logic for the selected candidates
//     try {
//       const promises = selectedCandidates.map((candidateEmail) =>
//         axios.delete(
//           "https://nxhk699z3m.execute-api.us-east-1.amazonaws.com/stage1/schedule",
//           { data: { candidateEmail } }
//         )
//       );
//       await Promise.all(promises);
//       fetchData();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const showDialogAndGetData = (row) => {
//     // Implement your logic to show a dialog or form for data input and return the updated data
//     // Example:
//     const updatedTime = prompt("Enter updated time:", row.Time);
//     const updatedVenue = prompt("Enter updated venue:", row.Venue);
//     if (updatedTime !== null && updatedVenue !== null) {
//       return {
//         candidateEmail: row.candidateEmail,
//         interviewtime: updatedTime,
//         venue: updatedVenue,
//       };
//     }
//     return null;
//   };


//   const handleUpdateClick = async () => {
//     if (selectedData.length !== 1) {
//       // Only allow updating a single selected data row
//       return;
//     }

//     const updatedData = {
//       // Construct the updated data object based on your form or input values
//       id: selectedData[0].id,
//       time: selectedTime, // Example: value from time input field
//       venue: selectedVenue, // Example: value from venue input field
//     };

//     try {
//       await axios.post("your-api-endpoint", updatedData);
//        console.log("Data updated successfully");
//     } catch (error) {
//             console.error("Error updating data:", error);
//     }
//   };


//   const getStatusColor = (status) => {
//     if (status === "finalized") {
//       return "green";
//     }
//     return "red";
//   };

//   return (
//     <Grid container spacing={2}>
      
//     <Grid item xs={12} spacing={4}>
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//     <TimePicker
// label="Basic example"
// value={value}
// onChange={(newValue) => {
//   // Validate the hour and minute values
//   const hour = newValue?.hour();
//   const minute = newValue?.minute();
//   if (hour >= 0 && hour <= 12 && minute >= 0 && minute <= 60) {
//     setValue(newValue);
//   } else {
//     // Handle invalid time
//     console.log("Invalid time selected");
//   }
// }}
// renderInput={(params) => <TextField {...params} />}
// />
//   </LocalizationProvider>
//     </Grid>

//     <Grid item xs={8}>
//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">Interview Mode</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={mode}
//             label="Interview Mode"
//             onChange={handleModeChange}
//           >
//             <MenuItem value="On site">On site-1st floor</MenuItem>
//             <MenuItem value="Online">Online</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>


    
//       <Grid item xs={12} spacing={4}>
//         <TableContainer
//           component={Paper}
//           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead sx={{ backgroundColor: "#9485a8" }}>
//               <TableRow>
//                 <TableCell align="left">Select</TableCell>
//                 <TableCell align="left">Candidate</TableCell>
//                 <TableCell align="left">PanelMember</TableCell>
//                 <TableCell
// align="left">InterviewDate</TableCell>
// <TableCell align="left">EmailPanel</TableCell>
// <TableCell align="left">CandidateEmail</TableCell>
// <TableCell align="left">Venue</TableCell>
// <TableCell align="left">Time</TableCell>
// <TableCell align="left">Status</TableCell>
// <TableCell align="left">Edit/Delete</TableCell>
// </TableRow>
// </TableHead>
// <TableBody style={{ color: "white" }}>
// {sData.map((row) => (
// <TableRow
//   style={{ backgroundColor: "#b8a9cc" }}
//   key={row.candidateEmail}
//   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// >
//   <TableCell align="left">
//     <Checkbox
//       checked={selectedCandidates.includes(row.candidateEmail)}
//       onChange={(event) =>
//         handleCheckboxChange(event, row.candidateEmail)
//       }
//     />
//   </TableCell>
//   <TableCell align="left">{row.candidateName}</TableCell>
//   <TableCell align="left">{row.panelMemberName}</TableCell>
//   <TableCell align="left">{row.interviewdate}</TableCell>
//   <TableCell align="left">{row.panelMemberEmail}</TableCell>
//   <TableCell align="left">{row.candidateEmail}</TableCell>
//   <TableCell align="left">{row.venue}</TableCell>
//   <TableCell align="left">{row.interviewtime}</TableCell>

//   <TableCell align="left">
//     <span style={{ color: getStatusColor(row.status) }}>
//       {row.status}
//     </span>
//   </TableCell>
//   <TableCell align="left">
//     <Stack direction="row" spacing={1}>
//       <Button
//         variant="contained"
//         startIcon={<EditIcon />}
//         style={{
//           backgroundColor: "#1e0342",
//           color: "white",
//         }}
//         onClick={() => handleEditButtonClick(row)}
//       >
//         Edit
//       </Button>
//       <Button
//         variant="outlined"
//         startIcon={<DeleteIcon />}
//         style={{
//           backgroundColor: "#1e0342",
//           color: "white",
//         }}
//         onClick={() => handleDeleteButtonClick(row)}
//       >
//         Delete
//       </Button>
//     </Stack>
//   </TableCell>
// </TableRow>
// ))}
// </TableBody>
// </Table>
// </TableContainer>
// </Grid>
// <Grid item xs={12} spacing={4}>
// <Stack direction="row" spacing={2}>
// <Button
// variant="outlined"
// startIcon={<DeleteIcon />}
// style={{ backgroundColor: "#1e0342", color: "white" }}
// onClick={handleDeleteButtonClick}
// >
// Delete
// </Button>
// <Button
// variant="contained"
// endIcon={<EditIcon />}
// style={{ backgroundColor: "#1e0342", color: "white" }}
// onClick={handleEditButtonClick}
// >
// Edit
// </Button>
// </Stack>
// </Grid>
// </Grid>
// );
// };

// export default Schedule;

// import React, { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Checkbox,
//   Stack,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import { TextField, Grid } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import { Dayjs } from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';


// const Schedule = () => {
//   const [sData, setSData] = useState([]);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);

// const [mode, setMode] = useState("");
// const [value, setValue] = React.useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://nxhk699z3m.execute-api.us-east-1.amazonaws.com/stage1/schedule"
//         );
//         const jsonData = await response.json();
//         setSData(jsonData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleModeChange = (event) => {
//     setMode(event.target.value);
//   };

//   const handleCheckboxChange = (event, candidateEmail) => {
//     const checked = event.target.checked;

//     if (checked) {
//       setSelectedCandidates((prevSelected) => [...prevSelected, candidateEmail]);
//     } else {
//       setSelectedCandidates((prevSelected) =>
//         prevSelected.filter((item) => item !== candidateEmail)
//       );
//     }
//   };

//   const handleEditButtonClick = async () => {
//     // Update the selected candidate's interview time and venue
//     const candidateEmail = selectedCandidates[0];
//     const candidate = sData.find((item) => item.candidateEmail === candidateEmail);
//     const updatedCandidate = { ...candidate, interviewTime: value, venue: mode };





//   const handleEditButtonClick = () => {
//     // Handle edit logic for selected candidates
//     console.log("Edit Button Clicked");
//   };

//   const handleDeleteButtonClick = () => {
//     // Handle delete logic for selected candidates
//     console.log("Delete Button Clicked");
//   };

//   const getStatusColor = (status) => {
//     if (status === "finalized") {
//       return "green";
//     }
//     return "red";
//   };

//   return (
//     <Grid container spacing={2}>

// <Grid item xs={12} spacing={4}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <TimePicker
//   label="Basic example"
//   value={value}
//   onChange={(newValue) => {
//     // Validate the hour and minute values
//     const hour = newValue?.hour();
//     const minute = newValue?.minute();
//     if (hour >= 0 && hour <= 12 && minute >= 0 && minute <= 60) {
//       setValue(newValue);
//     } else {
//       // Handle invalid time
//       console.log("Invalid time selected");
//     }
//   }}
//   renderInput={(params) => <TextField {...params} />}
// />
//     </LocalizationProvider>
//       </Grid>


//       <Grid item xs={8}>
//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">Interview Mode</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={mode}
//             label="Interview Mode"
//             onChange={handleModeChange}
//           >
//             <MenuItem value="On site">On site-1st floor</MenuItem>
//             <MenuItem value="Online">Online</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>

//       <Grid item xs={12} spacing={4}>
//         <TableContainer
//           component={Paper}
//           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead sx={{ backgroundColor: "#9485a8" }}>
//               <TableRow>
//                 <TableCell align="left">Select</TableCell>
//                 <TableCell align="left">Candidate</TableCell>
//                 <TableCell align="left">PanelMember</TableCell>
//                 <TableCell align="left">InterviewDate</TableCell>
//                 <TableCell align="left">EmailPanel</TableCell>
//                 <TableCell align="left">CandidateEmail</TableCell>
//                 <TableCell align="left">Venue</TableCell>
//                 <TableCell align="left">Time</TableCell>
//                 <TableCell align="left">Status</TableCell>
//                 <TableCell align="left">Edit/Delete</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody style={{ color: "white" }}>
//               {sData.map((row) => (
//                 <TableRow
//                   style={{ backgroundColor: "#b8a9cc" }}
//                   key={row.name}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell align="left">
//                     <Checkbox
//                       checked={selectedCandidates.includes(row.candidateEmail)}
//                       onChange={(event) =>
//                         handleCheckboxChange(event, row.candidateEmail)
//                       }
//                     />
//                   </TableCell>
//                   <TableCell align="left">{row.candidateName}</TableCell>
//                   <TableCell align="left">{row.panelMemberName}</TableCell>
//                   <TableCell align="left">{row.date}</TableCell>
//                   <TableCell align="left">{row.panelMemberEmail}</TableCell>
                 

// <TableCell align="left">{row.candidateEmail}</TableCell>
// <TableCell align="left">{row.Venue}</TableCell>
// <TableCell align="left">{row.Time}</TableCell>
// <TableCell align="left">
// <Button
// variant="outlined"
// style={{
// backgroundColor: getStatusColor(row.status),
// color: "white",
// }}
// disabled={row.status === "finalized"}
// onClick={() => {
// if (row.status !== "finalized") {
// // Update the status to "finalized" when clicked
// const updatedData = sData.map((item) =>
// item === row ? { ...item, status: "finalized" } : item
// );
// setSData(updatedData);
// }
// }}
// >
// {row.status}
// </Button>
// </TableCell>
// <TableCell align="left">
// <Stack direction="row" spacing={1}>
// <Button
// variant="contained"
// startIcon={<EditIcon />}
// style={{
// backgroundColor: "#1e0342",
// color: "white",
// }}
// onClick={() => {
// // Handle edit logic for the current candidate
// console.log("Edit Button Clicked", row);
// }}
// >
// Edit
// </Button>
// <Button
// variant="outlined"
// startIcon={<DeleteIcon />}
// style={{
// backgroundColor: "#1e0342",
// color: "white",
// }}
// onClick={() => {
// // Handle delete logic for the current candidate
// console.log("Delete Button Clicked", row);
// }}
// >
// Delete
// </Button>
// </Stack>
// </TableCell>
// </TableRow>
// ))}
// </TableBody>
// </Table>
// </TableContainer>
// </Grid>
// <Grid item xs={12} spacing={4}>
// <Stack direction="row" spacing={2}>
// <Button
// variant="outlined"
// startIcon={<DeleteIcon />}
// style={{ backgroundColor: "#1e0342", color: "white" }}
// onClick={handleDeleteButtonClick}
// >
// Delete
// </Button>
// <Button
// variant="contained"
// endIcon={<EditIcon />}
// style={{ backgroundColor: "#1e0342", color: "white" }}
// onClick={handleEditButtonClick}
// >
// Edit
// </Button>
// </Stack>
// </Grid>
// </Grid>
// );
// };

// export default Schedule;


import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Checkbox,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TextField, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import axios from "axios";
const Schedule = () => {
  const [sData, setSData] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [mode, setMode] = useState("");
  const [value, setValue] = useState("");
  const [index,setIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nxhk699z3m.execute-api.us-east-1.amazonaws.com/stage1/schedule"
        );
        const jsonData = await response.json();
        setSData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(sData);

  // const candidateEmail = selectedCandidates[0];
    // const candidate = sData.find((item) => item.candidateEmail === candidateEmail);
    

  const handleModeChange = (event) => {
    setMode(event.target.value);
    // const updatedCandidate = { ...sData[index],  venue: mode };
    sData[index].Venue = mode;
    

  };

  const handleCheckboxChange = (event, candidateEmail,index) => {
    const checked = event.target.checked;
    setIndex(index);

    if (checked) {
      setSelectedCandidates([candidateEmail]);
    } else {
      setSelectedCandidates([]);
    }
  };

  const handleEditButtonClick = async () => {
    // Update the selected candidate's interview time and venue
    

    try {
      // const response = await fetch(
      //   "https://0q1r71xda3.execute-api.us-east-1.amazonaws.com/stage35/schedulef",
      //   {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(updatedCandidate),
      //   }
      // );

       const response = await axios.post(
        "https://0q1r71xda3.execute-api.us-east-1.amazonaws.com/stage35/schedulef",sData[index]
       );
      console.log(sData[index])

      if (response.ok) {
        // Update the state with the updated candidate
        // const updatedData = sData.map((item) =>
        //   item.candidateEmail === candidateEmail ? updatedCandidate : item
        // );
        // setSData(updatedData);
        // setSelectedCandidates([]);
        setValue("");
        setMode("");
        setIndex(null)
      } else {
        console.error("Failed to update candidate data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteButtonClick = () => {
    // Handle delete logic for selected candidates
    console.log("Delete Button Clicked");
  };

  const getStatusColor = (status) => {
    if (status === "finalized") {
      return "green";
    }
    return "red";
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              // Validate the hour and minute values
              const hour = newValue?.hour();
              const minute = newValue?.minute();
              if (hour >= 0 && hour <= 12 && minute >= 0 && minute <= 60) {
                setValue(newValue);
                sData[index].interviewtime = newValue;
              } else {
                // Handle invalid time
                console.log("Invalid time selected");
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>

      <Grid item xs={8}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Interview Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mode}
            label="Interview Mode"
            onChange={handleModeChange}
          >
            <MenuItem value="On site">On site-1st floor</MenuItem>
            <MenuItem value="Online">Online</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} spacing={4}>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#9485a8" }}>
              <TableRow>
                <TableCell align="left">Select</TableCell>
                <TableCell align="left">Candidate</TableCell>
                <TableCell align="left">PanelMember</TableCell>
                <TableCell align="left">InterviewDate</TableCell>
                <TableCell align="left">EmailPanel</TableCell>
                <TableCell align="left">CandidateEmail</TableCell>
                <TableCell align="left">Venue</TableCell>
                <TableCell align="left">Time</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {sData.map((row,index) => (
                <TableRow
                  style={{ backgroundColor: "#b8a9cc" }}
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Checkbox
                      checked={selectedCandidates.includes(row.candidateEmail)}
                      onChange={(event) =>
                        handleCheckboxChange(event, row.candidateEmail,index)
                      }
                    />
                  </TableCell>
                  <TableCell align="left">{row.candidateName}</TableCell>
                  <TableCell align="left">{row.panelMemberName}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.panelMemberEmail}</TableCell>
                  <TableCell align="left">{row.candidateEmail}</TableCell>
                  <TableCell align="left">{row.Venue}</TableCell>
                  <TableCell align="left">{row.interviewtime}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="outlined"
                      style={{
                        backgroundColor: getStatusColor(row.status),
                        color: "white",
                      }}
                      disabled={row.status === "finalized"}
                      onClick={() => {
                        if (row.status !== "finalized") {
                          // Update the status to "finalized" when clicked
                          const updatedData = sData.map((item) =>
                            item === row
                              ? { ...item, status: "finalized" }
                              : item
                          );
                          setSData(updatedData);
                        }
                      }}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                  <TableCell align="left" >
                    <Stack direction={'row'} spacing={1}>
                     
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        style={{
                          backgroundColor: "#1e0342",
                          color: "white",
                        }}
                        onClick={() => {
                          // Handle delete logic for the current candidate
                          handleDeleteButtonClick(row.candidateEmail);
                        }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} spacing={4}>
        <Stack direction="row" spacing={2}>
          
          
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Schedule;

