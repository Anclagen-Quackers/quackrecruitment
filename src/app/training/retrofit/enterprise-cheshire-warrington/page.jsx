import BootcampCoursePage from "@/components/training/bootcamp/BootcampCoursePage";
import { bootcampCourses } from "@/components/data/training/bootcampCourses";

export const metadata = {
  title: "Retrofit (ECW) | Quack Recruitment & Training",
  description:
    "Transform your future with free retrofit training! Learn about the Pathways to Retrofit Excellence programme and how it can help you build a rewarding career in the growing retrofit industry.",
  keywords: ["Quack Group", "Quack Recruitment", "Multiply Training Courses"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function ECW() {
  const course = bootcampCourses.retrofitEcw;
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>

      <BootcampCoursePage course={course} />
    </>
  );
}

export default ECW;
