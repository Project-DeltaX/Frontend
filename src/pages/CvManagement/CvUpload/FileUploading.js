import React, { useState } from "react";
import axios from "axios";

// material ui components
import { Box, Grid, styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";

const CssInput = styled(InputBase)({
  padding: "2px",
  backgroundColor: "white",
  borderRadius: "5px",
  height: "40%",
  "& .MuiInputBase-input": {
    fontFamily: "Poppins",
    fontSize: "14px",
  },
});

const FileUploading = () => {
  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  // Delete the file
  const handleDelete = (event) => {
    event.preventDefault();
    setFile(event.target.null);
  };

  // Choose the file
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Upload the file
  const handleUpload = async () => {
    try {
      // fetch data from s3 bucket API
      const signedUrlResponse = await axios.post(
        " https://pdlyrpr7wi.execute-api.us-east-1.amazonaws.com/dev/{bucket}/{fileupload}",
        {
          fileName: file.name,
          fileType: file.type,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Method": "POST",
            "Access-Control-Allow-Origin": "*",
          },
          responseType: "json",
        }
      );
    
      // create signed url response for file upload
      const { signedUrl, key } = signedUrlResponse.data;
      await axios.put(signedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });
      console.log(`File uploaded successfully to S3 bucket with key: ${key}`);
    } catch (error) {
      console.error(`Error uploading file to S3: ${error}`);
    }
    

    try {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        position: position,
      };
      console.log(FormData);

      const response = await axios.post(
        "https://6dhojaavvf.execute-api.us-east-1.amazonaws.com/dev/applicantdetail",
        formData
      );

      console.log(response);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: 800,
          height: "fit-content",
          backgroundColor: "#bdb2ff",
          padding: "1px",
          margin: "1px",
        }}
      >
        <Grid container direction="column">
          <Grid item container direction="column" md={6} paddingRight={25}>
            <Grid item md={2} pl={2}>
              <p>Upload the CV Document as PDF</p>
            </Grid>

            <Grid item container pl={6} pt={1}>
              <Grid
                item
                md={6}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography margin={2} onChange={handleFirstNameChange}>
                  First Name
                </Typography>
                <CssInput placeholder="First Name" />
              </Grid>

              <Grid
                item
                md={6}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography margin={2} onChange={handleLastNameChange}>
                  Last Name
                </Typography>
                <CssInput placeholder="Last Name" />
              </Grid>
              <Grid
                item
                md={6}
                pt={2}
                display="flex"
                justifyContent="flex-star"
                alignItems="center"
              >
                <Typography margin={2} onChange={handleEmailChange}>
                  E-mail
                </Typography>
                <CssInput placeholder="E-mail" />
              </Grid>
              <Grid
                item
                md={6}
                pt={2}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography margin={2} onChange={handlePositionChange}>
                  Job Position
                </Typography>
                <CssInput placeholder="Job Position" />
              </Grid>
            </Grid>

            <Grid item md={4} display="flex" justifyContent="center" pt={3}>
              <Stack direction="row" alignItems="center" spacing={2} pl={4}>
                <input type="file" onChange={handleFileChange} />
                <IconButton
                  pr={4}
                  color="primary"
                  aria-label="upload pdf"
                  component="label"
                >
                  <input hidden accept="pdf/*" type="pdf" />
                  <PictureAsPdfIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>

          <Grid item container direction="column" md={4} pt={2} pb={2} pr={4}>
            <Grid item display="flex" justifyContent="flex-end">
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={handleDelete}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button
                  onClick={handleUpload}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FileUploading;
