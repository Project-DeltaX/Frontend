// Importing necessary packages from React and Material UI libraries
import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { ListItem } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import { blue, purple } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";

// An array containing different roles
const values = ["committee member", "Panel member", "Intern"];

// A function to display a dialog box containing the list of roles
function SimpleDialog(props) {
  // Destructuring the props object
  const { onClose, selectedValue, open } = props;

  // A function to close the dialog box
  const handleClose = () => {
    onClose(selectedValue);
  };

  // A function to handle click events on the list items
  const handleListItemClick = (value) => {
    onClose(value);
  };

  // Rendering the dialog box with a list of roles
  return (
    <Dialog onClose={handleClose} open={open} >
      <DialogTitle sx={{ color:'#27144B' }}>Change Role</DialogTitle>
      <ListItem sx={{ pt: 0 }}>
        {values.map((role) => (
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => handleListItemClick(role)}
              key={role}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#E8E1FA', color: '#27144B' }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={role} />
            </ListItemButton>
          </ListItem>
        ))}
      </ListItem>
    </Dialog>
  );
}

// Defining the propTypes for the SimpleDialog component
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

// The main component that renders the button and the dialog box
export default function SimpleDialogDemo() {
  // State variables for controlling the dialog box and the selected role
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(values[1]);

  // A function to open the dialog box
  const handleClickOpen = () => {
    setOpen(true);
  };

  // A function to close the dialog box and set the selected role
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);


    // Retrieve the authorization token from the local storage
  const authorizationToken = localStorage.getItem('authorizationToken');

    fetch('https://hxbbw4n3pd.execute-api.us-east-1.amazonaws.com/dev/changeuserrole', {
    method: 'POST',
    // mode:'no-cors',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ${authorizationToken}'
    },
    body: JSON.stringify({ role: value })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Role updated successfully:', data);
    })
    .catch((error) => {
      console.error('Error updating role:', error);
    });
  };



  

  // Rendering the main component
  return (
    <div>
      {/* <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography> */}
      {/* <br /> */}
      {/* <Button variant="outlined" onClick={handleClickOpen}  sx={{ backgroundColor: '#27144B',color:"#E8E1FA" }}>
        Change Role
      </Button> */}
      <EditIcon  onClick={handleClickOpen} sx={{cursor:'pointer',marginLeft:'45px'}}/>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
