import axios from "axios";
import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const handleInput = (evt) => {
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post("https://reqres.in/api/users", formData).then((resp) => {
      console.log(resp.data);
    });
  };

  return (
    <form onSubmit={(evt) => handleSubmit(evt)}>
      <div>
        <label>
          Name:
          <input
            name="name"
            type="text"
            onSubmit={(evt) => handleInput(evt)}
          ></input>
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            onChange={(evt) => handleInput(evt)}
          ></input>
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            onChange={(evt) => handleInput(evt)}
          ></input>
        </label>
        <input
          name="terms"
          type="checkbox"
          onChange={(evt) => handleInput(evt)}
        ></input>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
