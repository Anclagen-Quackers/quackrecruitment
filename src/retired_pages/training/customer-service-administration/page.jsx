import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import { courses } from "@/components/data/training/courses";
import PageLink from "@/components/PageLink";
import TrainingCourse from "@/components/templates/TrainingCourse";

export const metadata = {
  title: `Customer Service & Administration | Quack Recruitment & Training`,
  description: `Unlock the skills needed to excel in administrative roles.`,
  keywords: [
    "Quack Recruitment & Training",
    "Training",
    "Customer Service",
    "Administration",
    "Customer Service Course",
    "Administration Course",
    "Customer Service Training",
    "Administration Training",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const CustomerServiceAdministrationPage = () => {
  const course = courses[0];

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

export default CustomerServiceAdministrationPage;
