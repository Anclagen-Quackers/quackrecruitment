import * as Yup from "yup";

export const validationSchema = Yup.object({
  "contact-name": Yup.string().required("Required").max(150, "Must be 150 characters or less"),
  email: Yup.string().email("Invalid email address").required("Required").max(150, "Must be 150 characters or less"),
  phone: Yup.string().max(150, "Must be 150 characters or less"),
  company: Yup.string().max(150, "Must be 150 characters or less"),
  message: Yup.string().required("Required").max(1000, "Must be 1000 characters or less"),
  industry: Yup.string().max(150, "Must be 150 characters or less"),
  vacancies: Yup.string().max(150, "Must be 150 characters or less"),
  type: Yup.string()
    .required("Please select type of service required.")
    .oneOf(["On Site Managed Services", "Permanent Recruitment", "Temporary Recruitment"], "Please select type of service required."),
  locations: Yup.string().max(150, "Must be 150 characters or less"),
  botInput: Yup.string(),
});
