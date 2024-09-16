import React from "react";

// Define the structure of the user object
interface ChatPageProps {
  user: { username: string; secret: string };
}

const ChatPage: React.FC<ChatPageProps> = ({ user }) => {
  return (
    <div className="chat-container">
      <h1>Welcome to the Chat, {user.username}!</h1>
      {/* Add your chat functionality here */}
    </div>
  );
};

export default ChatPage;
