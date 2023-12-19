import FormikField from "../../../Formik/FormikFeild";
import FormikYesNoDetails from "../../../Formik/FormikYesNoDetails";

const CourseAndDisabilities = () => {
  return (
    <div className="flex flex-col">
      <FormikField
        label="Course(s) of Interest*"
        type="select"
        id="course-interest"
        options={[
          { value: "", label: "Please select a course", disabled: true },
          { value: "Food & Hygiene", label: "Food & Hygiene" },
          { value: "SIA", label: "Security Industry Authority (SIA)" },
          { value: "Customer Service & Administration", label: "Customer Service & Administration" },
          { value: "CSCS", label: "Construction Skills (CSCS)" },
          { value: "Forklift", label: "Forklift" },
          { value: "Welding", label: "Welding" },
        ]}
      />
      <FormikField
        label="Location*"
        type="select"
        id="location"
        options={[
          { value: "", label: "Please select a location", disabled: true },
          { value: "Walsall", label: "Walsall" },
          { value: "Birmingham", label: "Birmingham" },
          { value: "Northampton", label: "Northampton" },
          { value: "Luton", label: "Luton" },
        ]}
      />

      <div>
        <FormikYesNoDetails name="disabilities" question="Do You Have Any Disabilities?*" detailsLabel="Please give details of your disabilities*" placeholder="" />
      </div>
      <FormikField
        label="Further Information"
        type="textarea" // This will be ignored since we're using the 'as' prop
        id="further-info"
        as="textarea" // This turns the field into a textarea
        placeholder="Please provide any other relevant information"
      />
    </div>
  );
};

export default CourseAndDisabilities;
