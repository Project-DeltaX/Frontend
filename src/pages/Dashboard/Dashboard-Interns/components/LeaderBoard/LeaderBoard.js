import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect ,useState} from "react";

const columns = [
  {
    field: "Name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "Total",
    headerName: "Score",
    width: 10,
  }
];

const rows = [
  { id: 1, firstName: "Jon", score: 35 },
  { id: 2, firstName: "Cersei", score: 42 },
  { id: 3, firstName: "Jaime", score: 45 },
  { id: 4, firstName: "Arya", score: 16 },
];

export default function LeaderBoard(props) {
  const data = props.Data;

  const updatedRows = data.map((row, index) => {
    return { id: index + 1, ...row };
  });

  return (
    <Box
      sx={{
        height: 300,
        width: "90%",
        "& .super-app-theme--header": {
          backgroundColor: "rgba(255, 7, 0, 0.55)",
        },
        alignItems: "center",
        marginLeft: "100px",
      }}
    >
      <DataGrid
        rows={updatedRows}
        columns={columns}
        sx={{
          paddingX: "20px",
          marginLeft: "20px",
          boxShadow: 4,
          border: 1,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          }
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
          sorting: {
            sortModel: [{ field: "Total", sort: "desc" }],
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
}
