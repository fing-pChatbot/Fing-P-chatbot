import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import DropDown from "../Dropdown/Dropdown";
import RenameModal from "../Modal/RenameModal";

const ChatSessionButton = ({ session, isFocused }) => {
  const subtitle = session.mode === "live" ? "Live mode" : "FAQ mode";
  const modeColor = session.mode === "live" ? "#FF5353" : "#5AA7EE";
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickChatSession = () => {
    navigate(`/${session.id}`);
  };

  const renameClicked = () => {
    console.log("Rename clicked");
  };
  const removeClicked = () => {
    console.log("Remove clicked");
  };

  const items = [
    {
      id: "rename",
      text: "Rename",
      onClick: () => setModalOpen(true),
    },
    {
      id: "remove",
      text: "Remove",
      onClick: () => session.removeClicked(),
    },
  ];

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <>
          <IconButton
            aria-label="more"
            sx={{ height: "fit-content" }}
            onClick={handleMenuClick}
          >
            <MoreHorizIcon sx={{ color: grey[50] }} />
          </IconButton>
          <DropDown
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            items={items}
          />
          <RenameModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
      }
      sx={{
        borderRadius: "10px",
        marginBottom: "8px",
        bgcolor: isFocused ? "#ADBC9F" : null,
        "&:hover": {
          bgcolor: "#A9B49A",
        },
      }}
    >
      <ListItemButton
        disableRipple
        sx={{ width: "100%", borderRadius: "10px" }}
        onClick={handleClickChatSession}
      >
        <ListItemIcon>
          <ChatBubbleIcon sx={{ color: grey[50] }} />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body1" style={{ color: "#FFFFFF" }}>
              {session.title}
            </Typography>
          }
          secondary={
            <Box display="flex" alignItems="center">
              <Box
                component="span"
                sx={{
                  height: "8px",
                  width: "8px",
                  bgcolor: modeColor,
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "4px",
                }}
              />
              <Typography variant="body2" style={{ color: modeColor }}>
                {subtitle}
              </Typography>
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ChatSessionButton;
