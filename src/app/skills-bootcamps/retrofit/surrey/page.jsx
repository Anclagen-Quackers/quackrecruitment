import BootcampCoursePage from "@/components/training/bootcamp/BootcampCoursePage";
import { bootcampCourseList } from "@/components/data/training/bootcampCourses";
import { retrofitSurrey } from "@/components/data/training/retrofitBootCampCourses";

export const metadata = {
  title: "Pathway to Retrofit Excellence (Surrey) | Quack Recruitment & Training",
  description:
    "Join the Pathway to Retrofit Excellence Skills Bootcamp delivered with Surrey. Learn retrofit principles, energy efficiency, and sustainable construction skills for careers in the growing retrofit sector.",
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
  const course = retrofitSurrey;
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>

      <BootcampCoursePage course={course} allCourses={bootcampCourseList} />
    </>
  );
}

export default ECW;
