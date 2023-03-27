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
import { blue } from "@mui/material/colors";

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
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Change Role</DialogTitle>
      <ListItem sx={{ pt: 0 }}>
        {values.map((email) => (
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => handleListItemClick(email)}
              key={email}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
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
  };

  // Rendering the main component
  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Change Role
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
