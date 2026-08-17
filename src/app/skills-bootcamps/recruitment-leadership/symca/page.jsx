import BootcampCoursePage from "@/components/training/bootcamp/BootcampCoursePage";
import { bootcampCourses, bootcampCourseList } from "@/components/data/training/bootcampCourses";

export const metadata = {
  title: "Pathway to Recruitment Leadership (SYMCA) | Quack Recruitment & Training",
  description:
    "Start a career in recruitment with the Pathway to Recruitment Leadership Skills Bootcamp delivered in partnership with the South Yorkshire Mayoral Combined Authority (SYMCA). Gain practical recruitment, sales, and client management skills.",
  keywords: [
    "Recruitment training",
    "Recruitment bootcamp",
    "SYMCA Skills Bootcamp",
    "Recruitment consultant training",
    "Recruitment resourcer training",
    "Recruitment careers UK",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function ECW() {
  const course = bootcampCourses.recruitmentSymca;
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>

      <BootcampCoursePage course={course} allCourses={bootcampCourseList} />
    </>
  );
}

export default ECW;
