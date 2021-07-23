import axios from "axios";
import React, { useState, useEffect } from "react";
import formSchema from "./FormSchema";
import { reach } from "yup";

function UserForm(props) {
  const initialFormErrors = {
    name: "",
    email: "",
    password: "",
    terms: "",
  };
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      console.log("formschema", valid);
      setDisabled(!valid);
    });
  }, [formData]);

  const validate = (name, value) => {
    reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleInput = (evt) => {
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log("for handleINput", typeof value);
    const name = target.name;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post("https://reqres.in/api/users", formData).then((resp) => {
      console.log(resp.data);
      props.addNewUser(resp.data);
      setFormData({
        name: "",
        email: "",
        password: "",
        terms: false,
      });
    });
  };

  return (
    <form onSubmit={(evt) => handleSubmit(evt)}>
      <div>
        <label>
          Name:
          <input
            value={formData.name}
            name="name"
            type="text"
            onChange={(evt) => handleInput(evt)}
          ></input>
        </label>
        <label>
          Email:
          <input
            value={formData.email}
            name="email"
            type="text"
            onChange={(evt) => handleInput(evt)}
          ></input>
        </label>
        <label>
          Password:
          <input
            value={formData.password}
            name="password"
            type="password"
            onChange={(evt) => handleInput(evt)}
          ></input>
        </label>
        <input
          value={formData.terms}
          checked={formData.terms}
          name="terms"
          type="checkbox"
          onChange={(evt) => handleInput(evt)}
        ></input>
        <button id="submitBtn" disabled={disabled}>
          Submit
        </button>
        <div>
          <div id="nameErrorMsg">{formErrors.name}</div>
          <div id="emailErrorMsg">{formErrors.email}</div>
          <div id="passwordErrorMsg">{formErrors.password}</div>
          <div id="termsErrorMsg">{formErrors.terms}</div>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
