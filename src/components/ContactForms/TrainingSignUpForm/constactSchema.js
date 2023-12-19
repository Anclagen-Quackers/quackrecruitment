import * as Yup from "yup";
import { subYears } from "date-fns";

const MAX_AGE = 80;
const MIN_AGE = 16;
const today = new Date();
const oldestDateOfBirthAllowed = subYears(today, MAX_AGE);
const youngestDateOfBirthAllowed = subYears(today, MIN_AGE);
export const empty = Yup.object().shape({});

// Personal & Contact Details
export const personalSchema = Yup.object().shape({
  "first-name": Yup.string().required("First name is required").max(150, "First name cannot exceed 150 characters"),
  "last-name": Yup.string().required("Last name is required").max(150, "Last name cannot exceed 150 characters"),
  "date-of-birth": Yup.date().required("Date of Birth is required").min(oldestDateOfBirthAllowed, `Too old to apply.`).max(youngestDateOfBirthAllowed, `Too young to apply.`),
  "ni-number": Yup.string().max(9, "National Insurance number cannot exceed 9 characters").required("NI number is required"),
  ethnicity: Yup.string().required("Enthnicity is required").max(150, "Enthnicity cannot exceed 150 characters"),
  email: Yup.string().email("Invalid email format").required("Email is required").max(150, "Enthnicity cannot exceed 150 characters"),
  "mobile-number": Yup.string()
    .required("Phone number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Invalid phone number format"),
  english: Yup.string().oneOf(["yes", "no"], "Select either yes or no"),
  "employment-status": Yup.string().oneOf(["yes", "no"], "Select either yes or no"),
  "employment-status-info": Yup.string().max(200, "Should not exceed 200 characters."),
  "criminal-record": Yup.string().oneOf(["yes", "no"], "Select either yes or no"),
  "job-seeker": Yup.string().oneOf(["yes", "no"], "Select either yes or no"),
});

// Job Preferences & Eligibility
export const courseAndDisability = Yup.object().shape({
  disabilities: Yup.string().nullable().oneOf(["yes", "no"], "Select either yes or no"),
  "disabilities-info": Yup.string().when("disability", { is: "yes", then: () => Yup.string().required("Disability info is required").max(200, "Disability info should not exceed 200 characters.") }),
  "course-interest": Yup.string().required("Course interest is required").max(200, "Course interest should not exceed 200 characters."),
  location: Yup.string().required("Location is required").max(200, "Location should not exceed 200 characters."),
  "further-info": Yup.string().max(500, "Further info should not exceed 400 characters."),
});
