import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect ,useState} from "react";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "firstName",
    headerName: "First name",
    width: 100,
  },
  {
    field: "score",
    headerName: "Score",
    width: 20,
  },
];

const rows = [
  { id: 1, firstName: "Jon", score: 35 },
  { id: 2, firstName: "Cersei", score: 42 },
  { id: 3, firstName: "Jaime", score: 45 },
  { id: 4, firstName: "Arya", score: 16 },
];

export default function LeaderBoard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://guxgo6me31.execute-api.us-east-1.amazonaws.com/dev"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);

  

  return (
    <Box
      sx={{
        height: 400,
        width: "80%",
        "& .super-app-theme--header": {
          backgroundColor: "rgba(255, 7, 0, 0.55)",
        },
        alignItems:'center',
        marginLeft:"100px"
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
}
