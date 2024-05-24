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
          { value: "Working with Numbers", label: "Working with Numbers" },
          { value: "Living with Numbers", label: "Living with Numbers" },
          { value: "Qualify with Numbers", label: "Qualify with Numbers" },
        ]}
      />
      <FormikField
        label="Location*"
        type="select"
        id="location"
        options={[
          { value: "", label: "Please select a location", disabled: true },
          { value: "Maidstone", label: "Maidstone" },
          { value: "Whitstable", label: "Whitstable" },
          { value: "Ashford", label: "Ashford" },
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
