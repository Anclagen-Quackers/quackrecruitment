import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { multiplyCourses } from "@/components/data/training/multiplyCourses";
import MultiplyCourse from "@/components/templates/MultiplyCourse";

export const metadata = {
  title: `Working with Numbers | Quack Recruitment & Training`,
  description: `Basic maths skills (KS2 Sats), to increase basic maths abilities in relation to work, topics to include; problem-solving, reasoning, and decision-making.`,
  keywords: ["Quack Recruitment & Training", "Training", "Multiple", "Working with Numbers"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const livingWithNumbersPage = () => {
  const course = multiplyCourses[0];

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
