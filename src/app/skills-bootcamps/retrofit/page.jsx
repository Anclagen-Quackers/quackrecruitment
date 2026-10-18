import Banner from "@/components/Banner";
import Section from "@/components/Sections/Section";
import BootcampCourseCard from "@/components/training/bootcamp/BootcampCourseCard";
import { bootcampCourseGroups } from "@/components/data/training/bootcampCourses";

const retrofitHighlights = [
  {
    icon: "home_repair_service",
    title: "Practical retrofit training",
    text: "Build knowledge of retrofit, energy efficiency and sustainable construction.",
  },
  {
    icon: "workspace_premium",
    title: "Recognised qualifications",
    text: "Gain relevant qualifications where included within your chosen Skills Bootcamp.",
  },
  {
    icon: "work",
    title: "Career-focused support",
    text: "Access employability, interview and progression support throughout your programme.",
  },
  {
    icon: "groups",
    title: "Employer engagement",
    text: "Develop an understanding of employer expectations, vacancies and progression routes.",
  },
];

const retrofitOutcomes = [
  "Retrofit Installer",
  "Loft Insulation Installer",
  "Cavity Wall Installer",
  "Construction Operative",
  "Energy Efficiency Support Roles",
  "Wider Green Construction Opportunities",
];

const whyRetrofit = [
  {
    icon: "energy_savings_leaf",
    title: "Energy efficiency",
    text: "Retrofit helps improve existing homes and buildings so they use energy more efficiently.",
  },
  {
    icon: "trending_up",
    title: "Growing skills demand",
    text: "The transition towards more energy-efficient buildings is creating demand for retrofit and green construction skills.",
  },
  {
    icon: "construction",
    title: "Practical career routes",
    text: "Retrofit knowledge can support progression into insulation, construction, installation and related roles.",
  },
];

export const metadata = {
  title: "Retrofit & Green Skills | Quack Recruitment & Training",
  description:
    "Explore Quack Recruitment & Training Retrofit Skills Bootcamps, practical training in energy efficiency, retrofit and green construction with clear progression support.",
  keywords: [
    "Skills Bootcamps",
    "Retrofit training",
    "Retrofit installer training",
    "Energy efficiency training",
    "Green construction training",
    "Retrofit careers UK",
    "Quack Recruitment and Training",
  ],
};

function RetrofitPage() {
  const retrofitCourses = bootcampCourseGroups.retrofit;

  return (
    <main className="flex flex-col">
      <Banner
        eyebrow="Retrofit & Green Skills"
        title={
          <>
            Build practical skills for a{" "}
            <span className="text-quackred-800">greener built environment</span>
          </>
        }
        description="Explore Skills Bootcamp pathways focused on retrofit, energy efficiency and green construction, with practical training and clear progression support."
        imgSrc="/images/banners/green-schemes-banner.jpg"
        imgAlt=""
        imagePosition="right"
        size="default"
      />

      {/* Intro */}
      <Section bgColor="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                Retrofit Skills Bootcamps
              </p>

              <h2 className="max-w-4xl text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                Start your journey into retrofit and green construction
              </h2>

              <div className="mt-6 max-w-4xl space-y-4 text-lg leading-8 text-zinc-700">
                <p>
                  Quack Recruitment & Training delivers Skills Bootcamps designed to help learners
                  develop practical retrofit knowledge, understand energy efficiency and prepare for
                  progression within the green construction sector.
                </p>

                <p>
                  Programmes are delivered with public funding partners in different areas.
                  Eligibility, delivery arrangements and available cohorts vary by programme.
                </p>
              </div>

              <a
                href="#retrofit-bootcamps"
                className="
                  mt-7 inline-flex items-center gap-2 rounded-lg
                  bg-quackred-800 px-6 py-3
                  font-semibold text-white
                  transition hover:bg-quackred-600
                "
              >
                Explore Retrofit Skills Bootcamps
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  arrow_downward
                </span>
              </a>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-zinc-950">At a glance</h3>

              <ul className="mt-5 space-y-4">
                {[
                  "Funded Skills Bootcamp pathways",
                  "Practical, career-focused training",
                  "Retrofit and energy-efficiency knowledge",
                  "Employer engagement and progression support",
                  "Learner support throughout the programme",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-7 text-zinc-700"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-quackred-800"
                      aria-hidden="true"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-zinc-200 pt-5 text-sm leading-6 text-zinc-600">
                Funding and delivery arrangements depend on the individual programme and relevant
                funding requirements.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What is retrofit */}
      <Section bgColor="bg-zinc-100">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                Understanding retrofit
              </p>

              <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">What is retrofit?</h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-700">
                <p>
                  Retrofit is the process of improving existing homes and buildings so they are more
                  energy efficient, sustainable and better prepared for the future.
                </p>

                <p>
                  This can include improvements such as insulation, energy efficiency measures and
                  wider changes that help buildings retain heat, use less energy and reduce
                  emissions.
                </p>

                <p>
                  Skills Bootcamps can help learners develop the technical understanding, workplace
                  knowledge and employability skills needed to progress within retrofit and related
                  construction roles.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {whyRetrofit.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-2xl text-quackred-800"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>

                    <h3 className="text-xl font-bold text-zinc-950">{item.title}</h3>
                  </div>

                  <p className="mt-3 text-base leading-7 text-zinc-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why train with Quack */}
      <Section bgColor="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Your training
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              What learners can expect
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-700">
              Our Retrofit Skills Bootcamps combine sector knowledge, learner support and
              career-focused training to help learners move towards their next step.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {retrofitHighlights.map((item) => (
              <article
                key={item.title}
                className="
                  rounded-2xl border border-zinc-200
                  bg-white p-6 shadow-sm
                  transition hover:-translate-y-0.5 hover:shadow-md
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-2xl text-quackred-800"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>

                  <h3 className="text-xl font-bold text-zinc-950">{item.title}</h3>
                </div>

                <p className="mt-3 text-base leading-7 text-zinc-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Progression */}
      <Section bgColor="bg-zinc-100">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Careers and progression
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Where could retrofit training lead?
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-700">
              Retrofit training can support progression into practical site-based roles and wider
              opportunities across sustainable construction and energy-efficiency work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {retrofitOutcomes.map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-3 rounded-2xl
                  border border-zinc-200 bg-white
                  p-5 shadow-sm
                "
              >
                <span
                  className="material-symbols-outlined shrink-0 text-2xl text-quackred-800"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>

                <p className="font-semibold leading-7 text-zinc-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Courses */}
      <Section bgColor="bg-white">
        <div id="retrofit-bootcamps" className="mx-auto max-w-6xl scroll-mt-28">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Current provision
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Available Retrofit Skills Bootcamps
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-700">
              Explore our current Retrofit Skills Bootcamps and select the programme for your area
              to view eligibility, delivery, qualifications, learner support and application
              information.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {retrofitCourses.map((course) => (
              <BootcampCourseCard key={course?.slug} course={course} />
            ))}
          </div>
        </div>
      </Section>

      {/* Support */}
      <Section bgColor="bg-zinc-100">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-2xl text-quackred-800"
                aria-hidden="true"
              >
                diversity_1
              </span>

              <h2 className="text-2xl font-bold text-zinc-950">Need support before applying?</h2>
            </div>

            <p className="mt-4 text-base leading-7 text-zinc-700">
              Find out about learner support, SEND, reasonable adjustments and the support available
              throughout your Skills Bootcamp.
            </p>

            <a
              href="/learner-support"
              className="mt-5 inline-flex items-center gap-1 font-semibold text-quackred-800 hover:underline"
            >
              Learner Support, SEND & Inclusion
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-2xl text-quackred-800"
                aria-hidden="true"
              >
                accessibility_new
              </span>

              <h2 className="text-2xl font-bold text-zinc-950">Accessibility</h2>
            </div>

            <p className="mt-4 text-base leading-7 text-zinc-700">
              If you have an accessibility requirement or need adjustments to participate in
              training, you can find further information about the support available.
            </p>

            <a
              href="/accessibility"
              className="mt-5 inline-flex items-center gap-1 font-semibold text-quackred-800 hover:underline"
            >
              View accessibility information
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default RetrofitPage;
