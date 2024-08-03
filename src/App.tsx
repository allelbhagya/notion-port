// src/App.tsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {!isSidebarOpen && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
          onClick={toggleSidebar}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div
        className="main-content"
        style={{ paddingLeft: isSidebarOpen ? "250px" : "75px" }}
      >
        {/*some more stuff*/}
        <h1>Main Content</h1>
        <p>some stuff.</p>
      </div>
    </div>
  );
};

export default App;
