// @mui
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import { ButtonBase, Card, Typography, Grid } from "@mui/material";
// components
import Iconify from "../../../../components/iconify";
// ----------------------------------------------------------------------

const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

const MyGrid = styled(Grid)({
  "& .MuiGrid-root": {
    paddingTop: "16px",
    paddingBottom: "0px",
  },
});

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, sx, ...other }) {
  return (
    <ButtonBase>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "200px",
          height: "120px",
          padding: "10px",
          boxShadow: 0,
          textAlign: "center",
          bgcolor: "#27144B",
        }}
        {...other}
      >
        <MyGrid container spacing={2} direction={'column'}>
          <MyGrid item>
            <Typography
              variant="h5"
              align="left"
              ml={3}
              marginBottom={0}
              sx={{ color: "#e4e0ff" }}
            >
              {title}
            </Typography>
          </MyGrid>
          <MyGrid item >
            <Typography variant="h4" align="center" ml={3} color={"#e4e0ff"}>
              {total}
            </Typography>
          </MyGrid>
        </MyGrid>
      </Card>
    </ButtonBase>
  );
}
