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
  const { question, answer, createdAt, source } = message;

  return (
    <>
      <ChatMessage timestamp={createdAt}>
        <Typography sx={{ whiteSpace: "pre-line" }}>{question}</Typography>
      </ChatMessage>

      <ChatMessage timestamp={createdAt}>
        <Typography sx={{ whiteSpace: "pre-line" }}>{answer}</Typography>
        {source && source.length > 0 && (
          <Box
            mt={2}
            px={4}
            py={2}
            sx={{ bgcolor: "#E0E0E0", borderRadius: "30px" }}
          >
            <Typography variant="subtitle2" color="textSecondary">
              출처
            </Typography>
            {source.map((s, index) => (
              <Link
                key={index}
                href={s}
                target="_blank"
                rel="noopener"
                sx={{ display: "block" }}
              >
                {s}
              </Link>
            ))}
          </Box>
        )}
      </ChatMessage>
    </>
  );
};

export const FAQChatMessage = ({ message }) => {
  const { question, answer, createdAt, source } = message;

  return (
    <ChatMessage timestamp={createdAt}>
      <Typography inline sx={{ whiteSpace: "pre-line" }}>
        {question}
      </Typography>
      {answer.map((answer, index) => {
        const firstLine = answer.split("\n", 1)[0];
        const restOfAnswer = answer.substring(firstLine.length);
        return (
          <Box my={2} key={index}>
            <Accordion elevation={1}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                {/* 첫 줄만 요약해서 보여줍니다. */}
                <Typography variant="subtitle1">{firstLine}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* AccordionDetails를 확장하면, AccordionSummary의 텍스트에 이어서 나머지 텍스트를 보여줍니다. */}
                <Typography>{restOfAnswer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        );
      })}
    </ChatMessage>
  );
};
