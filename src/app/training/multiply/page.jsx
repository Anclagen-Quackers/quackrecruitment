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
        <BannerHalf title="Multiply" slogan="Empower Your Life with Numbers!" imgSrc="/images/banners/math-class-banner.jpg" imgAlt="People engaging in numeracy activities" position="center" />
        <Section bgColor="bg-white">
          <DetailsSection
            title={"Multiply Your Potential with Quack Recruitment & Training"}
            content={[
              "As a proud partner of the Multiply initiative, Quack Recruitment & Training is excited to offer free numeracy courses designed to enhance your ability to work with numbers in everyday life and professional settings. From helping you manage your finances to improving your job performance, our courses provide valuable skills.",
              "If you're 19 or older, don't have a math GCSE at grade C or equivalent, and live in [specify area], you're eligible to participate in these courses. Whether you're starting from scratch or looking to build on existing knowledge, we have a range of options to suit your needs.",
              "Contact our team at [phone number/email] or visit [website/link] for more details and to explore the full list of courses available.",
            ]}
            detailsTitle={"Why Choose Quack Recruitment & Training's Multiply Courses?"}
            details={[
              { title: "Expert Instructors", detail: "Our instructors bring real-world experience to the classroom, ensuring you learn practical, applicable skills." },
              { title: "Tailored Learning Experiences", detail: "Courses are designed to fit different learning styles and schedules, making education accessible to everyone." },
              { title: "Certifications and Progression", detail: "Gain recognized qualifications that can boost your employability and career advancement." },
              { title: "Comprehensive Support", detail: "Benefit from full support throughout your learning journey, from enrollment to course completion." },
              { title: "Impact on Career and Wellbeing", detail: "Improving your numeracy skills can lead to better job prospects, higher earnings, and enhanced personal wellbeing." },
            ]}
          />
        </Section>
        <Section bgColor="bg-gray-50">
          <h2 className="text-3xl text-center mb-10 font-semibold">Featured Courses</h2>
          <div className="flex flex-wrap justify-center">
            {multiplyCourses &&
              multiplyCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  points={course.whatYouLearn}
                  enrollmentMessage={course.enrolmentMessage}
                  price={course.price}
                  locations={course.locations}
                  link={course.link}
                />
              ))}
          </div>
        </Section>
      </main>
    </>
  );
}

export default Training;
