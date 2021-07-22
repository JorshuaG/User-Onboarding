import React from "react";

function UserCard(props) {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
    </div>
  );
}

export default UserCard;
