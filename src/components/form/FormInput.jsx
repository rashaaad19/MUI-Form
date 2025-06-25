import { Box, InputAdornment, TextField } from "@mui/material";

const FormInput = ({ label, placeholder, icon }) => {
  return (
    <>
      <Box sx={{ marginBlock: "2rem", textAlign: "center" }}>
        <TextField
          id="input-with-icon-textfield"
          label={label}
          placeholder={placeholder}
          type={'password'}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">{icon}</InputAdornment>
              ),
            },
          }}
          sx={{width:'100%'}}
        />
      </Box>
    </>
  );
};

export default FormInput;
