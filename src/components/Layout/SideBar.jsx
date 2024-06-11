import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardOptionKeyIcon from "@mui/icons-material/KeyboardOptionKey";
import { drawerWidth } from "../../theme/theme";
import DropDown from "../Dropdown/Dropdown";
import { useChatList } from "../../hooks/useChatList";
import ChatSessionButton from "./ChatSessionButton";
import useChatSession from "../../hooks/useChatSession";
import { useParams } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const admin = true;
  const { sessionId } = useParams();
  const { chatSessions } = useChatList();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickChatSession = (id) => {
    navigate(`/${id}`);

    // const session = chatSessions.find((session) => session.id === id);
    // if (session) {
    //   setFocused(id);
    // }
  };
  console.log("sessionId", sessionId);
  useChatSession(sessionId);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onClickAddQuestion = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClickOption = () => {
    navigate("/admin");
  };

  const DropdownItems = [
    {
      id: "live",
      text: "Live Mode",
      onClick: () => console.log("Live Mode"),
    },
    {
      id: "faq",
      text: "FAQ Mode",
      onClick: () => console.log("Live Mode"),
    },
  ];

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#2A7236",
            padding: "20px",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
          },
        }}
        open
      >
        <Logo />
        <Box sx={{ marginTop: "64px" }}>{/* margein */}</Box>

        <List sx={{ flexGrow: 1 }}>
          {chatSessions.map((session) => (
            <ChatSessionButton
              key={session.id}
              title={session.title}
              mode={session.mode}
              isFocused={Number(sessionId) === session.id}
              onClick={() => handleClickChatSession(session.id)}
            />
          ))}
        </List>

        <Box
          sx={{
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button
            startIcon={<AddIcon />}
            sx={{ width: "100%", marginBottom: "10px", bgcolor: "#294B29" }}
            onClick={onClickAddQuestion}
          >
            Add Question
          </Button>
          <DropDown
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            items={DropdownItems}
          />
          {admin && (
            <Button
              startIcon={<KeyboardOptionKeyIcon />}
              sx={{ width: "100%", marginBottom: "10px", bgcolor: "#959E96" }}
              onClick={onClickOption}
            >
              Option
            </Button>
          )}

          <Button
            startIcon={<LogoutIcon />}
            sx={{ width: "100%", bgcolor: "#777777" }}
          >
            Sign Out
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
