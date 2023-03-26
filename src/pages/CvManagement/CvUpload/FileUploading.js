import { useState } from "react";
import { Box } from "@mui/material";


const FileUploading = () => {
    const [files, setFiles] = useState(null);

    return (
        <div>
            <Box
                sx={{
                    width: 800,
                    height: 300,
                    backgroundColor: '#bdb2ff',
                    padding: '1px',
                    margin: '1px'
                }}
            >
                <div className="dropzone">
                    <h5>Upload the CV Document as PDF</h5>
                    <h6>Full Name of the Candidate</h6>
                    <input placeholder="Full Name"></input>
                    <Dropzone
                        accept="pdf/*"
                        multiple
                        inputContent="Browse files to upload"
                    />
                </div>
            </Box>
        </div>
    )
};

export default FileUploading;