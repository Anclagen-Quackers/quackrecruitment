"use client";
import { useState, useEffect } from "react";
import { PersonalDetails, DocumentUpload, CourseAndDisabilities } from "./FormSections";
import { empty, personalSchema, courseAndDisability } from "./constactSchema";
import { initialState, uploadInitialState } from "./contactData";
import { Form, Formik, Field } from "formik";
import ErrorBoundary from "../ErrorBoundary";
import Stepper from "../../Formik/Stepper";
import Link from "next/link";

const TrainingSignUpForm = ({ params }) => {
  const [activeSection, setActiveSection] = useState(0);
  // Manually managing file uploads as Formik isn't playing nice
  const [fileUploads, setFileUploads] = useState(uploadInitialState);
  // Error states
  const [uploadError, setUploadError] = useState(true);
  const [formErrors, setFormErrors] = useState(null);
  const [agree, setAgree] = useState(false);
  const [success, setSuccess] = useState(false);
  const Schema = [personalSchema, courseAndDisability, empty];

  useEffect(() => {
    const section = document.querySelector(`.section-${activeSection}`);
    if (section) {
      const input = section.querySelector("input, select");
      if (input) {
        input.focus();
      }
    }
  }, [activeSection]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Check for honeypot
    if (values.botInput) {
      console.log("Bot detected");
      return;
    }
    delete values.botInput;

    // Handle form submission
    try {
      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key]);
      }

      for (const key in fileUploads) {
        if (fileUploads[key]) {
          formData.append(key, fileUploads[key]);
        }
      }

      // cf7 12
      const response = await fetch("https://content.quackrecruitmentandtraining.co.uk/wp-json/contact-form-7/v1/contact-forms/12/feedback", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status === "mail_sent") {
        console.log(values);
        setSubmitting(false);
        setSuccess(true);
        resetForm();
        scrollTo(0, 0);
      } else {
        setFormErrors(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormErrors("There was a problem submitting the form. Please try again later.");
    }
  };

  const sectionFields = {
    0: ["first-name", "last-name", "date-of-birth", "mobile-number", "email", "ethnicity", "english", "employment-status", "job-seeker", "criminal-record", "ni-number"],
    1: ["course-interest", "location", "disabilities", "disabilities-info", "further-info"],
    2: [],
  };

  if (success) {
    return (
      <div
        className={`p-5 text-center bg-zinc-300 text-black w-full mx-auto max-w-lg rounded-xl shadow-xl transition-all duration-300 shadow-quackred-300 transition-height duration-2000 transform reduceHeightCan`}
      >
        <div className="my-auto max-h-fit p-4">
          <span className="material-icons text-green-500 text-6xl mt-6 mb-4">check_circle</span>
          <h2 className="text-xl text-center mb-6">Submission Successful!</h2>
          <p className="my-8">
            Thank you for submitting your details. We will get back to you shortly! You should have received an email confirming this receipt shortly, make sure you check your junk mail.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Formik initialValues={initialState} validationSchema={Schema[activeSection]} onSubmit={handleSubmit}>
        {({ isValid, validateForm, setTouched, isSubmitting, setFieldValue, values }) => (
          <>
            <h1 className="text-3xl text-center mb-6">Course Sign Up</h1>
            <Form className="p-5 bg-zinc-300 text-black w-full max-w-lg mx-auto rounded-xl shadow-xl transition-all duration-300 shadow-quackred-300">
              <div>
                <div className="">
                  <div className="">
                    <div className="section-1" style={{ display: activeSection === 0 ? "block" : "none" }}>
                      <h2 className="text-xl text-center">Personal Details</h2>
                      <Stepper activeSection={activeSection} steps={3} />
                      <PersonalDetails />
                    </div>
                    <div className="section-3" style={{ display: activeSection === 1 ? "block" : "none" }}>
                      <h2 className="text-xl text-center">Course And Further Details</h2>
                      <Stepper activeSection={activeSection} steps={3} />
                      <CourseAndDisabilities />
                    </div>
                    <div className="section-5" style={{ display: activeSection === 2 ? "block" : "none" }}>
                      <h2 className="text-xl text-center">Supporting Documents</h2>
                      <Stepper activeSection={activeSection} steps={3} />
                      <DocumentUpload fileUploads={fileUploads} setFileUploads={setFileUploads} setUploadError={setUploadError} />
                    </div>
                    <div className="flex mt-8">
                      <button
                        type="button"
                        onClick={() => setActiveSection((prev) => Math.max(0, prev - 1))}
                        className={`${(activeSection === 0 && "hidden") || ""} bg-quackred-900 hover:bg-quackred-600 hover:text-white text-white py-2 px-4 rounded`}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          console.log(activeSection);
                          if (activeSection >= 0) {
                            const currentSectionFields = sectionFields[activeSection];
                            const touchedFields = {};
                            currentSectionFields.forEach((key) => {
                              touchedFields[key] = true;
                            });
                            setTouched(touchedFields);
                            await validateForm();
                            if (isValid || activeSection === 3) {
                              setActiveSection((prev) => Math.min(3, prev + 1));
                            }
                          } else {
                            setActiveSection((prev) => Math.min(3, prev + 1));
                          }
                        }}
                        className={`${(activeSection === 2 && "hidden") || ""} ms-auto bg-quackred-900 hover:bg-quackred-600 hover:text-white text-white py-2 px-4 rounded `}
                      >
                        Next
                      </button>
                    </div>
                    {activeSection === 2 && (
                      <div className="text-center mt-10 flex flex-col gap-6">
                        <label>
                          I herby confirm that the information I have provided is correct and I agree to the{" "}
                          <Link className="text-quackred-800" prefetch={false} target="_blank" href={"/legal/privacy-policy"}>
                            terms and conditions.
                          </Link>
                          *
                          <input className="w-5 h-5 ms-3 mt-1" type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
                        </label>
                        {formErrors && (
                          <>
                            <div className="error error-message">
                              {formErrors} If problem persist please contact us at{" "}
                              <a href="mailto:sales@quackrecruitmentandtraining.co.uk" className="text-quackred-900 hover:underline">
                                sales@quackrecruitmentandtraining.co.uk.
                              </a>
                            </div>
                          </>
                        )}
                        <Field type="text" name="botInput" style={{ display: "none" }} autoComplete="off" />
                        <button
                          className={`${uploadError || !agree ? "opacity-50" : ""} bg-quackred-900 hover:bg-quackred-600 hover:text-white text-white py-2 px-4 rounded`}
                          disabled={uploadError || !agree}
                          type="submit"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="inline animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing
                            </>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </ErrorBoundary>
  );
};

export default TrainingSignUpForm;
