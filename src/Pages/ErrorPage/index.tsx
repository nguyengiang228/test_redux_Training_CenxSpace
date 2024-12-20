import { Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <>
      <Typography color="warning" variant="h3" fontWeight="bold">
        Fetching Error
      </Typography>
      <Typography variant="h6">Some thing wrong internet!</Typography>
    </>
  );
};

export default ErrorPage;
