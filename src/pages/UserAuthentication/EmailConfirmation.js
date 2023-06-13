import { Box, Button, Typography, Grid, Link, Icon } from "@mui/material";
import pass from "../../Images/messenger.svg";


import React from "react";


// Define a functional component called EmailConfirmation

const EmailConfirmation = () => {
  // Render the component

  return (
    <div className="loginbackgorund">
    <div>
      <form>
        <Box
         display="flex"
          className="logingrad"

          flexDirection={"column"}
          maxWidth={500}
          // maxHeight={600}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={7}
          marginBottom={15}
          padding={6}
          borderRadius={10}
          // boxShadow={"5px 5px 10px #ccc"}
          // bgcolor="#27144B"
          // sx={{
          //   background:
          //     " radial-gradient(circle,#3A1C92,#321873,#2C165D,#27144B)",
          // }}
        >
          <img src={pass} width="180px" />

          <Grid container direction="column" alignContent={"center"}>
            <Grid>
              <Typography
                color="#E8E1FA"
                variant="h5"
                padding={4}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                E-mail Confirmation
              </Typography>
            </Grid>
            <Typography
              color="#E8E1FA"
              variant="h7"
              padding={0.2}
              textAlign="center"
              fontFamily="Abril Fatface"
              marginBottom={5}
            >
              We have sent email to your Email Id <br />
              to confirm the validity of our email address.
              <br />
              After receiving the email follow the link provided to complete
              your registration.
            </Typography>
          </Grid>

          {/* <Grid padding={3}>
        <Button sx={{ display: "flex", justifyContent:'space-between', marginTop:3, borderRadius:4,color:"black", width:"90px",fontFamily:"Abril Fatface",bgcolor:"#EB5E57"}}  variant="contained"  color="warning"  ><b>Next</b><ArrowForwardIcon sx={{width :'18px', height:'18px'}}/></Button>
    </Grid> */}

          <Grid padding={2}>
            <hr width="500px" color="white" alignitems="center"></hr>
          </Grid>

          {/* <Grid>
            <Typography
              variant="h8"
              align="center"
              color="#E8E1FA"
              fontFamily="Abril Fatface"
            >
              If you not got any E-mail?{" "}
              <Link href="#">Resend Confirmation mail</Link>
            </Typography>
          </Grid> */}
        </Box>
      </form>
    </div>
    </div>
  );
};

export default EmailConfirmation;
