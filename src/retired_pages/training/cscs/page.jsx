import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { courses } from "@/components/data/training/courses";
import PageLink from "@/components/PageLink";
import TrainingCourse from "@/components/templates/TrainingCourse";

export const metadata = {
  title: `Construction Skills Certification Scheme | Quack Recruitment & Training`,
  description: `Prepare for success in the construction industry through our CSCS training.`,
  keywords: ["Quack Recruitment & Training", "Training", "CSCS", "Construction Skills Certification Scheme"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const CSCSPage = () => {
  const course = courses[1];

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

export default CSCSPage;
