import { TextField,Box,Button, Typography, Grid } from "@mui/material";
import pass from "../../Images/ForgotPassword.svg";

import React from "react";
import { Link } from "react-router-dom";


const ForgotPassword = ()  => {
   
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
                    <img src={pass} width='250px'/>

                    <Grid container direction="column">

                     
                            
                             <Typography color="#E8E1FA" variant="h5" padding={4} textAlign='center' fontFamily="Abril Fatface">Forgot Password</Typography>
                       
                   
                    <Grid container direction="column" padding="30px" marginTop={0.2} marginBottom={4}>
                                            <Typography color="#E8E1FA" variant="h6" padding={0.2} textAlign='center' fontFamily="Abril Fatface">Enter E-mail Address</Typography>

                        <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}}  margin="normal" type={'email'} variant="outlined" placeholder="E-mail Address" />
                                  
 </Grid>
    </Grid>
    <Grid pb={1}>
            <Button LinkComponent={Link} to={'/verification'} sx={{marginTop:3, borderRadius:4 ,fontFamily:"Abril Fatface",color:"black",bgcolor:"#EB5E57"}}  variant="contained" color="warning" ><b>SEND</b></Button>

    </Grid>

     </Box>
     </form>
    </div>
    )
}


export default ForgotPassword;