import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "../../components/Sections/Section";
import CardSection from "../../components/Sections/CardSection";
import { ProfileCard } from "../../components/Card";
import FourImageStretch from "../../components/Sections/FourImageFeature/FourImageStretch";
import FadeInFreeTextSection from "@/components/Sections/FadeInFreeFormatSection";

export const metadata = {
  title: "About | Quack Recruitment & Training",
  description:
    "Discover Quack Recruitment & Training - Your Partner in Talent Acquisition and Professional Development. Specializing in recruitment and training for temporary, permanent, and managed services across diverse industries, we're dedicated to offering tailored solutions that align with your organizational needs and fostering a skilled workforce.",
  keywords: [
    "Quack Group",
    "Quack Recruitment",
    "Quack Recruitment & Training",
    "Talent Acquisition",
    "Professional Development",
    "Recruitment Agency",
    "Temporary Staffing Solutions",
    "Permanent Staff Recruitment",
    "Managed Services",
    "Industry-Specific Recruitment",
    "Training Programs",
    "Administration and Customer Service Training",
    "CSCS Courses",
    "SIA Certification",
    "Workforce Development",
    "Tailored Recruitment Services",
    "National Recruitment Agency",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const About = () => {
  return (
    <>
      <main className="flex flex-col">
        <BannerHalf
          title="About"
          slogan="A Dedicated & Experienced Team Of Experts"
          imgSrc="/images/banners/pexels-yan-krukau-7691705.jpg"
          imgAlt="Group opf people looking at a computer"
          position="top"
        />
        <Section bgColor="bg-zinc-200">
          <FourImageStretch
            title="Who We Are"
            reverse={false}
            dark={false}
            images={[
              { src: "/images/pexels-yan-krukau-8867265.jpg", alt: "Office workers at their desks" },
              { src: "/images/pexels-yan-krukau-8866793.jpg", alt: "Team photo in the office" },
              { src: "/images/pexels-mart-production-7709219.jpg", alt: "Office workers at their desks" },
              { src: "/images/pexels-yan-krukau-8867482.jpg", alt: "another team photo in the office" },
            ]}
          >
            <div className="px-6 lg:p-0">
              <p className="mt-4 text-lg leading-6">
                Welcome to Quack Recruitment & Training, where our mission is to redefine excellence in talent acquisition and professional development. As a national recruitment agency, we specialise
                in catering to the diverse needs of the temporary, permanent, and managed services sectors. Our commitment to precision and understanding the unique requirements of each industry sets
                us apart.
              </p>
              <h3 className="mt-4 text-lg leading-6 font-semibold"> Recruitment Division</h3>
              <p className="mt-4 text-lg leading-6">
                {`Navigating the dynamic and ever changing landscapes of recruitment, we pride ourselves on sourcing the best candidates to meet your organisation's demands. Whether you're seeking
              temporary staff for project peaks, permanent team members, or comprehensive managed services, we tailor our approach to ensure a seamless fit with your company culture and objectives.`}
              </p>
              <h3 className="mt-4 text-lg leading-6 font-semibold"> Training Division</h3>
              <p className="mt-4 text-lg leading-6">
                {`At the core of our business, we have a dedicated Training Division committed to shaping the future workforce. Our comprehensive Level 3 courses cover key areas such as Administration &
              Customer Service, CSCS, SIA and many more. We believe in equipping individuals with the skills and knowledge needed to excel in their roles, fostering professional growth and
              contributing to the success of businesses.`}
              </p>
            </div>
          </FourImageStretch>
        </Section>
        <Section bgColor="bg-gray-50">
          <FadeInFreeTextSection title="Why Choose Quack Recruitment & Training?" imageSrc="/images/pexels-yan-krukau-8867482.jpg" imageAlt="Description" reverse={true}>
            <p className="mt-4 text-lg leading-6">
              <b>Holistic Solutions:</b> We go beyond recruitment, offering a holistic approach that includes talent acquisition and comprehensive training programs.
            </p>
            <p className="mt-4 text-lg leading-6">
              <b>Industry Insight:</b> Our experienced team understands the nuances of various industries, ensuring we match candidates with the right skills and cultural fit.
            </p>
            <p className="mt-4 text-lg leading-6">
              <b>Professional Development:</b> The success of our Training Division lies in empowering individuals to excel in their roles, contributing to the growth of both individuals and
              businesses.
            </p>
            <p className="mt-4 text-lg leading-6">
              <b>Tailored Services:</b>
              {` Whether you're a startup, a growing business, or an established enterprise, our services are customised to meet your specific needs.`}
            </p>
            <p className="mt-4 text-lg leading-6">
              Partner with Quack Recruitment & Training, for a strategic alliance that goes beyond conventional recruitment. Experience a journey where every placement is not just a transaction but a
              step towards a thriving and skilled workforce.
            </p>
          </FadeInFreeTextSection>
        </Section>
      </main>
    </>
  );
};

export default About;
