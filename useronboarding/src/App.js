import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserForm from "./component/UserForm";
import UserCard from "./component/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <div>
        <h1>User Onboarding</h1>
        <p>
          Enter new user information below, user will be displayed on the bottom
          of the page
        </p>
      </div>
      <UserForm addNewUser={addNewUser} />
      {users.map((member) => {
        return <UserCard user={member} />;
      })}
    </div>
  );
}

export default App;
