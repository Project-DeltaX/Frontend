import { Box,Button, Typography,Grid,Link } from "@mui/material";
import pass from "../Images/Authentication.svg";

import React from "react";
import { CenterFocusStrong } from "@mui/icons-material";


const SuccessfulPasswordReset = ()  => {
   
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
                    <img src={pass} width='200px'/>

                    <Grid container direction="column">

                      <Typography color="#E8E1FA" variant="h5" padding={4} textAlign='center' fontFamily="Abril Fatface">Sucessful password Reset</Typography>
         
                    </Grid>
   

                    <Grid pt={5} pb={5} textAlign={'center'}>
                    <Typography variant="h8"  color='#E8E1FA' fontFamily="Abril Fatface">You can now <br/> use your new password to <br/> Login to your account!  <Link href="#">Resend Confirmation mail</Link></Typography>
                    </Grid>

     </Box>
     </form>
    </div>
    )
}


export default SuccessfulPasswordReset;