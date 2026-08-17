import BootcampCoursePage from "@/components/training/bootcamp/BootcampCoursePage";
import { bootcampCourses, bootcampCourseList } from "@/components/data/training/bootcampCourses";

export const metadata = {
  title: "Pathway to Retrofit Excellence (WMCA) | Quack Recruitment & Training",
  description:
    "Train for a career in retrofit and sustainable construction with the Pathway to Retrofit Excellence Skills Bootcamp delivered in partnership with the West Midlands Combined Authority (WMCA).",
  keywords: [
    "Retrofit training",
    "WMCA Skills Bootcamp",
    "Retrofit installer training",
    "Energy efficiency retrofit course",
    "Green construction training",
    "Retrofit careers UK",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function WMCA() {
  const course = bootcampCourses.retrofitWmca;
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>

      <BootcampCoursePage course={course} allCourses={bootcampCourseList} />
    </>
  );
}

export default WMCA;
