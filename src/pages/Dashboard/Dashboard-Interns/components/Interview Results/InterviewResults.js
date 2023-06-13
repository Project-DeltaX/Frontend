import React, { useState, useEffect } from "react";
import axios from "axios";

//Table Components
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

//Chart
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  width: "30px",
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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    av: 2000,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const PersonData = (props) => {
  return (
    <BarChart
      width={400}
      height={300}
      barSize={20}
      data={props.Data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      <Bar dataKey="av" stackId="a" fill="#82ca0" />
    </BarChart>
  );
};

const InterviewResults = () => {
  const [allScoreData, setAllScoreData] = useState([]);
  const [candidate, setCandidate] = useState("");
  const [individualScore, setIndividualScore] = useState([]);

  useEffect(() => {
    const fetchScoreData = async () => {
      try {
        const response = await axios.get(
          "https://guxgo6me31.execute-api.us-east-1.amazonaws.com/dev/allscoredetail"
        );

        const jsonData = response.data;
        setAllScoreData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchScoreData();
  }, []);



      const ShowScore = async () => {
        try {
          const response = await axios.get(
            "https://guxgo6me31.execute-api.us-east-1.amazonaws.com/dev/individualscore?email=" +
              candidate
          );

          const jsonData = response.data;
          setIndividualScore(jsonData);
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <Grid
      container
      spacing={1}
      direction={"row"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid item md={7}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Total</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allScoreData.map((row, index) => (
                    <StyledTableRow
                      key={index}
                      sx={{ cursor: "pointer" }}
                      onClick={(e) => {
                        setCandidate(allScoreData[index].email);
                        ShowScore();
                      }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.Name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.Total}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={5} sx={{ marginRight: "0px" }}>
        <PersonData Data={individualScore} />
      </Grid>
    </Grid>
  );
};

export default InterviewResults;
