
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags(props) {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={Permissions}
      disableCloseOnSelect
      getOptionLabel={(option) => option.number}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 15 }}
            checked={selected}
          />
          {option.number}
        </li>
      )}
      style={{ width: 200 , backgroundColor: "white"}}
      renderInput={(params) => (
        <TextField {...params} label="-Select Permissions-" placeholder="Add" />
      )}
    />
  );
}

const Permissions = [
  { number: 'Access the dashboard' },
    { number: 'Add users' },
    { number: 'Access the portal' },
    { number: 'schedule the meetings'},
    { number: 'send emails' },
    { number: "evaluation" },
    { number: 'update the scoresheets'},
];