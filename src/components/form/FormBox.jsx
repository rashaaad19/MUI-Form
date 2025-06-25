import { Box } from "@mui/material";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import RefreshIcon from "@mui/icons-material/Refresh";
import BtnsStack from "./BtnsStack";
import FormBtn from "./FormBtn";
import IconButton from "@mui/material/IconButton";
import FormFooter from "./FormFooter";

//---------------------Styles-------------------
const formContainerStyles = {
  width: {
    xs: "90%",
    sm: "400px",
  },
  marginBlock: "25px",
  marginInline: "auto",
  padding: "20px",
  borderRadius: 2,
};

//---------------------Render-------------------
const FormBox = () => {
  return (
    <Box component={"div"} sx={formContainerStyles}>
      <FormHeader title="Register" />
      <FormInput
        label="name"
        placeholder={"Enter your name"}
        icon={<AccountCircleIcon />}
        type={"text"}
      />
      <FormInput
        label="email"
        placeholder={"Enter your email"}
        icon={<EmailIcon />}
        type={"email"}
      />
      <FormInput
        label="password"
        placeholder={"Enter your password"}
        icon={<LockIcon />}
        type={"password"}
      />
      <BtnsStack>
        <FormBtn
          color={"white"}
          backgroundColor={"CornflowerBlue"}
          text={"Submit"}
        />
        <FormBtn
          color={"DarkOrchid"}
          backgroundColor={"white"}
          borderColor={"DarkOrchid"}
          text={"Reset"}
        />
        <IconButton aria-label="refresh" color="warning">
          <RefreshIcon />
        </IconButton>
      </BtnsStack>
      <FormFooter />
    </Box>
  );
};

export default FormBox;
