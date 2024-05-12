import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { multiplyCourses } from "@/components/data/training/multiplyCourses";
import MultiplyCourse from "@/components/templates/MultiplyCourse";

export const metadata = {
  title: `Qualify with Numbers | Quack Recruitment & Training`,
  description: `aimed at learners who wish to develop their skills in mathematics to help them gain their first formal accredited Maths qualification - Functional Skills Level 1 - 603/4996/7`,
  keywords: ["Quack Recruitment & Training", "Training", "Multiply", "Qualify with Numbers"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const livingWithNumbersPage = () => {
  const course = multiplyCourses[2];

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
