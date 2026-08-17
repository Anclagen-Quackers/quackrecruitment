import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { courses } from "@/components/data/training/courses";
import TrainingCourse from "@/components/templates/TrainingCourse";

// export const metadata = {
//   title: `${courses[5].title} | Quack Recruitment & Training`,
//   description: `${courses[5].description}`,
//   keywords: ["Quack Recruitment & Training", "Training", "CSCS", "Construction Skills Certification Scheme"],
//   authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
// };

export const metadata = {
  title: `Welding | Quack Recruitment & Training`,
  description: `${"Master the art of welding with our Level 3 Welding Course."}`,
  keywords: ["Quack Recruitment & Training", "Training", "Welding", "Welding Course", "Welding Training"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const WeldingPage = () => {
  const course = courses[5];

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

export default WeldingPage;
