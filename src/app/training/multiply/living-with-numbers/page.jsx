import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { multiplyCourses } from "@/components/data/training/multiplyCourses";
import MultiplyCourse from "@/components/templates/MultiplyCourse";

export const metadata = {
  title: `Living with Numbers | Quack Recruitment & Training`,
  description: `Basic maths skills (KS2), including but not limited to, understanding numbers to support health and well-being such as adding calories or saturated fats in foods, or support with cooking when measuring ingredients, and using numbers to help with working out bills, and debts.`,
  keywords: ["Quack Recruitment & Training", "Training", "Multiply", "Living with Numbers"],
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
