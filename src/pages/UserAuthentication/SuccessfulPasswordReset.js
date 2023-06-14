import { Box, Button, Typography, Grid } from "@mui/material";
import pass from "../../Images/Authentication.svg";

import React from "react";
import { Link } from "react-router-dom";

const SuccessfulPasswordReset = () => {
  return (
    <div className="loginbackgorund">
      <div>
        <form>
          {/* Container with styled box */}

          <Box
            display="flex"
            className="logingrad"
            flexDirection={"column"}
            maxWidth={500}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            marginBottom={10}
            padding={5}
            borderRadius={10}
            // boxShadow={"5px 5px 10px #ccc"}
            // bgcolor="#27144B"
            // sx={{
            //   background:
            //     " radial-gradient(circle,#3A1C92,#321873,#2C165D,#27144B)",
            // }}
          >
            {/* Password reset image */}

            <img src={pass} width="200px" />

            {/* Container with typography */}

            <Grid container direction="column" alignContent={"center"}>
              {/* Success message */}

              <Typography
                color="#E8E1FA"
                variant="h5"
                padding={2}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                Sucessful password Reset
              </Typography>
              {/* Login link */}

              <Typography
                color="blue"
                variant="h5"
                alignContent={"center"}
                // marginLeft={"100px"}
                textAlign="center"
                component={Link}
                to={"/"}
                fontFamily="Abril Fatface"
              >
                <b>Click to Login</b>
              </Typography>
            </Grid>
            {/* Container with typography */}

            <Grid pt={5} pb={5} textAlign={"center"}>
              {/* Password reset success message */}

              <Typography
                variant="h8"
                color="#E8E1FA"
                fontFamily="Abril Fatface"
              >
                You can now <br /> use your new password to <br /> Login to your
                account!
                {/* <Link href="#">Resend Confirmation mail</Link> */}
              </Typography>
            </Grid>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default SuccessfulPasswordReset;
