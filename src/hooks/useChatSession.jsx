import { useContext, useEffect } from "react";
import { ChatSessionContext } from "../provider/ChatSessionContext";

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
            messages: data.messages,
          },
        });
      } catch (error) {
        console.error("Failed to fetch chat session:", error);
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
