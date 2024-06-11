import SideBar from "./SideBar";
import { useChatList } from "../../hooks/useChatList";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const Layout = (props) => {
  const { chatSessions } = useChatList();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SideBar chatSessions={chatSessions}/>
      {props.children}
    </Box>
  );
};

export default Layout;
