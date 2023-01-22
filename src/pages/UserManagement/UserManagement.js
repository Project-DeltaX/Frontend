import { Grid } from "@mui/material";
// import React from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  
const UserManagement = () => {
    return (  
        <div>
            <Grid>
<Typography><h2><b>User Management</b></h2></Typography>
            </Grid>

            
            <Grid>
                <Grid>
                     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
         Committee Members
        </Typography>
       
        <Typography variant="body2">
          15
        </Typography>
      </CardContent>
      
    </Card>
                </Grid>

                <Grid>
                <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
         Committee Members
        </Typography>
       
        <Typography variant="body2">
          15
        </Typography>
      </CardContent>
      
    </Card>   
                </Grid>

                <Grid>
                <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
         Committee Members
        </Typography>
       
        <Typography variant="body2">
          15
        </Typography>
      </CardContent>
      
    </Card>
                </Grid>
           

            </Grid>
            <Grid>

            </Grid>
        </div>
    );
}
 
export default UserManagement;