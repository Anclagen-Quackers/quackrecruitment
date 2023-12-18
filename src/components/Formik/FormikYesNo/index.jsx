import { Field, useField } from "formik";

function FormikYesNo({ name, question }) {
  const [field] = useField(name);

  return (
    <>
      <div className="mt-2">
        <span className="me-2">{question}</span>
        <div className="mt-2 flex items-center space-x-3 gap-6">
          <label className="flex items-center cursor-pointer">
            <Field type="radio" name={name} value="yes" className="sr-only" />
            <span className={`w-6 h-6 mr-2 rounded-full border-2 ${field.value === "yes" ? "bg-quackred-950 border-white" : "border-white bg-gray-100"}`}></span>
            Yes
          </label>
          <label className="flex items-center cursor-pointer">
            <Field type="radio" name={name} value="no" className="sr-only" />
            <span className={`w-6 h-6 mr-2 rounded-full border-2 ${field.value === "no" ? "bg-quackred-950 border-white" : "border-white bg-gray-100"}`}></span>
            No
          </label>
        </div>
      </div>
    </>
  );
}

export default FormikYesNo;
