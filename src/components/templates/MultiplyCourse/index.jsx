import PageLink from "@/components/PageLink";

const MultiplyCourse = ({ course }) => {
  return (
    <div className="lg:flex col sm:p-10 xl:px-10 mx-auto ">
      <div className="lg:w-2/3 sm:ps-5 lg:pe-20 xl:pe-32">
        <h2 className="text-4xl font-bold text-center mb-10">{course.title}</h2>
        {course.description && <p className="text-lg font-semibold leading-6 text-gray-900 mb-6">{course.description}</p>}
        <div>
          <div className="flex flex-col sm:flex-row gap-3">
            <PageLink label={"Sign Up Today"} href="/training/multiply/signup" />
          </div>
        </div>
        <h3 className="text-4xl font-bold mb-6 mt-10">What You Learn</h3>
        <div>
          {course.content.map((unit, index) => (
            <div key={index}>
              <h4 className="text-2xl font-bold">{unit.unitTitle}</h4>
              <p className="mb-6 mt-3">{unit.unitDescription}</p>
            </div>
          ))}
        </div>
        <h3 className="text-4xl font-bold mb-10">Why Choose Us</h3>
        <div>
          {course.whyChoose &&
            course.whyChoose.map(({ title, description }, index) => (
              <div key={index}>
                <h4 className="text-2xl font-bold">{title}</h4>
                <p className="mb-6 mt-3">{description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="lg:w-1/3 bg-quackred-50 mt-10 lg:mt-16 p-5 xl:p-10 rounded-xl h-fit shadow-xl">
        <h3 className="text-4xl font-bold text-center mb-6">Course Information</h3>
        <p className="mb-3 text-lg">
          <b>Course Duration:</b> {course.learningHours} hours
        </p>
        <p className="mb-3 text-lg">
          <b>Course Locations:</b> {course.locations.join(", ")}
        </p>
        <p className="mb-1 text-lg">
          <b>Course Cost:</b> {course.price}
        </p>
        <p className="text-lg lg:mb-10"> {course.incentives}</p>
        <div className="mt-5">
          <PageLink label={"Sign Up Today"} href="/training/multiply/signup" />
        </div>
      </div>
    </div>
  );
};

export default MultiplyCourse;
