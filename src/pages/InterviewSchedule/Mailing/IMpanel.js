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
import axios from "axios";
const IMpanel = () => {
  const [ipData, setIPData] = useState([]);
  const [selectedPanel, setSelectedPanel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://53mxccqwpl.execute-api.us-east-1.amazonaws.com/stage123/panelschedule"
        );
        const jsonData = await response.json();
        setIPData(jsonData);
        console.log(ipData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  const handleCheckboxChange = (event, panel) => {
    if (event.target.checked) {
      setSelectedPanel([...selectedPanel, panel]);
    } else {
      setSelectedPanel(
        selectedPanel.filter((c) => c.panelMemberEmail !== panel.panelMemberEmail)
      );
    }
  };

  const handleSendEmail = async () => {


    const recipt = selectedPanel.map((panel) => panel.PanelMemberEmail);
    const finalP = {body : recipt};
    // console.log(recipients)
    console.log(finalP)
    try {

      const response = await axios.post(
        "https://9ippym1vkf.execute-api.us-east-1.amazonaws.com", // Replace with your Lambda function endpoint
        finalP 
      );
      // console.log(recipients)
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
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
                    <TableCell>PanelMemberEmail</TableCell>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">Time</TableCell>
                    <TableCell align="left">Venue</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ color: "Bluet" }}>
                  {ipData.map((row) => (
                    <TableRow
                      style={{ backgroundColor: "#b8a9cc" }}
                      key={row.panelMemberEmail}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell padding="checkbox">
                       
                        <Checkbox
                          checked={selectedPanel.includes(row)}
                          onChange={(event) => handleCheckboxChange(event, row)}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.panelMemberEmail}
                      </TableCell>
                      <TableCell align="left">{row.interviewdate}</TableCell>
                      <TableCell align
                        ="left">{row.interviewtime}</TableCell>
                        <TableCell align="left">{row.venue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
          <Grid>
            </Grid>

          </Grid>
          <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ backgroundColor: "#1e0342" }}
            onClick={handleSendEmail}
            disabled={selectedPanel.length === 0}
            >Send Email
          </Button>
        </Stack>
      </Grid>
    
        </Grid>
     
    );
  };
  
  export default IMpanel;
  


