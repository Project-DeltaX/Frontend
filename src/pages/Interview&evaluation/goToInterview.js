import * as React from 'react';
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function ContainedButtons() {
    return (
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Stack>
    );
  }