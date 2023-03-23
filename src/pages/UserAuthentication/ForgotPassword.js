import { TextField,Box,Button, Typography, Grid } from "@mui/material";
import pass from "../../Images/ForgotPassword.svg";

import { CognitoUser } from "amazon-cognito-identity-js";

import React ,{ useState} from "react";
import { Link } from "react-router-dom";
import Pool from "../../pages/UserPool"
import NewPassword from "./NewPassword";

const ForgotPassword = ()  => {
    const [stage,setStage]=useState(1);
    const [email,setEmail]=useState('');
    // const [code,setCode]=useState('');
    // const [password,setPassword]=useState('');  
    // const [confirmPassword,setConfirmPassword]=useState('');




    const getUser=() =>{

    return new CognitoUser({
        Username:email,
        Pool
    });
    };
    const sendCode=event=>{
        event.preventDefault();

    getUser().forgotPassword({
        onSuccess:data=>{
            console.log('onSuccess',data);
        },
        onFailure:err=>{
            console.error('onFailure',err);
        },
        inputVerificationCode:data=>{
            console.log('Input code:',data);
            setStage(2);
        }
    });
    }; 

    // const resetPassword = event=>{
    //     event.preventDefault();

    //     if(password !==  confirmPassword){
    //         console.error('Password are not the same');
    //         return;
    //     }

    //     getUser().confirmPassword(code,password,{
    //         onSuccess:data=>{
    //             console.log('onSuccess:',data);
    //         },
    //         onFailure:err=>{
    //             console.error('onFailure:',err);
    //         }
    //     })
    // }
    // ;
    return(
        <div>
            
            {stage ===1 &&(

<form onSubmit={sendCode}>
   
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

                        <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',borderRadius:'20px',height:'15px'}}}  margin="normal" type={'email'} variant="outlined" placeholder="E-mail Address" value={email} onChange={event=>setEmail(event.target.value) }/>
                                  
 </Grid>
    </Grid>
    <Grid pb={1}>
            <Button  /*LinkComponent={Link} to={'/verification'} */ sx={{marginTop:3, borderRadius:4 ,fontFamily:"Abril Fatface",color:"black",bgcolor:"#EB5E57"}}  variant="contained" color="warning"  type="submit"><b>SEND</b></Button>

    </Grid>


     </Box>

</form>
        )}



            
        
        {stage=== 2 && ( 
        //    <form onSubmit={resetPassword}>
        //     <input
        //     value={code}
        //     onChange={event=>setCode(event.target.value)}
        //     />
        //      <input
        //     value={password}
        //     onChange={event=>setPassword(event.target.value)}
        //     />
        //      <input
        //     value={confirmPassword}
        //     onChange={event=>setConfirmPassword(event.target.value)}
        //     />
        //                 <Button  /*LinkComponent={Link} to={'/verification'} */ sx={{marginTop:3, borderRadius:4 ,fontFamily:"Abril Fatface",color:"black",bgcolor:"#EB5E57"}}  variant="contained" color="warning"  type="submit"><b>SEND</b></Button>

        //    </form>
        <div>
<NewPassword Username={email}/>
        </div>
        )}
   
    </div>
    );
};


export default ForgotPassword;