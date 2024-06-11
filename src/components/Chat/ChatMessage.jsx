import React from "react";
import {
  Avatar,
  Box,
  Typography,
  Paper,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ChatMessage = ({ children, timestamp }) => {
  // const { text, timestamp, sources } = message;
  const avatar = "https://via.placeholder.com/5";

  return (
    <Box display="flex" mb={3}>
      <Avatar src={avatar} alt="avatar" sx={{ width: 40, height: 40, mt: 1 }} />
      <Box ml={4} flexGrow={1}>
        <Paper elevation={0} sx={{ px: 2, py: "6px" }}>
          {children}
        </Paper>
        <Box display="flex" alignItems="center" padding={"2px"}>
          <Typography variant="body2" color="textSecondary">
            {timestamp}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const LiveChatMessage = ({ message }) => {
  const { text, timestamp, sources } = message;

  return (
    <ChatMessage timestamp={timestamp}>
      <Typography sx={{ whiteSpace: "pre-line" }}>{text}</Typography>
      {sources && sources.length > 0 && (
        <Box
          mt={2}
          px={4}
          py={2}
          sx={{ bgcolor: "#E0E0E0", borderRadius: "30px" }}
        >
          <Typography variant="subtitle2" color="textSecondary">
            출처
          </Typography>
          {sources.map((source, index) => (
            <Link
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener"
              sx={{ display: "block" }}
            >
              {source.label}
            </Link>
          ))}
        </Box>
      )}
    </ChatMessage>
  );
};

export const FAQChatMessage = ({ message }) => {
  const { text, timestamp, answers } = message;

  return (
    <ChatMessage timestamp={timestamp}>
      <Typography sx={{ whiteSpace: "pre-line" }}>{text}</Typography>
      {answers && answers.length > 0 && (
        <Box my={2}>
          <Accordion elevation={1}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="subtitle1">{answers[0]}</Typography>{" "}
              {/* Display the first answer as summary */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{answers.join(" ")}</Typography>{" "}
              {/* Display all answers in details */}
            </AccordionDetails>
          </Accordion>
        </Box>
      )}
    </ChatMessage>
  );
};
