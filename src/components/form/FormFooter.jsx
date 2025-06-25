import { Typography } from '@mui/material'

const FormFooter = () => {
  return (
    <Typography
    variant="p"
    sx={{
      fontSize: "16px",
      width: "100%",
      marginTop: "20px",
      display: "block",
      textAlign: "center",
      color:'grey'
    }}
  >
    Already have an account? <a href="">Login here</a>
  </Typography>
)
}

export default FormFooter