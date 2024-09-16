import React, { useState } from "react";
import "./App.css";
import AuthPage from "./AuthPage";
import ChatPage from "./ChatPage";

// Define the user type for TypeScript
interface User {
  username: string;
  secret: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null); // Using the defined User interface

  // If the user is not authenticated, render the AuthPage
  if (!user) {
    return <AuthPage onAuth={(user: User) => setUser(user)} />;
  } else {
    
    return <ChatPage user={user} />;
  }
}

export default App;
