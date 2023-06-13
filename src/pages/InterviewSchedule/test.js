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
// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
// import Stack from "@mui/material/Stack";
// import axios from "axios";

// const SMCandidate = () => {
//   const [sData, setSData] = useState([]);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://71sozhk0d6.execute-api.us-east-1.amazonaws.com/st1/internlist"
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

//   const handleCheckboxChange = (event, candidate) => {
//     if (event.target.checked) {
//       setSelectedCandidates([...selectedCandidates, candidate]);
//     } else {
//       setSelectedCandidates(
//         selectedCandidates.filter((c) => c.candidateEmail !== candidate.candidateEmail)
//       );
//     }
//   };

//   const handleSendEmail = async () => {
//     try {
//       const recipients = selectedCandidates.map((candidate) => candidate.candidateEmail);

//       const response = await axios.post(
//         "https://9ippym1vkf.execute-api.us-east-1.amazonaws.com/new1/internmail", // Replace with your Lambda function endpoint
//         { recipients }
//       );

//       console.log(response.data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <Grid container spacing={2}>
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
//           <div className="Table">
//             <TableContainer
//               component={Paper}
//               style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//             >
//               <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                 <TableHead sx={{ backgroundColor: "#9485a8" }}>
//                   <TableRow>
//                     <TableCell />
//                     <TableCell>CandidateName</TableCell>
//                     <TableCell align="left">JobRole</TableCell>
//                     <TableCell align="left">CandidateEmail</TableCell>
//                     <TableCell align="left">Status</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody style={{ color: "Bluet" }}>
//                   {sData.map((row) => (
//                     <TableRow
//                       style={{ backgroundColor: "#b8a9cc" }}
//                       key={row.name}
//                       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={selectedCandidates.includes(row)}
//                           onChange={(event) => handleCheckboxChange(event, row)}
//                         />
//                       </TableCell>
//                       <TableCell component="th"
// scope="row">
// {row.candidateName}
// </TableCell>
// <TableCell align="left">{row.jobRole}</TableCell>
// <TableCell align="left">{row.candidateEmail}</TableCell>
// <TableCell align="left">{row.status}</TableCell>
// </TableRow>
// ))}
// </TableBody>
// </Table>
// </TableContainer>
// </div>
// </Grid>
// <Grid item xs={12}>
// <Stack direction="row" spacing={2}>
// <Button
// variant="contained"
// endIcon={<SendIcon />}
// style={{ backgroundColor: "#1e0342" }}
// onClick={handleSendEmail}
// disabled={selectedCandidates.length === 0}
// >
// Send Email
// </Button>
// </Stack>
// </Grid>
// </Grid>
// </Grid>
// );
// };

// export default SMCandidate;

const [recipientEmail, setRecipientEmail] = useState("");
const [emailSubject, setEmailSubject] = useState("");
const [emailBody, setEmailBody] = useState("");

const handleSendEmail = async (event) => {
  event.preventDefault();

  

  const ses = new AWS.SES({ apiVersion: "2010-12-01" });

  const emailParams = {
    Source: "perinparasat.20@uom.lk", // Update with your SES verified email address
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Message: {
      Subject: {
        Data: emailSubject,
      },
      Body: {
        Text: {
          Data: emailBody,
        },
      },
    },
  };

  try {
    const data = await ses.sendEmail(emailParams).promise();
    console.log("Email sent successfully", data);
    // Add any success message or further actions here
  } catch (error) {
    console.error("Error sending email", error);
    // Add error handling or display error message here
  }
};

return (
  <form onSubmit={handleSendEmail}>
    <label>
      Recipient Email:
      <input
        type="email"
        value={recipientEmail}
        onChange={(e) => setRecipientEmail(e.target.value)}
        required
      />
    </label>
    <label>
      Subject:
      <input
        type="text"
        value={emailSubject}
        onChange={(e) => setEmailSubject(e.target.value)}
        required
      />
    </label>
    <label>
      Body:
      <textarea
        value={emailBody}
        onChange={(e) => setEmailBody(e.target.value)}
        required
      />
    </label>
    <button type="submit">Send Email</button>
  </form>
);