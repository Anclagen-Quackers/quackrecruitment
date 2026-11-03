import Banner from "@/components/Banner";
import FeatureCard from "@/components/Card/FeatureCard";
import HighlightCTA from "@/components/HighlightCTA";
import PageLink from "@/components/PageLink";
import Section from "@/components/Sections/Section";

export const metadata = {
  title: "About Us | Quack Recruitment & Training",
  description:
    "Learn about Quack Recruitment & Training, our employer-led Skills Bootcamps, learner support, recruitment services and commitment to quality adult education.",
};

const learnerFeatures = [
  {
    title: "Individual starting points",
    icon: "person_search",
    description:
      "We consider previous experience, prior learning, English and maths, career aspirations, confidence, support needs and barriers that may affect participation or progression.",
  },
  {
    title: "Appropriate challenge and support",
    icon: "trending_up",
    description:
      "We aim to challenge learners who already have relevant experience while providing additional support where it is needed.",
  },
  {
    title: "Safe, included and respected",
    icon: "diversity_3",
    description:
      "We want learners to feel respected, included and safe, and to know how to ask for help whenever they need it.",
  },
];

const organisationFeatures = [
  {
    title: "Our approach to employers",
    icon: "handshake",
    paragraphs: [
      "Employer engagement is central to our Skills Bootcamp model.",
      "We work with employers to understand recruitment needs, job roles, sector expectations and the knowledge and behaviours learners need to succeed in work.",
      "This helps us keep training employment-focused and enables our progression team to support learners with vacancies, interviews, employer introductions and career planning.",
    ],
  },
  {
    title: "Quality and continuous improvement",
    icon: "verified",
    paragraphs: [
      "We use learner feedback, employer feedback, teaching observations, internal quality assurance, assessment evidence, progression data and external quality assurance to understand what is working and what needs to improve.",
      "Our provision is externally scrutinised through commissioners and awarding organisations, and findings are used to inform quality improvement.",
    ],
  },
];

const About = () => {
  return (
    <main className="flex flex-col">
      <Banner
        eyebrow="About Quack Recruitment & Training"
        title={
          <>
            Helping people <span className="text-quackred-800">achieve, belong and thrive</span>
          </>
        }
        description="An independent adult skills and recruitment provider focused on helping people develop the skills, confidence and opportunities they need to progress in work."
        imgSrc="/images/banners/about-banner.jpg"
        imgAlt=""
        position="right"
      />

      {/* Who we are */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:grid-cols-[0.95fr_1.05fr]">
          {/* Illustration */}
          <div className="relative hidden min-h-[280px] overflow-hidden md:block">
            <img
              src="/images/about-team-office.jpg"
              alt=""
              className="
          absolute inset-0 h-full w-full object-cover object-left
          lg:opacity-100
        "
            />

            {/* Blend into section background */}
            <div
              className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(250,250,250,0.15)_0%,rgba(250,250,250,0)_45%,rgba(250,250,250,0.45)_78%,rgb(250,250,250)_100%)]
          lg:bg-[linear-gradient(to_right,rgba(250,250,250,0.08)_0%,rgba(250,250,250,0)_50%,rgba(250,250,250,0.4)_80%,rgb(250,250,250)_100%)]
        "
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Who we are
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Training shaped by real employment needs
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-700">
              <p>
                Quack Recruitment & Training is an independent adult skills and recruitment provider
                focused on helping people develop the skills, confidence and opportunities they need
                to progress in work.
              </p>

              <p>
                Our training provision is built around employer demand. We use our recruitment and
                employer-engagement experience to understand where skills gaps and employment
                opportunities exist and use that intelligence to shape relevant Skills Bootcamp
                provision.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What we deliver */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              What we deliver
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Employer-led Skills Bootcamps
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-700">
              We deliver publicly funded Skills Bootcamps across employment-focused sectors
              including construction, utilities, retrofit and green skills.
            </p>

            <div className="mt-7">
              <PageLink href="/skills-bootcamps" label="Explore Current Skills Bootcamps" arrow />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            <div className="space-y-5 text-lg leading-8 text-zinc-700">
              <p>
                Our programmes combine vocational knowledge and skills, recognised qualifications
                where applicable, employability development, careers support and employer
                engagement.
              </p>

              <p>
                The purpose is not simply to complete a course. We want learners to develop
                meaningful new knowledge and skills and be better prepared to move into employment,
                progress in work or pursue their intended career pathway.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Learner approach */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Our approach to learners
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Helping learners achieve, belong and thrive
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-700">
              Every learner starts from a different point. We aim to understand individual
              strengths, goals and support needs so that learning can be challenging, inclusive and
              relevant.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {learnerFeatures.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            ))}
          </div>

          <div className="mt-8">
            <PageLink
              href="/learner-support"
              label="Find out about learner support"
              arrow
              variant="outline"
            />
          </div>
        </div>
      </Section>

      {/* Employers + quality */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Working with employers
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Employment-focused training, continuously improved
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {organisationFeatures.map((item) => (
              <FeatureCard key={item.title} title={item.title} icon={item.icon}>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </FeatureCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Ofsted */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
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
              Leadership and governance, Curriculum, teaching and training, and Safeguarding
              arrangements were judged as Reasonable Progress.
            </p>
          </HighlightCTA>
        </div>
      </Section>

      {/* Ambition */}
      {/* Ambition */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Our ambition
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Meaningful progress for every learner
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
              Our ambition is simple: to provide high-quality adult training that gives learners
              genuine value and helps them make meaningful progress towards their goals.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About;
