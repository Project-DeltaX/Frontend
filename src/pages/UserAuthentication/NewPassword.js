import { TextField,Box,Button, Typography, Grid } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";


const NewPassword = ()  => {
    
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
                        
                        <Grid >
                             <Typography color="#E8E1FA" variant="h4" padding={4} textAlign='center' fontFamily="Abril Fatface">New Password</Typography>
                        </Grid>


                        <Grid padding={3}> 
                            <Grid >
                        <Typography color="#E8E1FA" variant="h6" textAlign='center' fontFamily="Abril Fatface">Enter new Password</Typography>
 
                        </Grid>
                        <Grid container direction='column'>
                         <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} margin="normal" type={'password'} variant="outlined" placeholder="E-mail Address" />

                        </Grid>
                        </Grid>
                        


                        <Grid padding={2}>
                           <Grid>
                        <Typography color="#E8E1FA" variant="h6"  textAlign='center' fontFamily="Abril Fatface">Confirm Password</Typography>

                        </Grid>

                        <Grid container direction="column">
                      <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} margin="normal" type={'password'} variant="outlined" placeholder="E-mail Address" />

                        </Grid> 
                        </Grid>

                        
                   

                   

                   
    </Grid>
    <Grid padding={3}>
            <Button  LinkComponent={Link} to={'/newpw'} sx={{marginTop:3, borderRadius:4,bgcolor:"#EB5E57",color:"black",fontFamily:"Abril Fatface"}} variant="contained" color="warning"><b>Confirm</b></Button>

    </Grid>

     </Box>
     </form>
    </div>
    )
}


export default NewPassword;