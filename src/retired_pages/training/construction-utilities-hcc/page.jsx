import BootcampCoursePage from "@/components/training/bootcamp/BootcampCoursePage";
import { bootcampCourses, bootcampCourseList } from "@/components/data/training/bootcampCourses";

export const metadata = {
  title:
    "Pathway to Construction Utilities (HCC) | Quack Recruitment & Training",
  description:
    "Register your interest in the Hampshire County Council Pathway to Construction Utilities Skills Bootcamp delivered by Quack Recruitment & Training.",
  keywords: [
    "Hampshire Skills Bootcamp",
    "Construction utilities bootcamp",
    "HCC Skills Bootcamp",
    "CSCS Labourer Card training",
    "Construction training Hampshire",
    "Civils utilities training",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function ConstructionUtilitiesHcc() {
  const course = bootcampCourses.constructionUtilitiesHcc;
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>

      <BootcampCoursePage course={course} allCourses={bootcampCourseList} />
    </>
  );
}

export default ConstructionUtilitiesHcc;
