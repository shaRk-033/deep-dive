import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
    </div>
  );
}

function Header() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      let newGreeting;
      if (currentHour >= 5 && currentHour < 12) {
        newGreeting = 'Good morning';
      } else if (currentHour >= 12 && currentHour < 18) {
        newGreeting = 'Good afternoon';
      } else {
        newGreeting = 'Good evening';
      }
      setGreeting(newGreeting);
    };

    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <h1>{greeting}, Human</h1>
    </header>
  );
}


function MainContent() {
  return (
    <main>
      <InputArea />
      <SuggestedActions />
      <RecentChats />
    </main>
  );
}

function InputArea() {
  const [input, setInput] = useState('');

  return (
    <div className="input-area">
      <h2>Dive Deeper?</h2>
      <textarea 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="DeepDive"
      />
    </div>
  );
}

function SuggestedActions() {
  const actions = [
    "Extract insights from report",
    "Summarize meeting notes",
    "Provide stakeholder perspective"
  ];

  return (
    <div className="suggested-actions">
      <h3>Get started with an example below</h3>
      <div className="action-buttons">
        {actions.map((action, index) => (
          <button key={index} className="action-btn">{action}</button>
        ))}
      </div>
    </div>
  );
}

function RecentChats() {
  const chats = [
    { title: "Conversational Shopping for Personalized Outfits", time: "16 hours ago" },
    { title: "Personalized Learning Assistant with...", time: "2 days ago" },
    { title: "Counting the R's in Strawberry", time: "5 days ago" },
    { title: "Building GPT-2 from Scratch in C", time: "5 days ago" },
    { title: "GPT Implementation in C and Python", time: "6 days ago" },
    { title: "Understanding Redux: A Concise Overview", time: "7 days ago" }
  ];

  return (
    <div className="recent-chats">
      <h3>Your recent chats</h3>
      <div className="chat-list">
        {chats.map((chat, index) => (
          <div key={index} className="chat-item">
            <h4>{chat.title}</h4>
            <span>{chat.time}</span>
          </div>
        ))}
      </div>
      <div className="view-all">
        <button className="view-all-btn">View all →</button>
      </div>
    </div>
  );
}

export default App;