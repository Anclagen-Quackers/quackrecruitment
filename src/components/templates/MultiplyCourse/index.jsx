import PageLink from "@/components/PageLink";
import Section from "@/components/Sections/Section";
import MultiplySignUpForm from "@/components/ContactForms/MultiplySignUpForm";

const MultiplyCourse = ({ course }) => {
  return (
    <div className="lg:flex col sm:p-10 xl:px-10 mx-auto flex-wrap">
      <div className="lg:w-2/3 sm:ps-5 lg:pe-20 xl:pe-32">
        <section>
          <h2 className="text-4xl font-bold text-center mb-10">{course.title}</h2>
          {course.description && <p className="text-lg font-semibold leading-6 text-gray-900 mb-6">{course.description}</p>}
          <div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                className="py-4 px-6 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mx-auto bg-quackred-800 hover:bg-quackred-600 hover:bg-quackred-600 text-white font-semibold rounded w-fit flex"
                href="https://qrt.magn8.co.uk/online/index.php"
                target="_blank"
              >
                Sign Up Today{" "}
              </a>
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
          {course.whyChoose && (
            <>
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
            </>
          )}
        </section>
      </div>
      <section className="lg:w-1/3 bg-quackred-50 mt-10 lg:mt-16 p-5 xl:p-10 rounded-xl h-fit shadow-xl mb-9">
        <h3 className="text-4xl font-bold text-center mb-6">Course Information</h3>

        <img src={"/footer/skills_for_life_multiple_logo.png"} alt={"multiply logo"} className="w-full h-auto bg-white p-1 w-2/3 md:w-1/3 lg:w-2/3 mx-auto my-4" />

        <p className="mb-3 text-lg">
          <b>Course Duration:</b> {course.learningHours} hours
        </p>
        <p className="mb-3 text-lg">
          <b>Course Locations:</b> {course.locations.join(", ")}
        </p>
        <p className="mb-1 text-lg">
          <b>Course Cost:</b> Free, for eligible candidates.
        </p>
        <p className="text-lg lg:mb-10">
          <b>Incentives:</b> {course.incentives}
        </p>
        <div className="mt-5">
          <a
            className="py-4 px-6 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mx-auto bg-quackred-800 hover:bg-quackred-600 hover:bg-quackred-600 text-white font-semibold rounded w-fit flex"
            href="https://qrt.magn8.co.uk/online/index.php"
            target="_blank"
          >
            Sign Up Today{" "}
          </a>
        </div>
      </section>
    </div>
  );
};

export default MultiplyCourse;
