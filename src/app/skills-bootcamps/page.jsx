import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import BootcampCourseCard from "@/components/training/bootcamp/BootcampCourseCard";
import { bootcampCourseList } from "@/components/data/training/bootcampCourses";
import Link from "next/link";

const highlights = [
  "Government-funded Skills Bootcamp pathways",
  "Practical, career-focused training",
  "Employer engagement and progression support",
  "Learner support throughout the programme",
];

const supportItems = [
  {
    title: "For Learners",
    text: "Build job-ready skills, gain sector knowledge and access support with CVs, interviews and progression.",
  },
  {
    title: "For Employers",
    text: "Connect with learners preparing for entry-level and progression roles across priority sectors.",
  },
  {
    title: "For Partners",
    text: "View the funded Skills Bootcamp pathways Quack Recruitment & Training delivers with local authority partners.",
  },
];

export const metadata = {
  title: "Skills Bootcamps | Quack Recruitment & Training",
  description:
    "Explore Quack Recruitment & Training Skills Bootcamps, including construction, retrofit and recruitment pathways delivered with public funding partners.",
  keywords: [
    "Skills Bootcamps",
    "Skills for Life bootcamps",
    "Funded training",
    "Construction bootcamp",
    "Retrofit bootcamp",
    "Recruitment bootcamp",
    "Quack Recruitment and Training",
  ],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function SkillsBootcampsPage() {
  return (
    <main className="flex flex-col">
      <BannerHalf
        title="Skills Bootcamps"
        slogan="Practical Skills Bootcamp pathways with funded options and clear employment progression."
        imgSrc="/images/banners/training-banner.jpg"
        imgAlt="Learners taking part in training"
        position="center"
      />

      <Section bgColor="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-quackred-700">
                Skills for Life Bootcamps
              </p>
              <h2 className="mb-6 text-3xl font-semibold lg:text-5xl">
                Explore funded Skills Bootcamp pathways with clear progression support
              </h2>
              <p className="max-w-4xl text-lg leading-8 text-gray-800">
                Quack Recruitment & Training delivers Skills Bootcamps with public funding partners
                to help learners build practical sector knowledge, gain relevant qualifications and
                progress towards employment or career advancement.
              </p>
              <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Skills Bootcamp funding
                </h3>

                <p className="text-base leading-7 text-gray-800">
                  Skills Bootcamps are government funded for eligible individual learners. Employers
                  using Skills Bootcamps to upskill existing employees may be required to contribute
                  towards the cost of training.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-quackred-100 bg-quackred-50 p-6 shadow-lg">
              <img
                src="/footer/skills_for_life_multiple_logo.png"
                alt="Skills for Life logo"
                className="mx-auto mb-6 max-h-20 w-auto max-w-full rounded bg-white p-3"
              />
              <h3 className="mb-4 text-2xl font-bold">At a glance</h3>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-7 text-gray-800"
                  >
                    <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-quackred-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-semibold lg:text-4xl">
            Current Skills Bootcamps
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-8 text-gray-800">
            Choose a programme to view course structure, qualifications, learner support,
            progression routes and application details.
          </p>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {bootcampCourseList.map((course) => (
              <BootcampCourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {supportItems.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-base leading-7 text-gray-800">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="bg-gray-900">
        <div className="mx-auto max-w-5xl text-center text-white">
          <h2 className="mb-4 text-3xl font-semibold lg:text-4xl">
            Interested in a Skills Bootcamp?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-gray-100">
            Register your interest and a member of the team will contact you with further
            information about available programmes, eligibility and next steps.
          </p>
          <Link
            prefetch={false}
            href="https://quackrecruitment.picsweb.co.uk/Guest/SignUp/Applicant/522f666796b8479c8d1ac1aac8d7f2b9"
            className="inline-flex rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 transition hover:bg-quackred-50"
          >
            Register Your Interest
          </Link>
        </div>
      </Section>
    </main>
  );
}

export default SkillsBootcampsPage;
