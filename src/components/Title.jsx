import { Typography } from "@mui/material";

export const Title = ({ text }) => {
  return (
    <Typography variant="h3" component="h2">
      {text}
    </Typography>
  );
};
