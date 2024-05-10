import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { multiplyCourses } from "@/components/data/training/multiplyCourses";
import MultiplyCourse from "@/components/templates/MultiplyCourse";

export const metadata = {
  title: `Construction Skills Certification Scheme | Quack Recruitment & Training`,
  description: `Prepare for success in the construction industry through our CSCS training.`,
  keywords: ["Quack Recruitment & Training", "Training", "CSCS", "Construction Skills Certification Scheme"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const livingWithNumbersPage = () => {
  const course = multiplyCourses[1];

  return (
    <>
      <main className="flex flex-col">
        <BannerHalf title={course.title} slogan={course.slogan} imgSrc={course.bannerImage} imgAlt={course.bannerImageAlt} position={course.bannerPosition} />
        <Section bgColor="bg-gray-50">
          <MultiplyCourse course={course} />
        </Section>
      </main>
    </>
  );
};

export default livingWithNumbersPage;
