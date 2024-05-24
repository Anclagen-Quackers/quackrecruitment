import Section from "@/components/Sections/Section";
import BannerHalf from "@/components/Banner/BannerHalf";
import AllPolicies from "@/components/templates/AllPolicies";

export const metadata = {
  title: "Our Policies | Quack Recruitment & Training",
  description: "Explore Quack Group Ltd's Policies, including GDPR Compliance, Data Protection, and Personal Information Security.",
  keywords: [
    "Quack Group",
    "Quack Group Privacy Policy",
    "GDPR Compliance",
    "Data Protection",
    "Personal Information Security",
    "Data Controller Quack Group",
    "Candidate Privacy",
    "Supplier Data Privacy",
    "Client Information Security",
    "Employee Data Protection",
    "Website User Privacy",
    "Personal Data Usage",
    "Privacy Notice",
    "Data Collection Policies",
    "Information Handling",
    "Privacy Standards",
    "Confidentiality and Privacy",
    "Bank Details Security",
    "Tax Information Privacy",
    "Personal Data Rights",
    "Information Privacy Compliance",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const Policies = () => {
  return (
    <>
      <main className="flex flex-col">
        <BannerHalf title="Our Policies" slogan="Access All Our Policies Here" imgSrc="/images/banners/privacy-banner.jpg" imgAlt="Privacy Policy" position="top" />
        <Section bgColor="bg-gray-50">
          <AllPolicies />
        </Section>
      </main>
    </>
  );
};

export default Policies;
