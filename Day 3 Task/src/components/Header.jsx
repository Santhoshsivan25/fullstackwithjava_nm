import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h6"
        color={'indigo'}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>

      <Typography variant="subtitle" color={'indigo'}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;