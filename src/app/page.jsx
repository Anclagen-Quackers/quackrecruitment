import BannerHome from "../components/Banner/BannerHome";
import Banner from "@/components/Banner";
import Section from "../components/Sections/Section";
import FadeInFreeTextSection from "@/components/Sections/FadeInFreeFormatSection";
import { CardMinimalIconTop } from "../components/Card";
import CardSection from "../components/Sections/CardSection";
import Link from "next/link";
import { keywords } from "../components/data/keywords";
import FourImageStretch from "@/components/Sections/FourImageFeature/FourImageStretch";
import CTASection from "../components/Sections/CTASection";
import MultiLinkCTASection from "@/components/Sections/MultiLinkCTASection";
import Head from "next/head";
import PageLink from "@/components/PageLink";
import HighlightCTA from "@/components/HighlightCTA";
import ProgrammeCard from "@/components/Card/ProgrammeCard";
import FeatureCard from "@/components/Card/FeatureCard";

export const metadata = {
  title: "Quack Recruitment & Training",
  description:
    "Welcome to Quack Recruitment & Training, we are one of the leading agencies in the home counties and we provide support to our contractors and clients on a national basis. Whatever you are looking for, get in touch with one of the team at Quack Recruitment & Training today.",
  keywords: [
    "Quack Recruitment & Training",
    "Quack Recruitment",
    "Quack Training",
    "Recruitment Solutions",
    "Training Programs",
    "On-Site Managed Services",
    "Temporary Staffing",
    "Permanent Recruitment",
    "Career Opportunities",
    "Job Listings",
    "GLAA Licensed",
    "Specialist Consultants",
    "Quality Recruitment Services",
    "Customized Recruitment Models",
    "Diverse Hiring Capabilities",
    "Industry Affiliations",
    "Warehouse & Logistics Training",
    "Customer Service Training",
    "CSCS Courses",
    "SIA Security Courses",
    "Certified Training",
    "Training Locations in UK",
  ],
  image:
    "https://quackrecruitmentandtraining.co.uk/logos/QRT-logo/QRT-black-transparent-centred.png",
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

const programmeRoutes = [
  {
    title: "Retrofit & Green Skills",
    description: "Explore funded retrofit training available across multiple authority areas.",
    href: "/skills-bootcamps/retrofit",
    image: "/images/banners/green-schemes-banner.jpg",
    imageAlt: "",
  },
  {
    title: "Construction & Utilities",
    description: "A funded Skills Bootcamp for learners in eligible Hampshire areas.",
    href: "/skills-bootcamps/construction-utilities/hcc",
    image: "/images/banners/contruction-utilities-banner.jpg",
    imageAlt: "",
  },
  {
    title: "Recruitment Leadership",
    description:
      "A funded Skills Bootcamp for learners in the South Yorkshire Mayoral Combined Authority area.",
    href: "/skills-bootcamps/recruitment-leadership/symca",
    image: "/images/banners/leadership-banner.jpg",
    imageAlt: "",
  },
];

const recruitmentLinks = [
  {
    label: "Job listings",
    href: "/recruitment/listings",
  },
  {
    label: "Permanent recruitment",
    href: "/recruitment/permanent",
  },
  {
    label: "Temporary recruitment",
    href: "/recruitment/temporary",
  },
  {
    label: "On-site managed services",
    href: "/recruitment/on-site-managed",
  },
];

const Home = () => {
  return (
    <>
      <div className="hidden quackred bg-quackred-200 bg-quackred-800 bg-quackred-700 bg-quackred-950 bg-quackred-900 bg-quackred-500 bg-quackred-600 bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      {/* <Head title="Home" description="Welcome to Quack Specialists, your local recruitment specialist." keywords={keywords} /> */}
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to Quack Specialists, your local recruitment specialist"
          key="description"
        />
        <meta name="keywords" content={keywords} key="keywords" />
      </Head>
      <main className="flex flex-col">
        <Banner
          eyebrow="Adult Skills Bootcamps"
          title={
            <>
              Employer-led Skills Bootcamps that help adults{" "}
              <span className="text-quackred">achieve, belong and thrive</span>
            </>
          }
          description={
            <>
              Practical, employer-led training designed to help adults build the skills, confidence
              and opportunities needed to progress in work.
            </>
          }
          imgSrc="/images/banners/home-skills-bootcamps-banner.jpg"
          imgAlt=""
          imagePosition="right"
          size="large"
          links={[
            {
              label: "Explore Skills Bootcamps",
              path: "/skills-bootcamps",
            },
          ]}
        />
        <Section bgColor="bg-zinc-200">
          <HighlightCTA
            eyebrow="Our Ofsted results"
            title="Significant Progress in Inclusion"
            href="/ofsted"
            linkLabel="Read our Ofsted report"
          >
            <p>
              The highest possible progress judgement for this theme at a new-provider monitoring
              inspection.
            </p>

            <p>
              Reasonable Progress in leadership and governance, curriculum, teaching and training,
              and safeguarding arrangements.
            </p>
          </HighlightCTA>
        </Section>
        <Section bgColor="bg-zinc-50">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                Our approach
              </p>

              <h2 className="mb-6 text-3xl font-bold text-gray-950 sm:text-4xl">
                Training with a clear purpose
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Our programmes are designed to help learners move from their individual starting
                  point towards a realistic employment or career goal.
                </p>

                <p>
                  Quack Recruitment & Training is an independent adult skills provider delivering
                  employer-led Skills Bootcamps designed around real labour-market demand.
                </p>

                <p>
                  We work with public-sector commissioners, employers and awarding organisations to
                  help adults develop new knowledge, skills and confidence and progress towards
                  sustainable employment or career advancement.
                </p>

                <p>
                  Our current provision includes construction, utilities, retrofit and green-skills
                  programmes, combining recognised qualifications, practical learning, employability
                  support and continued progression activity.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:p-8">
              <h3 className="mb-6 text-2xl font-bold text-quackred-800">Learners receive</h3>

              <ul className="space-y-5">
                {[
                  {
                    icon: "school",
                    text: "Structured vocational learning",
                  },
                  {
                    icon: "workspace_premium",
                    text: "Recognised qualifications where included within the programme",
                  },
                  {
                    icon: "support_agent",
                    text: "Careers information, advice and guidance",
                  },
                  {
                    icon: "calculate",
                    text: "English and maths support where required",
                  },
                  {
                    icon: "accessibility_new",
                    text: "SEND and reasonable-adjustment support",
                  },
                  {
                    icon: "work",
                    text: "Employability and interview preparation",
                  },
                  {
                    icon: "handshake",
                    text: "An offer of a relevant job interview for eligible unemployed learners who successfully complete the programme",
                  },
                  {
                    icon: "groups",
                    text: "Employer engagement and progression support",
                  },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined shrink-0 text-2xl text-quackred-800"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>

                    <p className="text-base leading-7 text-gray-800 mt-1">{item.text}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mx-auto mt-10 flex max-w-6xl justify-start">
            <PageLink href="/skills-bootcamps" label="Explore Current Skills Bootcamps" arrow />
          </div>
        </Section>
        <Section bgColor="bg-zinc-200">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                  Our programmes
                </p>

                <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
                  Build in-demand skills for a sustainable future
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {programmeRoutes.map((programme) => (
                <ProgrammeCard key={programme.title} {...programme} />
              ))}
            </div>
          </div>
        </Section>
        <Section bgColor="bg-zinc-50">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                Beyond the classroom
              </p>

              <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
                Training designed around employment and progression
              </h2>

              <p className="mt-5 text-lg leading-8 text-zinc-700">
                Employer engagement is central to our Skills Bootcamp model. We work with employers
                to understand recruitment needs, job roles and the knowledge and behaviours learners
                need to succeed in work.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <FeatureCard
                title="Shaped by employers"
                icon="groups"
                description="Employer feedback and labour-market demand help us keep training relevant to real roles and sector expectations."
              />

              <FeatureCard
                title="Preparing for work"
                icon="work"
                description="Learners can receive careers guidance, CV support, interview preparation and help understanding employer expectations."
              />

              <FeatureCard
                title="Continued progression"
                icon="trending_up"
                description="Where applicable, our team continues progression activity after programme completion to support learners towards employment or career progression."
              />
            </div>

            <div className="mt-8">
              <PageLink
                href="/skills-bootcamps"
                label="Explore Skills Bootcamps"
                arrow
                variant="outline"
              />
            </div>
          </div>
        </Section>
        <Section bgColor="bg-zinc-100">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                  Recruitment services
                </p>

                <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
                  Recruitment support for employers and jobseekers
                </h2>

                <div className="mt-5 space-y-4 text-lg leading-8 text-zinc-700">
                  <p>
                    Alongside our training provision, Quack Recruitment & Training continues to
                    support employers with recruitment and workforce needs.
                  </p>

                  <p>
                    We provide temporary, permanent and on-site managed recruitment services,
                    helping employers find suitable people while supporting candidates towards new
                    opportunities.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <PageLink href="/recruitment" label="Explore Recruitment" arrow />

                  <PageLink
                    href="/contact/register"
                    label="Register with us"
                    arrow
                    variant="outline"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-bold text-zinc-950">Recruitment services</h3>

                <ul className="mt-5 space-y-3">
                  {recruitmentLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        prefetch={false}
                        className="
            group flex items-center justify-between gap-3
            rounded-lg px-3 py-2
            text-zinc-700
            transition
            hover:bg-zinc-50 hover:text-quackred-800
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-quackred-700
          "
                      >
                        <span>{item.label}</span>

                        <span
                          className="
              material-symbols-outlined text-xl text-quackred-800
              transition-transform
              group-hover:translate-x-1
            "
                          aria-hidden="true"
                        >
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Home;
