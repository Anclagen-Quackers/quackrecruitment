import Banner from "@/components/Banner";
import PageLink from "@/components/PageLink";
import Section from "@/components/Sections/Section";
import Link from "next/link";
import { PolicyItem } from "@/components/templates/AllPolicies";

export const metadata = {
  title: "Learner Support, SEND & Inclusion | Quack Recruitment & Training",
  description:
    "Learn about learner support, SEND, reasonable adjustments, accessibility and progression support available through Quack Recruitment & Training.",
};

const values = [
  {
    title: "Achieve",
    icon: "trending_up",
    text: "Develop new knowledge, skills and confidence from your individual starting point and move towards your intended employment or career goal.",
  },
  {
    title: "Belong",
    icon: "diversity_3",
    text: "Learn in an inclusive environment where you are respected, supported and valued as an individual.",
  },
  {
    title: "Thrive",
    icon: "volunteer_activism",
    text: "Access appropriate support to overcome barriers, participate successfully, stay safe and progress towards your goals.",
  },
];

const supportStages = [
  "Before you apply",
  "During an initial enquiry",
  "During enrolment",
  "During initial assessment",
  "Through a Learner Engagement Officer",
  "Through your tutor",
  "Directly to our SEND Lead",
  "During the programme",
  "During assessment",
  "During careers or progression support",
];

const sendSupport = [
  "An individual SEND Support Plan",
  "Additional tutor support",
  "One-to-one explanation",
  "Tasks broken into manageable stages",
  "Additional checking of understanding",
  "Adapted learning resources",
  "Larger print",
  "Accessible electronic resources",
  "Visual prompts",
  "Written instructions alongside verbal explanation",
  "Additional processing time",
  "Quieter working arrangements where practicable",
  "Organisational support",
  "Structured task planning",
  "Additional tutor check-ins",
  "Reasonable adjustment to the learning environment",
];

const relatedPolicies = [
  {
    title: "Learner Support Policy",
    version: "v2.0",
    href: "/docs/policies/2.1-quack-learner-support-policy-v2.pdf",
  },
  {
    title: "Equality, Diversity & Inclusion Policy",
    version: "v2.0",
    href: "/docs/policies/2.2-quack-equality-diversity-inclusion-policy-v2.pdf",
  },
  {
    title: "Safeguarding, Prevent & Online Safety Policy",
    version: "v5.0",
    href: "/docs/policies/1.1-quack-safeguarding-prevent-online-safety-policy-v5.pdf",
  },
  {
    title: "Complaints Policy and Procedure",
    version: "v2.0",
    href: "/docs/policies/2.7-quack-complaints-policy-procedure-v2.pdf",
  },
];

const relatedPages = [
  {
    label: "Accessibility Statement",
    href: "/accessibility",
  },
  {
    label: "Report a Safeguarding Concern",
    href: "/report-a-safeguarding-concern",
  },
  {
    label: "Current Skills Bootcamps",
    href: "/skills-bootcamps",
  },
];

const LearnerSupport = () => {
  return (
    <main className="flex flex-col">
      <Banner
        eyebrow="Learner Support, SEND & Inclusion"
        title="Helping every learner achieve, belong and thrive"
        description="Support should reflect the individual. Find out how we identify barriers, provide appropriate support and help learners progress."
        imgSrc="/images/banners/learner-support-banner.jpg"
        imgAlt=""
        position="right"
      />

      {/* Achieve / Belong / Thrive */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Our approach
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Support built around the individual
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-3xl text-quackred-800"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>

                  <h3 className="text-2xl font-bold text-zinc-950">{item.title}</h3>
                </div>

                <p className="mt-5 leading-7 text-zinc-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Starting point */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Individual starting points
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Everyone starts from a different point
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-700">
              <p className="font-semibold text-zinc-950">No two learners are exactly the same.</p>

              <p>
                People join Quack with different previous education, qualifications, employment
                experience, sector knowledge, English and maths starting points, confidence levels,
                disabilities, learning difficulties, neurodivergence, health conditions, personal
                circumstances and career ambitions.
              </p>

              <p>
                We do not expect every learner to need the same support. We identify individual
                starting points, strengths, goals and potential barriers so that learning and
                support can be matched to the individual rather than taking a one-size-fits-all
                approach.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-3xl text-quackred-800"
                aria-hidden="true"
              >
                person_search
              </span>

              <h3 className="text-2xl font-bold text-zinc-950">
                Understanding your starting point
              </h3>
            </div>

            <div className="mt-5 space-y-4 leading-7 text-zinc-700">
              <p>
                We want to understand what you already know, what you need to develop and what you
                want to achieve.
              </p>

              <p>
                Depending on the programme, this may include discussion of previous qualifications,
                employment history, previous experience, career aspirations, vocational knowledge,
                English and maths starting points, skills scans and any support needs or barriers
                that may affect learning.
              </p>

              <p>
                Understanding your starting point helps tutors plan learning appropriately, avoid
                unnecessary repetition, provide support where needed and ensure that learners
                receive appropriate challenge.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Tell us */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                Asking for support
              </p>

              <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
                Tell us about a support need at any time
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-700">
                <p>
                  Some support needs are identified before learning begins. Others may emerge later.
                </p>

                <p>
                  You can tell us about a disability, learning difficulty, neurodivergence, health
                  condition, accessibility issue or another barrier at any point.
                </p>
              </div>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {supportStages.map((stage) => (
                  <div
                    key={stage}
                    className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4"
                  >
                    <span
                      className="material-symbols-outlined mt-0.5 text-xl text-quackred-800"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>

                    <span className="font-medium text-zinc-800">{stage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-quackred-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span
                className="material-symbols-outlined text-3xl text-quackred-800"
                aria-hidden="true"
              >
                info
              </span>

              <div>
                <h3 className="text-xl font-bold text-zinc-950">
                  You do not need a formal diagnosis
                </h3>

                <p className="mt-2 text-lg leading-8 text-zinc-700">
                  You do not need a formal diagnosis before talking to us about a barrier or asking
                  what support may be available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SEND */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Additional learning support
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              SEND and additional learning support
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-zinc-700">
              <p>
                Where a learner has a disability, learning difficulty, neurodivergence or another
                additional need, we will discuss what support may help them participate and make
                progress.
              </p>

              <p>
                Support is agreed according to individual need, programme requirements and any
                applicable awarding-organisation assessment requirements.
              </p>
            </div>
          </div>

          <details className="group rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-3xl text-quackred-800"
                  aria-hidden="true"
                >
                  support
                </span>

                <h3 className="text-xl font-bold text-zinc-950">
                  Examples of support we may consider
                </h3>
              </div>

              <span
                className="material-symbols-outlined transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                expand_more
              </span>
            </summary>

            <div className="border-t border-zinc-200 px-6 pb-6 pt-5 sm:px-8 sm:pb-8">
              <div className="grid gap-x-10 gap-y-3 md:grid-cols-2">
                {sendSupport.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined mt-0.5 text-xl text-quackred-800"
                      aria-hidden="true"
                    >
                      check
                    </span>

                    <span className="leading-7 text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>

          <p className="mt-8 max-w-4xl text-lg font-medium leading-8 text-zinc-800">
            The purpose of support is not to lower expectations. It is to reduce unnecessary
            barriers so that learners have a fair opportunity to participate, develop their
            knowledge and skills and achieve their goals.
          </p>
        </div>
      </Section>

      {/* Assessment + maths */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-3xl text-quackred-800"
                  aria-hidden="true"
                >
                  assignment
                </span>

                <h2 className="text-2xl font-bold text-zinc-950">
                  Assessment and examination adjustments
                </h2>
              </div>

              <div className="mt-5 space-y-4 leading-7 text-zinc-700">
                <p>
                  Where a learner may require an adjustment for an assessment or examination, we
                  will discuss the need and consider the evidence available.
                </p>

                <p>
                  Any adjustment must meet the requirements of the relevant awarding organisation
                  and must not compromise the integrity of the assessment.
                </p>

                <p>
                  Depending on the relevant rules and individual circumstances, approved
                  arrangements may include additional time, rest breaks, accessible formats,
                  adjustments to the assessment environment or approved reader/scribe arrangements.
                </p>

                <p>
                  Learners should tell us about potential assessment needs as early as possible,
                  although we recognise that some needs may emerge later.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-3xl text-quackred-800"
                  aria-hidden="true"
                >
                  calculate
                </span>

                <h2 className="text-2xl font-bold text-zinc-950">English and maths support</h2>
              </div>

              <div className="mt-5 space-y-4 leading-7 text-zinc-700">
                <p>
                  English and maths skills can have a direct impact on confidence, vocational
                  learning and employment.
                </p>

                <p>
                  We consider learners&apos; English and maths starting points and, where support is
                  needed, aim to contextualise development to the learner&apos;s programme and
                  intended employment wherever possible.
                </p>

                <p>
                  Our aim is to help learners build the English and maths skills they need to
                  participate confidently in learning and work rather than treating these skills as
                  disconnected from their vocational goals.
                </p>
              </div>
            </article>
          </div>
        </div>
      </Section>

      {/* Other barriers + careers */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
            Support is not only about SEND
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-zinc-950">Other barriers to learning</h2>

              <div className="mt-5 space-y-4 leading-7 text-zinc-700">
                <p>
                  A learner may need support even where they do not have a disability or identified
                  SEND need.
                </p>

                <p>
                  Barriers can include financial hardship, transport difficulties, homelessness or
                  housing instability, caring responsibilities, anxiety or low confidence,
                  digital-access problems, unemployment, wellbeing concerns or other personal
                  circumstances affecting attendance or participation.
                </p>

                <p>
                  Where possible, our team will work with the learner to identify practical
                  solutions, reasonable support, appropriate signposting or specialist services.
                </p>

                <p>
                  Where a need falls outside Quack&apos;s expertise, we may help the learner
                  identify an appropriate external organisation or specialist source of support.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                Careers and progression
              </p>

              <h2 className="text-2xl font-bold text-zinc-950">Support beyond the classroom</h2>

              <div className="mt-5 space-y-4 leading-7 text-zinc-700">
                <p>
                  Skills Bootcamps are designed to support employment and career progression, so our
                  support does not stop when taught learning ends.
                </p>

                <p>
                  Depending on the learner and programme, progression support may include careers
                  information, advice and guidance, CV development, job-search support, interview
                  preparation, employer introductions, vacancy matching, support to understand
                  employer expectations and progression planning.
                </p>

                <p>
                  Where applicable, our team continues progression activity with learners after
                  programme completion for up to six months.
                </p>
              </div>
            </article>
          </div>
        </div>
      </Section>

      {/* Impact + belonging */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              How we know support is working
            </p>

            <h2 className="text-2xl font-bold text-zinc-950">Reviewing the impact of support</h2>

            <div className="mt-5 space-y-4 leading-7 text-zinc-700">
              <p>Providing support is only useful if it makes a positive difference.</p>

              <p>
                Tutors and the quality team review whether agreed support is helping learners to
                participate, make progress, develop confidence and move towards their individual
                goals.
              </p>

              <p>
                This may include reviewing learner feedback, tutor observations, progress reviews,
                skills scans, assessment evidence, attendance and engagement, achievement and
                progression.
              </p>

              <p>
                Where support is not having the intended impact, or where a learner&apos;s
                circumstances change, support can be reviewed and adapted.
              </p>

              <p>
                Learners are encouraged to tell us what is working well and where something could be
                improved.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Belonging and respect
            </p>

            <h2 className="text-2xl font-bold text-zinc-950">A place where learners belong</h2>

            <div className="mt-5 space-y-4 leading-7 text-zinc-700">
              <p>
                We want every learner to feel that they belong, are respected and are valued as an
                individual.
              </p>

              <p>
                We expect learning environments to be inclusive, respectful and free from bullying,
                harassment and discrimination.
              </p>

              <p>
                Learners should feel able to contribute, ask questions, make mistakes, request
                support and raise concerns without fear of being judged.
              </p>

              <p>
                Individual differences, backgrounds and experiences should be treated with dignity
                and respect.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* Safeguarding + confidentiality */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Safeguarding and wellbeing
            </p>

            <h2 className="text-2xl font-bold text-zinc-950">
              When a concern needs safeguarding support
            </h2>

            <div className="mt-5 space-y-4 leading-7 text-zinc-700">
              <p>
                Sometimes a learner&apos;s circumstances or wellbeing may raise a safeguarding
                concern rather than simply a learning-support need.
              </p>

              <p>
                Where this happens, trained staff will follow Quack Recruitment & Training&apos;s
                safeguarding procedures and involve the Designated Safeguarding Lead where
                appropriate.
              </p>

              <p>
                If you are worried about yourself or somebody else, you can speak to a member of
                staff or use our dedicated safeguarding reporting route.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <PageLink
                href="/report-a-safeguarding-concern"
                label="Report a safeguarding concern"
                arrow
              />
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Confidentiality
            </p>

            <h2 className="text-2xl font-bold text-zinc-950">Your information</h2>

            <div className="mt-5 space-y-4 leading-7 text-zinc-700">
              <p>
                Information about a disability, learning difficulty, neurodivergence, health
                condition or support need is handled sensitively.
              </p>

              <p>
                We only share relevant information with colleagues or partners where there is a
                legitimate need to do so, subject to data-protection and safeguarding requirements.
              </p>

              <p>
                Where possible, we will involve you in decisions about your support and explain what
                information needs to be shared and why.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* Reassurance */}
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-quackred-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <span
                className="material-symbols-outlined text-4xl text-quackred-800"
                aria-hidden="true"
              >
                verified_user
              </span>

              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                  Asking for support
                </p>

                <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
                  Asking for support will not disadvantage your application
                </h2>

                <div className="mt-5 max-w-4xl space-y-4 text-lg leading-8 text-zinc-700">
                  <p>
                    Telling us about a disability, learning difficulty, neurodivergence, health
                    condition or other support need will not disadvantage you when applying for an
                    eligible Skills Bootcamp.
                  </p>

                  <p>
                    We ask about support needs so that we can understand how best to help you
                    participate, make progress and achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Jessica */}
      <Section bgColor="bg-zinc-200">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
                  Contact Jessica
                </p>

                <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
                  Not sure what support you need? Talk to us.
                </h2>

                <div className="mt-5 space-y-4 text-lg leading-8 text-zinc-700">
                  <p>
                    If you are considering a Quack Skills Bootcamp and would like to discuss
                    accessibility, SEND, reasonable adjustments or another barrier to learning,
                    please contact Jessica Roughton.
                  </p>

                  <p>
                    You can contact Jessica before you apply, during enrolment or at any point
                    during your programme.
                  </p>
                </div>
              </div>

              <aside className="rounded-xl bg-zinc-50 p-6">
                <h3 className="text-2xl font-bold text-zinc-950">Jessica Roughton</h3>

                <p className="mt-2 font-semibold text-zinc-700">
                  Quality Manager | DSL | SEND Lead | IQA
                </p>

                <a
                  href="mailto:jessica.roughton@quackrecruitmentandtraining.co.uk"
                  className="mt-5 inline-block max-w-full [overflow-wrap:anywhere] font-semibold text-quackred-800 hover:underline"
                >
                  jessica.roughton@quackrecruitmentandtraining.co.uk
                </a>

                <div className="mt-6">
                  <a
                    href="mailto:jessica.roughton@quackrecruitmentandtraining.co.uk?subject=Learner%20Support%20Enquiry"
                    className="group inline-flex items-center gap-2 rounded-lg bg-quackred-800 px-5 py-3 font-semibold text-white transition hover:bg-quackred-700"
                  >
                    Ask us about learner support
                    <span
                      className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </aside>
            </div>
          </div>

          {/* Related support */}
          <div className="mt-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Related support and policies
            </p>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="mb-4 text-xl font-bold text-zinc-950">Policies</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedPolicies.map((policy) => (
                    <PolicyItem key={policy.href} policy={policy} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-zinc-950">Related pages</h3>

                <div className="space-y-3">
                  {relatedPages.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-5 py-4 font-semibold text-zinc-900 shadow-sm transition hover:border-quackred-300 hover:text-quackred-800 hover:shadow-md"
                    >
                      <span>{item.label}</span>

                      <span
                        className="material-symbols-outlined text-xl text-quackred-800 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default LearnerSupport;
