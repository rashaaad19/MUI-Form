import { Stack } from "@mui/material";

const BtnsStack = ({children}) => {
  return (
    <Stack
      flexDirection={"row"}
      gap={5}
      justifyContent={"center"}
      marginTop={3}
    >
      {children}
    </Stack>
  );
};

export default BtnsStack;
