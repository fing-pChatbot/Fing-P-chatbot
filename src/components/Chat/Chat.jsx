import React, { useRef, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { LiveChatMessage, FAQChatMessage } from "./ChatMessage";
import useChatSession from "../../hooks/useChatSession";
import { useParams } from "react-router-dom";
import { useChatList } from "../../hooks/useChatList";

const mms = [
  {
    text: "Hello, how can I help you?",
    timestamp: "10:25 PM",
  },
  {
    text: "Can you tell me more about your services?",
    timestamp: "10:26 PM",
  },
  {
    text: "Sure, we offer a variety of services including...",
    timestamp: "10:27 PM",
    sources: [{ label: "https://www.skk.ac.kr", url: "https://www.skk.ac.kr" }],
  },
  {
    text: "Sure, we offer a variety of services including...",
    timestamp: "10:27 PM",
    sources: [{ label: "https://www.skk.ac.kr", url: "https://www.skk.ac.kr" }],
  },
  {
    text: "Sure, we offer a variety of services including...",
    timestamp: "10:27 PM",
    sources: [
      { label: "https://www.skk.ac.kr", url: "https://www.skk.ac.kr" },
      { label: "https://www.skk.ac.kr", url: "https://www.skk.ac.kr" },
    ],
  },
  {
    text: "네, 학교 내에서 화상미팅을 할 수 있는 몇 가지 장소가 있습니다.\n\
1. 에스카라 라운지: 여기서 화상미팅을 진행할 수 있습니다.\n \
2. 벤젠관: 여러 책상이 마련되어 있어 화상미팅에 적합할 수 있습니다.\n \
3. 산학관 1층 러닝팩토리: 공부와 미팅에 적합한 공간입니다.\n \
4. 디도 5층: 화상미팅에 사용할 수 있습니다. 추가적으로, 스터디룸을 이용하고 싶다면 학번을 빌려서 3명 이상으로 예약을 시도할 수도 있습니다.\n\
스터디룸의 경우 1명만으로는 예약이 불가능하니 참고해 주세요. 대실을 고려하는 것도 하나의 방법이 될 수 있습니다..\n",
    timestamp: "10:27 PM",
    sources: [{ label: "https://www.skk.ac.kr", url: "https://www.skk.ac.kr" }],
  },
];

const answer = [
  {
    text: "Sure, we offer a variety of services including...",
    timestamp: "10:27 PM",
    answers: [
      "네, 학교 내에서 화상미팅을 할 수 있는 몇 가지 장소가 있습니다.\n\
1. 에스카라 라운지: 여기서 화상미팅을 진행할 수 있습니다.\n \
2. 벤젠관: 여러 책상이 마련되어 있어 화상미팅에 적합할 수 있습니다.\n \
3. 산학관 1층 러닝팩토리: 공부와 미팅에 적합한 공간입니다.\n \
4. 디도 5층: 화상미팅에 사용할 수 있습니다. 추가적으로, 스터디룸을 이용하고 싶다면 학번을 빌려서 3명 이상으로 예약을 시도할 수도 있습니다.\n\
스터디룸의 경우 1명만으로는 예약이 불가능하니 참고해 주세요. 대실을 고려하는 것도 하나의 방법이 될 수 있습니다..\n",
    ],
  },
];

const Chat = (props) => {
  const { sessionId } = useParams();
  const { chatSessions } = useChatList();
  const { messages } = useChatSession(sessionId);
  const endOfMessagesRef = useRef(null);

  console.log("chatSessions:", (chatSessions));
  console.log("sessionId:", typeof(sessionId));

  const mode = chatSessions.find((session) => session.id == Number(sessionId))?.mode;
  console.log("mode:", mode);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      <Box
        mt={10}
        mr={4}
        sx={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}
      >
        {mode === "live" ? (
          messages.map((message, index) => <LiveChatMessage key={index} message={message} />)
        ) : (
          messages.map((message, index) => <FAQChatMessage key={index} message={message} />)
        )}
        <div ref={endOfMessagesRef} />
      </Box>
    </Container>
  );
};

export default Chat;
