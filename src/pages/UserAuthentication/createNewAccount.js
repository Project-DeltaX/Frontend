import { TextField,Box,Button, Typography,Link, Grid } from "@mui/material";

import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CreateNewAccount = ()  => {
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
      setRole(event.target.value);
    };
    return(
        <div>
            
            <form>
                
                <Box 
                display="flex" 
                flexDirection={"column"}
                maxWidth={500} 
                alignItems="center" 
                justifyContent={'center'}
                margin="auto"
                marginTop={5}
                padding={5}
                borderRadius={10}
                boxShadow={'5px 5px 10px #ccc'}
                bgcolor="#27144B"

                sx={{
                    background:' radial-gradient(circle,#3A1C92,#321873,#2C165D,#27144B)',
            }}
                >
                    <Grid container direction="column">

                        <Grid container direction="column">
                             <Typography color="#E8E1FA" variant="h4" padding={2} textAlign='center' fontFamily="Abril Fatface">Create New Account</Typography>
                    <Typography color="#E8E1FA" variant="h7" padding={0.2} textAlign='center' fontFamily="Abril Fatface">Already have an Account?<Link href="#">Login</Link></Typography>
                        </Grid>
                   

                    <Grid container spacing={2}>
                        <Grid item sm={6}>
                    <TextField sx={{input : {color:'#8C8B8B',bgcolor:'#fff', borderRadius:'20px',width:'215px',height:'15px'} }}  margin="normal" type={'text'}  variant="outlined" placeholder="First Name"/>

                        </Grid>
                        <Grid item sm={6}>
                    <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',width:'215px',height:'15px'}}} margin="normal" type={'text'} variant="outlined" placeholder="Last Name" />

                        </Grid>
                    </Grid>

                    <Grid container direction="column">
                        <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} margin="normal" type={'email'} variant="outlined" placeholder="E-mail Address" />
                    <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} margin="normal" type={'text'} variant="outlined" placeholder="User Name" />
                    <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} margin="normal" type={'password'} variant="outlined" placeholder="Password" />

                    
                        <Grid container spacing={0.2} padding="10px">
                            <Grid item>
                             <Typography color="#E8E1FA" variant="h7" padding={0.2} fontFamily="Abril Fatface" >Guest Role:</Typography>
                            </Grid>
                            <Grid item>
      <FormControl sx={{ m: 0.05, minWidth: 120,bgcolor:"#fff" ,borderRadius:"5px"}}>
        {/* <InputLabel id="demo-simple-select-helper-label"></InputLabel> */}
        <Select
        //   labelId="demo-simple-select-helper-label"
        //   id="demo-simple-select-helper"
          value={role}
    
          
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value=''>
            <em>-Select-</em>
          </MenuItem>
          <MenuItem value={10}>Committee Member</MenuItem>
          <MenuItem value={20}>Panel Member</MenuItem>
          <MenuItem value={30}>Intern</MenuItem>
        </Select>
        
      </FormControl>
     </Grid>

    </Grid>
 </Grid>
    </Grid>
    <Button sx={{marginTop:3, borderRadius:4,bgcolor:"#EB5E57",color:"black",fontFamily:"Abril Fatface"}} variant="contained" color="warning"><b>SIGN UP</b></Button>

     </Box>
     </form>
    </div>
    )
}


export default CreateNewAccount;