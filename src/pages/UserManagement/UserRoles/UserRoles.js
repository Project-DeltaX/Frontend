
//User_Roles
import React from "react";

import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
// import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SimpleDialog from "../../../components/ChangeRoles";

// function createData(UserName, Email, Country, Posting, Status,Role,Edit) {
//   return {
//     UserName,
//     Email,
//     Country,
//     Posting,
//     Status,
//     Role,
//     Edit,
//
//     };
// }

// const rows = [
//   createData('Danuraha', 'danuraha@gmail.com', 'Sri Lanka', 'CM','', 'Committee Member',''),
//   createData('Mahilan', 'mahilan@gmail.com', 'India', 'pm', '','Committee Member',''),
//   createData('Thanusiyan', 'thanusiyan@gmail.com', 'France','th', '','Committee Member',''),
//   createData('Tharanika', 'tharanika@gmail.com', 'Sri Lanka','fg', '', 'Committee Member',''),
//   createData('Baakisan', 'bakkisan@gmail.com', 'India', 'bd', '','Committee Member',''),
//   createData('Thanosan', 'thanosan@gmail.com', 'Canada', 'gf', '','Committee Member',''),
//   createData('Jathiswarya', 'jathiswarya@gmail.com', 'Sri Lanka','hn', '', 'Committee Member',''),
//   createData('Vinuja', 'vinuja@gmail.com', 'Sri Lanka', 'er','' ,'Committee Member',''),
//   createData('Kaanuja', 'kaanuja@gmail.com', 'India', 'jh', '','Committee Member',''),
//   createData('Varaki', 'varaki@gmail.com', 'Sri Lanka', 'rt','', 'Committee Member',''),
//   createData('Liyonisha', 'liyonisha@gmail.com', 'Sri Lanka', 'ty','', 'Committee Member',''),
//   createData('Krishikan', 'krishikan@gmail.com', 'USA', 'sa','', 'Committee Member',''),
//   createData('Nishoban', 'nishoban@gmail.com', 'Sri Lanka', 'kj','', 'Committee Member',''),
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Username",
    numeric: false,
    disablePadding: true,
    label: "UserName",
  
  },
  {
    id: "Email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "Country",
    numeric: false,
    disablePadding: false,
    label: "Country ",
  },
  {
    id: "Posting",
    numeric: false,
    disablePadding: false,
    label: "Posting ",
  },
  {
    id: "Status",
    numeric: false,
    disablePadding: false,
    label: "Status ",
  },
  {
    id: "Role",
    numeric: false,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "Edit",
    numeric: false,
    disablePadding: false,
    label: "Edit",
   
  },
] ;

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
          style={{ color: "#27144B" }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
          style={{ color: "#27144B" }}
        >
          <b>User_Roles</b>
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function UserRole() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("Email");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://0z3js6g6eg.execute-api.us-east-1.amazonaws.com/getuser/addinguserdata"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.UserName);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, UserName) => {
    const selectedIndex = selected.indexOf(UserName);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, UserName);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (UserName) => selected.indexOf(UserName) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, bgcolor: "#E8E1FA" }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750}}               // border: '1px solid black'
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.UserName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.UserName)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.UserName}
                      selected={isItemSelected}
                      display={"flex"}
                      justifyContent={"center"}
                      
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                            
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        
                      >
                        {row.Username}
                      </TableCell>
                      <TableCell align="left">{row.Email}</TableCell>       
                       {/* sx={{ border: '1px solid red'}}  */}
                      <TableCell align="left" >{row.Country}</TableCell>
                      <TableCell align="left">{row.Posting}</TableCell>
                      <TableCell align="left">{row.Status}</TableCell>
                      <TableCell align="left" style={{ color: "#EB5E57" }} >{row.Role}</TableCell>
                      <SimpleDialog />
                      <TableCell align="left">{row.Edit}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
