import React, { useState } from "react";

// material ui components
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Stack from "@mui/material/Stack";

const FileUploading = () => {
  const [file, setFile] = useState(null);

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
      const signedUrlResponse = await fetch(
        "https://pdlyrpr7wi.execute-api.us-east-1.amazonaws.com/dev/file-upload-intern",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
          }),
        }
      );

      // create signed url response for file upload
      const { signedUrl, key } = await signedUrlResponse.json();
      await fetch(signedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });
      console.log(`File uploaded successfully to S3 bucket with key: ${key}`);
    } catch (error) {
      console.error(`Error uploading file to S3: ${error}`);
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: 800,
          height: 300,
          backgroundColor: "#bdb2ff",
          padding: "1px",
          margin: "1px",
        }}
      >
        <Grid container direction="column">
          <Grid item md={8} direction="column" container>
            <Grid item md={2} pl={2}>
              <p>Upload the CV Document as PDF</p>
            </Grid>

            <Grid item md={6} pl={2} pt={2} container>
              <Grid item md={6} display={"flex"} justifyContent="left" container>
                <Grid item md={4}>
                  <h6>Full Name of the Candidate</h6>
                </Grid>

                <Grid item md={8}>
                  <input placeholder="Full Name"></input>
                </Grid>
              </Grid>

              <Grid item md={6} display={"flex"} justifyContent={"right"} container>
                <Grid item md={4}>
                  <h6>E-mail of the Candidate</h6>
                </Grid>

                <Grid item md={8}>
                  <input alignItems="center" placeholder="E-mail"></input>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={4} display={"flex"} justifyContent={"center"} pt={1}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <input type="file" onChange={handleFileChange} />
                <IconButton
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

          <Grid item md={4} direction="column" pt={4} pr={4} container>
            <Grid item display={"flex"} justifyContent={"end"}>
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
