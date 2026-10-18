import Link from "next/link";

import Banner from "@/components/Banner";
import PageLink from "@/components/PageLink";
import Section from "@/components/Sections/Section";

export const metadata = {
  title: "Our Ofsted Inspection | Quack Recruitment & Training",
  description:
    "Quack Recruitment & Training achieved Significant Progress in Inclusion and Reasonable Progress across leadership and governance, curriculum, teaching and training, and safeguarding arrangements.",
};

const outcomes = [
  {
    title: "Inclusion",
    result: "Significant Progress",
    icon: "diversity_3",
    highlight: true,
  },
  {
    title: "Leadership and governance",
    result: "Reasonable Progress",
    icon: "settings",
  },
  {
    title: "Curriculum, teaching and training",
    result: "Reasonable Progress",
    icon: "menu_book",
  },
  {
    title: "Safeguarding arrangements",
    result: "Reasonable Progress",
    icon: "shield",
  },
];

const findings = [
  {
    title: "Support that helps learners succeed",
    quote:
      "Staff provide learners with the help and support they need to be successful on their courses.",
  },
  {
    title: "Training shaped by employers",
    quote: "They review and change their course content in response to feedback from employers.",
  },
  {
    title: "Effective teaching",
    quote:
      "Tutors use a range of appropriate teaching strategies effectively to help learners understand and recall what they have learnt previously.",
  },
  {
    title: "Progression into employment",
    quote: "On completion, most learners secure jobs in the construction sector.",
  },
  {
    title: "Responding to safeguarding concerns",
    quote:
      "Staff take swift action in response to any referrals and carefully record their actions.",
  },
];

const experienceLinks = [
  {
    title: "Explore our Skills Bootcamps",
    description: "Discover our current employer-led training programmes.",
    href: "/skills-bootcamps",
    icon: "school",
  },
  {
    title: "Find out about learner support",
    description: "Learn about SEND, accessibility and other support available.",
    href: "/learner-support",
    icon: "diversity_3",
  },
  {
    title: "Report a safeguarding concern",
    description: "Find out how to raise a concern or speak to our safeguarding team.",
    href: "/report-a-safeguarding-concern",
    icon: "shield",
  },
];

function OutcomeCard({ title, result, icon, highlight = false }) {
  return (
    <article
      className={[
        "rounded-xl border bg-white p-6",
        highlight ? "border-quackred-300 shadow-sm" : "border-zinc-200",
      ].join(" ")}
    >
      <span
        className={[
          "material-symbols-outlined mb-5 text-4xl",
          highlight ? "text-quackred-800" : "text-zinc-600",
        ].join(" ")}
        aria-hidden="true"
      >
        {icon}
      </span>

      <h3 className="text-lg font-semibold leading-snug text-zinc-950">{title}</h3>

      <div className="my-4 h-px bg-zinc-200" />

      <p
        className={[
          "text-xl font-bold leading-tight",
          highlight ? "text-quackred-800" : "text-zinc-700",
        ].join(" ")}
      >
        {result}
      </p>
    </article>
  );
}

function QuoteCard({ title, quote }) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-quackred-800">
        {title}
      </p>

      <blockquote className="border-l-4 border-quackred-800 pl-5 text-lg leading-relaxed text-zinc-800">
        “{quote}”
      </blockquote>

      <p className="mt-5 text-sm text-zinc-500">Ofsted, 2026</p>
    </article>
  );
}

function ExperienceLink({ title, description, href, icon }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group flex h-full items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-quackred-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-quackred-500 focus:ring-offset-2"
    >
      <span className="material-symbols-outlined text-3xl text-quackred-800" aria-hidden="true">
        {icon}
      </span>

      <div className="flex-1">
        <h3 className="font-semibold text-zinc-950">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{description}</p>
      </div>

      <span
        className="material-symbols-outlined mt-1 text-quackred-800 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      >
        arrow_forward
      </span>
    </Link>
  );
}

export default function OfstedPage() {
  return (
    <>
      <Banner
        eyebrow="Our Ofsted inspection"
        title={
          <>
            Significant Progress <span className="text-quackred-800">in Inclusion</span>
          </>
        }
        description={
          <>
            The highest possible progress judgement for this theme at a new-provider monitoring
            inspection.
          </>
        }
        imgSrc="/images/banners/ofsted-banner.jpg"
        imgAlt=""
        imagePosition="right"
        size="large"
        links={[
          {
            label: "Read the final report",
            path: "/docs/ofsted/ofsted-monitoring-report-2026.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        ]}
      />

      <Section bgColor="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-lg leading-relaxed text-zinc-700">
              Quack Recruitment & Training welcomed Ofsted on 30 September and 1 October 2026 for a
              new-provider monitoring inspection of our adult learning provision.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-zinc-700">
              Inspectors judged our progress in Inclusion to be Significant. They judged our
              progress in Leadership and governance, Curriculum, teaching and training, and
              Safeguarding arrangements to be Reasonable.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-zinc-700">
              We are proud that the report recognises the support provided to learners, our work
              with employers and the progress learners make towards employment.
            </p>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-quackred-800">
              Inspection outcomes
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl">
              Our progress judgements
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <OutcomeCard key={outcome.title} {...outcome} />
            ))}
          </div>

          <div className="mt-8 max-w-4xl space-y-4 text-zinc-700">
            <p>
              New-provider monitoring inspections assess progress against specific themes.
              Significant Progress is the highest possible progress judgement for a theme.
            </p>

            <p className="font-medium">
              These are progress judgements from a new-provider monitoring inspection, rather than
              an overall inspection grade.
            </p>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-quackred-800">
              The report
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl">What inspectors found</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {findings.map((finding) => (
              <QuoteCard key={finding.title} {...finding} />
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-quackred-800">
              Our approach
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl">
              Helping learners achieve, belong and thrive
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-700">
              <p>
                Our approach starts with understanding learners’ individual needs, ambitions and
                barriers to participation.
              </p>

              <p>
                The report recognises how staff provide support, review learners’ progress and help
                learners prepare for employment. It also highlights how employer feedback shapes our
                course content.
              </p>

              <p>
                We want every learner to feel supported, included and able to develop the knowledge,
                skills and confidence needed to move towards their goals.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {experienceLinks.map((item) => (
              <ExperienceLink key={item.href} {...item} />
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-quackred-800">
              Next steps
            </p>

            <h2 className="text-2xl font-bold text-zinc-950 md:text-3xl">Continuing to improve</h2>

            <div className="mt-5 max-w-4xl space-y-4 leading-relaxed text-zinc-700">
              <p>
                We are proud of the strengths recognised in the report and are using the findings to
                guide our next steps.
              </p>

              <p>
                Our priorities include strengthening governance and the ongoing review of
                safeguarding information, making more consistent use of learners’ previous
                experience when planning teaching, and reviewing employment outcomes for learners
                with special educational needs and/or disabilities.
              </p>

              <p>
                We will continue to review the impact of our work on learners’ participation,
                learning and progression.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-xl border border-zinc-200 bg-white p-6 md:grid-cols-[1fr_auto] md:p-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-quackred-800">
              Full inspection report
            </p>

            <h2 className="text-3xl font-bold text-zinc-950">
              Read our full Ofsted inspection report
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-700">
              Read the inspectors’ findings in full or visit our official Ofsted provider page.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/docs/ofsted/ofsted-monitoring-report-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-quackred-800 px-6 py-3 font-semibold text-white transition hover:bg-quackred-600 focus:outline-none focus:ring-2 focus:ring-quackred-500 focus:ring-offset-2"
              >
                Read the full Ofsted report
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  open_in_new
                </span>
              </a>

              <a
                href="https://reports.ofsted.gov.uk/provider/33/2905375"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-quackred-700 bg-white px-6 py-3 font-semibold text-quackred-800 transition hover:bg-quackred-50 focus:outline-none focus:ring-2 focus:ring-quackred-500 focus:ring-offset-2"
              >
                View our Ofsted provider page
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  open_in_new
                </span>
              </a>
            </div>
          </div>

          <div className="flex max-w-[180px] flex-col items-center justify-center">
            <img
              src="/images/ofsted/ofsted-page-qr.png"
              alt="QR code linking to the Quack Recruitment & Training Ofsted page"
              className="aspect-square w-full"
            />

            <p className="mt-3 text-center text-sm leading-snug text-zinc-600">
              Scan to visit our Ofsted page and read the report
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
