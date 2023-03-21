import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { DateRangePickerDay as MuiDateRangePickerDay } from '@mui/x-date-pickers-pro/DateRangePickerDay';
import { red } from "@mui/material/colors";



import './Interview.css';




function createData(CandidateName,CandidateID,Age,Email,status) {
  return { CandidateName,CandidateID,Age,Email,status };
}

const rows = [
  createData("Tharanika Perinparasa", 1, 23, "vk123@gmail.com","Goto Interview"),
  createData("Thanushiyan Sivapalasundaram", 2, 23, "vk123@gmail.com","Goto Interview"),
  createData("Danuraha Thevanayagam", 3, 23, "vk123@gmail.com","Goto Interview"),
  createData("Mahilan Shanmuganathan", 4, 23, "vk123@gmail.com","Goto Interview"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

const InterviewPanel = () => {
  const [value, setValue] = React.useState([null, null]);
  const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
    return <DateRangePickerDay {...dateRangePickerDayProps} />;
  };
  const DateRangePickerDay = styled(MuiDateRangePickerDay)(
    ({
      theme,
      isHighlighting,
      isStartOfHighlighting,
      isEndOfHighlighting,
      outsideCurrentMonth,
    }) => ({
      ...(!outsideCurrentMonth &&
        isHighlighting && {
          borderRadius: 0,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
      ...(isStartOfHighlighting && {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
      }),
      ...(isEndOfHighlighting && {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
      }),
    }),
  );
  {
    
  
   
  }
  

  return (
    <box>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        label="date range"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderDay={renderWeekPickerDay}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
      <div className="Table">
     
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>CandidateName</TableCell>
                <TableCell align="left">CandidateID</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left"> <span>Status</span>
  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.CandidateName}
                  </TableCell>
                  <TableCell align="left">{row.CandidateID}</TableCell>
                  <TableCell align="left">{row.Age}</TableCell>
                  <TableCell align="left">{row.Email}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  ]
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </box>
      
  );
}
  
  export default InterviewPanel;
  
  