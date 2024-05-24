import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import DetailsSection from "@/components/Sections/DetailsSection";
import CourseCard from "@/components/Card/CourseCard";
import { multiplyCourses } from "@/components/data/training/multiplyCourses";

export const metadata = {
  title: "Multiply | Quack Recruitment & Training",
  description: "Enhance your numeracy skills with Quack Recruitment & Training's free courses, designed to improve your daily life and career prospects.",
  keywords: ["Quack Group", "Quack Recruitment", "Multiply Training Courses"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function Training() {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main className="flex flex-col">
        <BannerHalf title="Multiply" slogan="Empower Your Prospects With Numbers!" imgSrc="/images/banners/math-class-banner.jpg" imgAlt="People engaging in numeracy activities" position="center" />
        <Section bgColor="bg-white">
          <DetailsSection
            title={"Multiply Your Potential with Quack Recruitment & Training"}
            logos={[{ src: "/footer/skills_for_life_multiple_logo.png", alt: "Multiply Logo" }]}
            logoBgColor={"bg-black"}
            content={[
              "As a proud partner of the Multiply initiative, Quack Recruitment & Training is excited to offer free numeracy courses designed to enhance your ability to work with numbers in everyday life and professional settings. From helping you manage your finances to improving your job performance, our courses provide valuable skills.",
              "If you're 19 or older, don't have a math GCSE at grade C or equivalent, and live in [specify area], you're eligible to participate in these courses. Whether you're starting from scratch or looking to build on existing knowledge, we have a range of options to suit your needs.",
              "Check out and explore the full list of courses available below and enroll today to start your journey to a brighter future!",
            ]}
            detailsTitle={"What Do Multiply Courses Offer?"}
            details={[
              { title: "Boost Your Numeracy Confidence", detail: "Unlock your potential, and elevate your comfort with numbers and turn anxiety into achievement.." },
              { title: "Practical Numeracy Skills", detail: "Master daily math and effortlessly handle everyday calculations from budgeting your expenses to optimizing your garden." },
              {
                title: "Pathway to Certifications",
                detail: "Advance academically, embarking on a journey that could lead to obtaining key qualifications like GCSEs or Functional Skills Qualifications.",
              },
              {
                title: "Career Enhancement",
                detail: "Elevate your professional life, propelling your career forward with improved math skills, unlocking better job opportunities, higher earnings, and enhanced well-being.",
              },
            ]}
          />
        </Section>
        {/* <Section bgColor="bg-gray-50">
          <h2>partners and providers</h2>
          <div className="flex flex-wrap justify-center">
            <img src="/footer/Kent-Council.jpg" alt="Kent Council Logo" className="w-1/3 md:w-1/4 lg:w-1/5 mx-4 my-4" />
          </div>
        </Section> */}
        <Section bgColor="bg-gray-50">
          <h2 className="text-3xl text-center mb-10 font-semibold">Featured Courses</h2>
          <div className="flex flex-wrap justify-center">
            {multiplyCourses &&
              multiplyCourses.map((course, index) => (
                <CourseCard key={index} title={course.title} description={course.description} enrollmentMessage={"Multiply Your Potential Today!"} locations={course.locations} link={course.link} />
              ))}
          </div>
        </Section>
      </main>
    </>
  );
}

export default Training;
