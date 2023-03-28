import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

// This component renders an Autocomplete input field that allows the user to select multiple options from a list of permissions

export default function CheckboxesTags(props) {
  
  return (
    <Autocomplete
      // The Autocomplete component is set to allow multiple selections and disables the option to close the menu on selection

      multiple
      id="checkboxes-tags-demo"
      options={Permissions}
      disableCloseOnSelect
      // The function that returns the label for each option is set to return the 'number' property of each object in the options array

      getOptionLabel={(option) => option.number}
      // The renderOption prop is set to render a list item with a Checkbox and the option's number property

      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 20, position:'flex' }}
            // The Checkbox component's 'checked' prop is set to reflect whether the current option is selected or not

            checked={selected}
          />
          {option.number}
        </li>
      )}
      // The Autocomplete component's style is set to define its width and background color

      style={{ width: 280, backgroundColor: "white"  }}
      // The renderInput prop is set to render a TextField with a label and placeholder

      renderInput={(params) => (
        <TextField {...params} label="-Select Permissions-" placeholder="Add" />
      )}
    />
  );
}
// An array of permission objects, each containing a 'number' property that corresponds to a permission option in the Autocomplete

const Permissions = [
  { number: "Dashboard Access" },
  { number: "View and filter CV documents" },
  { number: "CV uploading Access" },
  { number: "Mail Access" },
  { number: "send emails" },
  { number: "Score sheet Access" },
  { number: "Progress Report Access" },
  {number: "Individual Progress Access"},
];
