import Typography from "@mui/material/Typography";

const FormHeader = ({ title }) => {
  return (
    <Typography variant="h1" align="center" sx={{ fontSize: "42px", fontWeight: "bold" }}>
      {title}
    </Typography>
  );
};

export default FormHeader;
