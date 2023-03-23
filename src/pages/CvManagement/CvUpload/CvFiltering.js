import { useState } from "react";
import { Box } from "@mui/material";

const CvFiltering = () => {
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
                <div>
                    <h5>Shortlisted CVs</h5>
                </div>
            </Box>
        </div>
    )
};

export default CvFiltering;