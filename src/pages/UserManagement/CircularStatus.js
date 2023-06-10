import React from "react";
//import * as React from 'react';
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// A custom component that wraps CircularProgress and adds a label with percentage

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

// Defining the prop types for CircularProgressWithLabel

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
// The main component that renders the CircularProgressWithLabel with a changing progress value

export default function CircularStatus() {
  // Using React hooks to define the progress state and update it periodically

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    // Using setInterval to increment the progress state value by 10 every 800ms

    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    // Clearing the interval when the component unmounts

    return () => {
      clearInterval(timer);
    };
  }, []);
  // Rendering the CircularProgressWithLabel with the current progress value

  return <CircularProgressWithLabel value={progress} />;
}
