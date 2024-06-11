import { useContext, useEffect } from "react";
import { ChatSessionContext } from "../provider/ChatSessionContext";

const dummy = [
  {
    id: 8,
    question: "~ 위치 알려줘",
    answer: "네 위치는 ~입니다.",
    createdAt: "2024-06-09T10:39:22",
    myFeedback: 0,
    source: ["http://asdzxc.com", "http://qweertasd.com"],
  },
  {
    id: 12,
    question: "~ 위치 알려줘",
    answer: "네 위치는 ~입니다.",
    createdAt: "2024-06-09T10:39:22",
    myFeedback: 0,
    source: ["http://asdzxc.com", "http://qweertasd.com"],
  },
  {
    id: 45,
    question: "~ 위치 알려줘",
    answer: "네 위치는 ~입니다.",
    createdAt: "2024-06-09T10:39:22",
    myFeedback: 1,
    source: ["http://asdzxc.com", "http://qweertasd.com"],
  },
];

const useChatSession = (sessionId) => {
  const { state, dispatch } = useContext(ChatSessionContext);

  useEffect(() => {
    const fetchChatSession = async () => {
      try {
        const response = await fetch(`/chatbot/chatting/${sessionId}`);
        const data = await response.json();

        dispatch({
          type: "SET_SESSION",
          payload: {
            session: sessionId,
            messages: dummy, // TODO : change to data
          },
        });
      } catch (error) {
        console.error("Failed to fetch chat session:", error);
        dispatch({
          type: "SET_SESSION",
          payload: {
            session: sessionId,
            messages: dummy,
          },
        });
      }
    };

    if (sessionId) {
      fetchChatSession();
    }
  }, [sessionId, dispatch]);

  return {
    session: state.session,
    messages: state.messages,
  };
};

export default useChatSession;
