import Banner from "@/components/Banner";
import Section from "@/components/Sections/Section";

export const metadata = {
  title: "Accessibility Statement | Quack Recruitment & Training",
  description:
    "Read Quack Recruitment & Training's Accessibility Statement, including website accessibility, alternative formats, learning materials, reasonable adjustments and support.",
};

const supportAreas = [
  {
    icon: "visibility",
    title: "Accessing our website",
    content: (
      <p>
        We aim to make our website clear, readable and usable across desktop, tablet and mobile
        devices and to reduce unnecessary barriers for people using assistive technology.
      </p>
    ),
  },
  {
    icon: "description",
    title: "Alternative formats",
    content: (
      <>
        <p className="font-semibold text-zinc-950">Need information in another format?</p>

        <p>
          If you find it difficult to access information in its existing format, please contact us.
          Depending on individual need, we may be able to provide or explain information using an
          alternative format.
        </p>

        <p>
          This may include larger text, plain-English information, accessible electronic documents,
          verbal explanation, adapted documents or additional support to understand programme and
          application information.
        </p>
      </>
    ),
  },
  {
    icon: "school",
    title: "Learning materials",
    content: (
      <p>
        Accessibility does not stop at the website. Learners can also discuss barriers affecting
        learning materials, presentations, workbooks, online learning, classroom access,
        assessments, communication or careers and progression activity.
      </p>
    ),
  },
];

const Accessibility = () => {
  return (
    <main className="flex flex-col">
      <Banner
        eyebrow="Accessibility"
        title="Accessibility Statement"
        description="How we support accessible information, learning and participation."
        imgSrc="/images/banners/accessibility-banner.jpg"
        imgAlt=""
        position="right"
      />

      {/* Commitment */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Our commitment
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Accessible support for every learner
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-700">
              <p>
                Quack Recruitment & Training is committed to making our website, information,
                learning materials and services accessible to as many people as reasonably possible.
              </p>

              <p>
                We want every learner to be able to access the information and support they need to
                achieve, belong and thrive.
              </p>

              <p>
                If you experience an accessibility barrier, need information in another format or
                would like to discuss a reasonable adjustment, please contact us. We will discuss
                your needs individually and consider what reasonable support can be provided to
                remove or reduce barriers to participation.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-3xl text-quackred-800"
                aria-hidden="true"
              >
                accessibility_new
              </span>

              <h2 className="text-2xl font-bold text-zinc-950">
                Who may benefit from accessibility support?
              </h2>
            </div>

            <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700">
              <p>
                Accessibility support may be relevant to people with disabilities, learning
                difficulties, neurodivergence, sensory impairments, long-term health conditions,
                mental-health needs, communication needs, literacy difficulties, mobility
                requirements or other circumstances affecting access to information or learning.
              </p>

              <p>
                This can include, but is not limited to, dyslexia, dyscalculia, dyspraxia, autism,
                ADHD, visual impairment, hearing impairment and physical disability.
              </p>

              <p>
                You do not need to wait until enrolment to discuss an accessibility need, and you
                can tell us about a need at any point before or during your programme.
              </p>

              <p>
                You do not need to have a formal diagnosis before speaking to us about a barrier or
                asking what support may be available.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Access and formats */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Access and information
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Removing barriers to information and learning
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {supportAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
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

                <div className="mt-5 space-y-4 leading-7 text-zinc-700">{item.content}</div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Reasonable adjustments */}
      {/* Reasonable adjustments */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Learner support
            </p>

            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-3xl text-quackred-800"
                aria-hidden="true"
              >
                accessibility_new
              </span>

              <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
                Reasonable adjustments
              </h2>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-5 text-lg leading-8 text-zinc-700">
                <p>
                  Reasonable adjustments may be considered at any stage of the learner journey,
                  including enquiry, application, enrolment, initial assessment, teaching and
                  learning, assessment or examination and careers/progression support.
                </p>

                <p>
                  Adjustments are considered individually. We will discuss the learner&apos;s needs
                  and consider the nature of the programme, health and safety, what is reasonable
                  and practicable and any relevant awarding-organisation or assessment requirements.
                </p>
              </div>

              <div className="space-y-5 text-lg leading-8 text-zinc-700">
                <p>
                  Where an adjustment relates to an externally regulated assessment or examination,
                  the adjustment must also meet the requirements of the relevant awarding
                  organisation and must not compromise the integrity of the assessment.
                </p>

                <p>
                  Learners are encouraged to tell us about needs as early as possible so that
                  support can be considered in advance. However, we recognise that needs can emerge
                  or become apparent after learning has started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                  Accessibility contact
                </p>

                <h2 className="text-3xl font-bold text-zinc-950">Jessica Roughton</h2>

                <p className="mt-2 font-semibold text-zinc-700">
                  Quality Manager | DSL | SEND Lead | IQA
                </p>

                <a
                  href="mailto:jessica.roughton@quackrecruitmentandtraining.co.uk"
                  className="inline-block max-w-full [overflow-wrap:anywhere] font-semibold text-quackred-800 hover:underline"
                >
                  jessica.roughton@quackrecruitmentandtraining.co.uk
                </a>
              </div>

              <div className="space-y-5 text-lg leading-8 text-zinc-700">
                <p>
                  If you need an alternative format, reasonable adjustment or help accessing any
                  part of our website, programme information or learning materials, please contact
                  Jessica using the details provided.
                </p>

                <div className="border-t border-zinc-200 pt-5">
                  <h3 className="text-xl font-bold text-zinc-950">Accessibility feedback</h3>

                  <p className="mt-3">
                    We welcome feedback about the accessibility of our website and services. If you
                    identify an accessibility barrier or something that could be improved, please
                    contact Jessica Roughton so that we can review it and consider what action is
                    appropriate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Page ownership */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <dl className="grid gap-4 text-sm text-zinc-600 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-zinc-950">Page owner</dt>
              <dd className="mt-1">Jessica Roughton – SEND Lead</dd>
            </div>

            <div>
              <dt className="font-semibold text-zinc-950">Last reviewed</dt>
              <dd className="mt-1">September 2026</dd>
            </div>

            <div>
              <dt className="font-semibold text-zinc-950">Next review</dt>
              <dd className="mt-1">September 2027 or earlier if required</dd>
            </div>
          </dl>
        </div>
      </Section>
    </main>
  );
};

export default Accessibility;
