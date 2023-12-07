import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import ExpandableSectionFAQ from "@/components/ExpandableSection/ExpandableSectionFAQ";
import RecruitmentQuery from "@/components/ContactForms/RecruitmentQuery/RecruitmentQuery";
import recruitmentPages from "@/components/data/recruitmentPages";
import Link from "next/link";

export const metadata = {
  title: `${recruitmentPages[0].title} | Quack Recruitment & Training`,
  description: "TBD",
  keywords: ["TBD"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const TemporaryRecruitment = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main>
        <BannerHalf
          title="Temporary Recruitment"
          slogan="Flexible Talent Solutions, Tailored for Success"
          imgSrc="images/banners/pexels-pixabay-162553.jpg"
          imgAlt="Descriptive Image Alt Text"
          links={[]}
        />
        <Section bgColor="bg-zinc-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Why Choose Us</h2>
            <p className="mb-6">{recruitmentPages[0].introduction}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recruitmentPages[0].sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">{section.heading}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {section.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-gray-600">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section bgColor="bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Temporary Recruitment FAQ</h2>
          <div className="mx-auto max-w-screen-md rounded-lg border border-violet-900 overflow-hidden">
            <ExpandableSectionFAQ title="How quickly can you fill a temporary position?">
              <p>We pride ourselves on our swift response times. Depending on the specifics of the role and our current talent pool, we can often fill positions within a few days to a week.</p>
            </ExpandableSectionFAQ>

            <ExpandableSectionFAQ title="What types of roles can you provide temporary staff for?">
              <p>
                We cover a wide range of industries and roles, from administrative and customer service positions to specialized roles in IT, finance, and more. Our diverse talent pool ensures we can
                meet your varied temporary staffing needs.
              </p>
            </ExpandableSectionFAQ>

            <ExpandableSectionFAQ title="Are temporary staff vetted for qualifications and experience?">
              <p>
                Absolutely. Every candidate undergoes a thorough vetting process including skill assessments, reference checks, and interviews to ensure they meet our high standards and are a good fit
                for your specific requirements.
              </p>
            </ExpandableSectionFAQ>

            <ExpandableSectionFAQ title="Can we hire a temporary worker permanently if they're a good fit?">
              <p>
                Yes, many of our clients find great value in transitioning temporary workers to permanent roles. We facilitate this process to ensure a smooth transition that benefits both the
                employee and your organization.
              </p>
            </ExpandableSectionFAQ>
          </div>
        </Section>
        <Section bgColor="bg-zinc-200">
          <RecruitmentQuery />
        </Section>
        <Section bgColor="bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Check Out Our Other Services</h2>
          <div className="flex flex-wrap">
            <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
              <h3 className="mt-4 text-xl font-semibold leading-6">On-Site Managed Services Recruitment</h3>
              <p className="mt-4 text-lg leading-6 flex-grow">
                Transform your recruitment process with our On-Site Managed Services. Benefit from dedicated teams that integrate seamlessly with your HR department, offering scalable and
                cost-efficient staffing solutions. We specialize in tailoring recruitment strategies for continuous improvement and operational effectiveness, ensuring your workforce needs are met
                with precision and agility.
              </p>
              <Link
                href="/recruitment/on-site-managed"
                class="mt-6 py-2 px-4 block bg-violet-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
              <h3 className="mt-4 text-xl font-semibold leading-6">Temporary Recruitment Services</h3>
              <p className="mt-4 text-lg leading-6 flex-grow">
                {`Elevate your workforce with Quack Recruitment & Training's Temporary Recruitment Services. Experience unparalleled flexibility with our customized staffing solutions, tailored to meet project demands and adapt to workload fluctuations. Benefit from swift placements, industry-specific expertise, and cost-effective workforce management, ensuring efficiency and quality in every hire.`}
              </p>
              <Link
                href="/recruitment/temporary"
                class="py-2 px-4 block bg-violet-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  mt-6"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
              <h3 className="mt-4 text-xl font-semibold leading-6">Permanent Recruitment</h3>
              <p className="mt-4 text-lg leading-6 flex-grow">
                {
                  "Quack Recruitment & Training specializes in strategic permanent hiring. Our comprehensive candidate vetting and tailored recruitment strategies align with your company's culture and values, ensuring a perfect fit. Leverage our deep industry knowledge for high-quality, long-term placements, backed by our commitment to excellence and placement guarantees."
                }
              </p>
              <Link
                href="/recruitment/permanent"
                class="py-2 px-4 block bg-violet-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-6"
              >
                Learn More
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default TemporaryRecruitment;
