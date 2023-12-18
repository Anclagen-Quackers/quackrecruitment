import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "../../components/Sections/Section";
import Link from "next/link";
import FadeInFreeTextSection from "@/components/Sections/FadeInFreeFormatSection";

export const metadata = {
  title: "Legal | Quack Recruitment & Training",
  description:
    "Learn about the legal aspects of Quack Recruitment Ltd, a GLAA license holder with comprehensive insurance coverages. Find our registered office details, contact information, and more.",
  keywords: [
    "Quack Recruitment Legal Information",
    "GLAA License Holder",
    "Registered Office Details",
    "Professional Indemnity",
    "Public Liability Insurance",
    "Employers' Liability Insurance",
    "Legal Notice Quack Recruitment",
    "Company Contact Information",
    "Recruitment Insurance Coverage",
    "Legal Compliance in Recruitment",
    "Quack Recruitment Contact Details",
    "Recruitment Agency Legal Aspects",
    "Comprehensive Insurance Policies",
    "Business Legal Information",
    "Recruitment Legal Standards",
    "Regulatory Compliance",
    "Recruitment Industry Insurance",
    "Professional Recruitment Services",
    "Recruitment Agency Registration",
    "Legal Transparency",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const Legal = () => {
  return (
    <>
      <main className="flex flex-col">
        <BannerHalf
          title="Legal"
          slogan="A Dedicated & Experienced Team Of Experts"
          imgSrc="/images/banners/pexels-yan-krukau-7691705.jpg"
          imgAlt="Group opf people looking at a computer"
          position="top"
        />

        <Section bgColor="bg-zinc-200">
          <FadeInFreeTextSection title="Legal Notice" imageSrc="/images/pexels-yan-krukau-8867482.jpg" imageAlt="Description" reverse={true}>
            <p className="mt-4 text-lg leading-6">Name of Company: Quack Recruitment Ltd</p>
            <p className="mt-4 text-lg leading-6">Registered Office: Business & Technology Centre, Bessemer Drive, Stevenage, Herts, SG1 2DX</p>
            <p className="mt-4 text-lg leading-6">Email: hello@quackrecruitment.co.uk</p>
            <p className="mt-4 text-lg leading-6">Phone Number: 0333 577 0036</p>
            <p className="mt-4 text-lg leading-6">We are a GLAA License holder and our insurance levels are setup to support our clients needs as follows:</p>
            <ul className="mt-1 ms-4 list-disc">
              <li>Public Liability = £10m</li>
              <li>{"Employers' Liability = £10m"}</li>
              <li>Professional Indemnity = £10m </li>
            </ul>
            <Link
              prefetch={false}
              rel="noopener noreferrer"
              href="/legal/privacy-policy"
              className={`mt-6 py-4 px-6 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mx-auto bg-quackred-900 hover:bg-quackred-600 hover:text-white text-white py-2 px-5 font-semibold rounded w-fit flex`}
            >
              Privacy Policy
            </Link>
          </FadeInFreeTextSection>
        </Section>
      </main>
    </>
  );
};

export default Legal;
