import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { courses } from "@/components/data/training/courses";
import TrainingCourse from "@/components/templates/TrainingCourse";

export const metadata = {
  title: `Forklift Truck (FLT) | Quack Recruitment & Training`,
  description: `Master the art of forklift operation with our Level 3 FLT Course.`,
  keywords: ["Quack Recruitment & Training", "Training", "FLT", "Forklift Truck", "Forklift Truck Course", "Forklift Truck Training"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

// export const metadata = {
//   title: `${courses[4].title} | Quack Recruitment & Training`,
//   description: `${courses[4].description}`,
//   keywords: ["Quack Recruitment & Training", "Training", "CSCS", "Construction Skills Certification Scheme"],
//   authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
// };

const FLTPage = () => {
  const course = courses[4];

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

export default FLTPage;
