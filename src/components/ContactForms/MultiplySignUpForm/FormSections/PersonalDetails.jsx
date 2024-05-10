import FormikField from "../../../Formik/FormikFeild";
import FormikYesNoDetails from "../../../Formik/FormikYesNoDetails";
import FormikYesNo from "@/components/Formik/FormikYesNo";

const PersonalDetails = () => (
  <div className="flex flex-col">
    <div className="sm:flex sm:flex-row gap-6 w-full">
      {/* First Name */}
      <div className="sm:w-1/2">
        <FormikField label="First Name*" type="text" id="first-name" placeholder="John" />
      </div>
      {/* Last Name */}
      <div className="sm:w-1/2">
        <FormikField label="Last Name*" type="text" id="last-name" placeholder="Doe" />
      </div>
    </div>
    <div className="sm:flex sm:flex-row gap-6 w-full">
      {/* Date of Birth */}
      <div className="h-20 sm:w-1/2">
        <FormikField label="Date of Birth*" type="date" id="date-of-birth" width="w-content" />
      </div>
      {/* NI number */}
      <div className="h-20 sm:w-1/2 mt-1">
        <FormikField label="National Insurance Number*" type="text" id="ni-number" placeholder="QQ123456C" />
      </div>
    </div>
    <div>
      {/* Email */}
      <FormikField label="Ethnicity*" type="text" id="ethnicity" placeholder="British" />
    </div>
    <div className="sm:flex sm:flex-row gap-6 w-full">
      {/* Phone Number */}
      <div className="h-20 ">
        <FormikField label="Mobile Number*" type="tel" id="mobile-number" placeholder="1234567890" />
      </div>
    </div>
    <div>
      {/* Email */}
      <FormikField label="Email*" type="email" id="email" placeholder="your-email@example.com" />
    </div>
    <div>
      <FormikYesNo name="english" question="Are you currently studying english as a second language?" />
    </div>
    <div className="mt-2">
      <FormikYesNoDetails name="employment-status" question="Are you currently employed?" detailsLabel="Who is your current employer?" placeholder="" />
    </div>
    <div className="mt-2">
      <FormikYesNo name="job-seeker" question="Are you currently looking for work?" />
    </div>
    <div className="mt-2">
      <FormikYesNo name="criminal-record" question="Do you have a criminal record or unspent criminal convictions?" />
    </div>
  </div>
);

export default PersonalDetails;
