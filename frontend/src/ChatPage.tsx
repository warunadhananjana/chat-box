import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
import React from "react";

// Define the structure of the user object
interface ChatPageProps {
  user: { username: string; secret: string };
}

const ChatPage: React.FC<ChatPageProps> = ({ user }) => {  // Destructure user directly
  const chatProps = useMultiChatLogic(
    '716de15e-efdf-430c-8175-e2db2539f449',
    user.username,  // Use user object directly
    user.secret     // Use user object directly
  );

  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />  {/* Corrected component */}
    </div>
  );
};

export default ChatPage;
