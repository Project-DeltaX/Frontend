
import { TextField,Box,Button, Typography, Grid } from "@mui/material";
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";

import  { useState } from "react";


// import Pool from "../UserPool.js";
// import { useState } from 'react';
import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_JeGJ5dp7G',
  ClientId: '4b98f6bsasaj3e9bf8mva3ei6k'
};

const userPool = new CognitoUserPool(poolData);

const Register = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      // username: '',
      password: '',
      guestRole: ''
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const attributeList = [];
      const dataEmail = {
        Name: 'email',
        Value: formData.email
      };
      const dataFirstName = {
        Name: 'given_name',
        Value: formData.firstName
      };
      const dataLastName = {
        Name: 'family_name',
        Value: formData.lastName
      };
      const dataGuestRole = {
        Name: 'custom:guestRole',
        Value: formData.guestRole
      };
      const attributeEmail = new CognitoUserAttribute(dataEmail);
      const attributeFirstName = new CognitoUserAttribute(dataFirstName);
      const attributeLastName = new CognitoUserAttribute(dataLastName);
      const attributeGuestRole = new CognitoUserAttribute(dataGuestRole);
      attributeList.push(attributeEmail);
      attributeList.push(attributeFirstName);
      attributeList.push(attributeLastName);
      attributeList.push(attributeGuestRole);
  
      userPool.signUp(formData.email, formData.password, attributeList, null, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const cognitoUser = result.user;
        console.log('successful ');
      });
    };


    return(
        <div>
            
            <form onSubmit={(e) => handleSubmit(e)}>
                
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
                    <TextField sx={{input : {color:'#8C8B8B',bgcolor:'#fff', borderRadius:'20px',width:'215px',height:'15px'} }}  margin="normal" type={'text'}  variant="outlined" placeholder="First Name"  name="firstName" value={formData.firstname} onChange={handleInputChange}  />

                        </Grid>
                        <Grid item sm={6}>
                    <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',width:'215px',height:'15px'}}} margin="normal" type={'text'} variant="outlined" placeholder="Last Name" name="lastName" value={formData.lastname} onChange={handleInputChange}   />

                        </Grid>
                    </Grid>

                    <Grid container direction="column">
                        <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} margin="normal" type={'email'} variant="outlined" placeholder="E-mail Address" name="email" value={formData.email} onChange={handleInputChange} />
                    {/* <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} margin="normal" type={'text'} variant="outlined" placeholder="User Name"  name="username" value={formData.username} onChange={handleInputChange}/> */}
                    <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} margin="normal" type={'password'} variant="outlined" placeholder="Password" name="password"  value={formData.password} onChange={handleInputChange}/>

                    
                        <Grid container spacing={0.2} padding="10px">
                            <Grid item>
                             <Typography color="#E8E1FA" variant="h7" padding={0.2} fontFamily="Abril Fatface" >Guest Role:</Typography>
                            </Grid>

                            
                            <Grid item>
      <FormControl sx={{ m: 0.05, minWidth: 120,bgcolor:"#fff" ,borderRadius:"5px"}}>
      
        <Select
        
        value={formData.guestRole}
        name="guestRole"
        
        onChange={handleInputChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value=''>
            <em>-Select-</em>
          </MenuItem>
          <MenuItem value={"CommitteeMember"}>Committee Member</MenuItem>
          <MenuItem value={"PanelMember"}>Panel Member</MenuItem>
          <MenuItem value={"Intern"}>Intern</MenuItem>
        </Select>
        
      </FormControl>
     </Grid>

    </Grid>
 </Grid>
    </Grid>
    <Button   LinkComponent={Link}   type="submit" sx={{marginTop:3, borderRadius:4,bgcolor:"#EB5E57",color:"black",fontFamily:"Abril Fatface"}} variant="contained" color="warning"><b>SIGN UP</b></Button>

     </Box>
     </form>
    </div>
    )
}


export default Register;