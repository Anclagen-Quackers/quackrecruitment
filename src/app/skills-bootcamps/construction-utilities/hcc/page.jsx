import BootcampCoursePage from "@/components/training/bootcamp/BootcampCoursePage";
import { bootcampCourses, bootcampCourseList } from "@/components/data/training/bootcampCourses";

export const metadata = {
  title:
    "Pathway to Construction Utilities - Hampshire County Council Skills Bootcamp | Quack Recruitment & Training",
  description:
    "A practical Hampshire County Council Skills Bootcamp supporting learners into construction, civils and utilities roles across Hampshire.",
  keywords: [
    "Hampshire County Council Skills Bootcamp",
    "Pathway to Construction Utilities",
    "Construction utilities training Hampshire",
    "Civils operative training",
    "CSCS Labourer Card progression",
    "Quack Recruitment and Training",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function HampshireConstructionUtilitiesBootcamp() {
  const course = bootcampCourses.constructionUtilitiesHcc;

  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>

      <BootcampCoursePage course={course} allCourses={bootcampCourseList} />
    </>
  );
}

export default HampshireConstructionUtilitiesBootcamp;
