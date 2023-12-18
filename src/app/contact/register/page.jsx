import Section from "@/components/Sections/Section";
import RegistrationForm from "@/components/ContactForms/RegistrationForm";

export const metadata = {
  title: "Register | Quack Recruitment & Training",
  description:
    "Register with Quack Recruitment & Training to discover exciting job opportunities. Fill out our simple form to connect with top employers and find roles that match your skills and career aspirations.",
  keywords: [
    "Quack Group",
    "Quack Recruitment",
    "Job Applicant Registration",
    "Quack Recruitment & Training",
    "Career Opportunities",
    "Submit Resume",
    "Employment Application",
    "Job Search",
    "Find Jobs",
    "Career Registration Form",
    "Connect with Employers",
    "Job Matching",
    "Work in Desired Industry",
    "Employment Opportunities",
    "Apply for Jobs Online",
    "Professional Career Development",
  ],
  image: "https://quackrecruitmentandtraining.co.uk/logos/QRT-logo/QRT-black-transparent-centred.png",
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const RegisterPage = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main className="flex flex-col">
        <Section bgColor="bg-gray-50">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold leading-8 text-black sm:text-3xl sm:leading-9 text-center mb-10">Register With Us</h2>
            <RegistrationForm />
          </div>
        </Section>
      </main>
    </>
  );
};

export default RegisterPage;
