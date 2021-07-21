import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserForm from "./component/UserForm";

function App() {
  return (
    <div className="App">
      <div>
        <h1>User Onboarding</h1>
        <p>
          Enter new user information below, user will be displayed on the bottom
          of the page
        </p>
      </div>
      <UserForm />
    </div>
  );
}

export default App;
