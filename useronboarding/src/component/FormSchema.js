import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().trim().required("Name is Required"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: yup.string().required("Password is Required"),
  terms: yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
});

export default formSchema;
