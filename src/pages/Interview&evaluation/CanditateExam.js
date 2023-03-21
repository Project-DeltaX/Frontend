import React from "react";
import { Typography,CircularProgress,Radio,RadioGroup,Box } from "@mui/material";
import { Container } from "@mui/system";


const CandidateExam = () => {
  const [variant, setVariant] = React.useState('solid');

 return(
  <>
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 3,
    }}
  >
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
        gap: 1,
      }}
    >
      <CircularProgress variant={variant} color="primary" />
      <CircularProgress variant={variant} color="neutral" />
      <CircularProgress variant={variant} color="danger" />
      <CircularProgress variant={variant} color="info" />
      <CircularProgress variant={variant} color="success" />
      <CircularProgress variant={variant} color="warning" />
    </Box>
    <Container
      sx={{
        background: 'transparent',
        pl: 4,
        borderLeft: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography
        level="body2"
        fontWeight="xl"
        id="variant-label"
        textColor="text.primary"
        mb={1}
      >
        Variant:
      </Typography>
      <RadioGroup
        size="sm"
        aria-labelledby="variant-label"
        name="variant"
        value={variant}
        onChange={(event) => setVariant(event.target.value)}
      >
        <Radio label="Solid" value="solid" />
        <Radio label="Soft" value="soft" />
        <Radio label="Outlined" value="outlined" />
        <Radio label="Plain" value="plain" />
      </RadioGroup>
    </Container>
  </Box>
  </>
);
}











export default CandidateExam;

