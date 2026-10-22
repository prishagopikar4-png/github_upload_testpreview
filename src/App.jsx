import React from "react";

import Header from "./components/Header";
import UserCard from "./components/Card/UserCard";
import users from "./data/users";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <section className="hero">
          <p className="eyebrow">WebContainer Test</p>

          <h1>Project Upload Works perfectly fine🎉</h1>

          <p className="description">
            This project is intentionally organized into multiple folders and
            files to test upload, folder reconstruction, editing and live
            preview.
          </p>
        </section>

        <section className="cards">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              role={user.role}
              email={user.email}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;