import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import "react-lazy-load-image-component/src/effects/blur.css";
import Home from "../src/pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import ChatBox from "./pages/ChatBox";
import ChatBoxPages from "./pages/ChatBox";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
                <Home />
            }
          />
          <Route
            path="/explore"
            element={
                <Explore />
            }
          />
          <Route
            path="/profile"
            element={
                <Profile />
            }
          />
          <Route
            path="/chat"
            element={
                <Chat />
            }
          />
          <Route
            path="/chatbox"
            element={
                <ChatBoxPages />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
