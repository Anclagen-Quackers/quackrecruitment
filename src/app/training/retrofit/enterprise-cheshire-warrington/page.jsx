import BootcampCoursePage from "@/components/training/bootcamp/BootcampCoursePage";
import { bootcampCourses, bootcampCourseList } from "@/components/data/training/bootcampCourses";

export const metadata = {
  title:
    "Pathway to Retrofit Excellence (Enterprise Cheshire & Warrington) | Quack Recruitment & Training",
  description:
    "Join the Pathway to Retrofit Excellence Skills Bootcamp delivered with Enterprise Cheshire & Warrington. Learn retrofit principles, energy efficiency, and sustainable construction skills for careers in the growing retrofit sector.",
  keywords: [
    "Retrofit training",
    "Retrofit Skills Bootcamp",
    "Enterprise Cheshire Warrington bootcamp",
    "Energy efficiency training",
    "Green construction training",
    "Retrofit installer training UK",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function ECW() {
  const course = bootcampCourses.retrofitEcw;
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>

      <BootcampCoursePage course={course} allCourses={bootcampCourseList} />
    </>
  );
}

export default ECW;
