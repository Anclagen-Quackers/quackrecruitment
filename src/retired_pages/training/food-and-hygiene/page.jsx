import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { courses } from "@/components/data/training/courses";
import TrainingCourse from "@/components/templates/TrainingCourse";

export const metadata = {
  title: `Food and Hygiene | Quack Recruitment & Training`,
  description: `Ensure food safety and hygiene with our specialized courses.`,
  keywords: ["Quack Recruitment & Training", "Training", "Food and Hygiene", "Food and Hygiene Course", "Food and Hygiene Training"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const FoodAndHygieneCoursesPage = () => {
  const course = courses[3];

  return (
    <>
      <main className="flex flex-col">
        <BannerHalf title={course.banner} slogan={course.description} imgSrc={course.bannerImage} imgAlt={course.bannerImageAlt} position={course.bannerPosition} />
        <Section bgColor="bg-gray-50">
          <TrainingCourse course={course} />
        </Section>
      </main>
    </>
  );
};

export default FoodAndHygieneCoursesPage;
