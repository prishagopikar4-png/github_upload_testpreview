import React from "react";

import "./userCard.css";

function UserCard({ name, role, email }) {
  return (
    <article className="user-card">
      <div className="avatar">
        {name.charAt(0)}
      </div>

      <div className="user-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <small>{email}</small>
      </div>
    </article>
  );
}

export default UserCard;