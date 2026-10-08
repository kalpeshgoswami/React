import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Student name is required"),

  GRid: Yup.string()
    .required("GR ID is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  course: Yup.string()
    .required("Course is required"),

  PhoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

export default validationSchema;