import Banner from "@/components/Banner";
import Link from "next/link";

import BootcampSection from "./BootcampSection";
import BootcampBulletList from "./BootcampBulletList";
import BootcampTestimonials from "./BootcampTestimonials";
import BootcampFeatureList from "./BootcampFeatureList";
import BootcampApplyCard from "./BootcampApplyCard";
import BootcampPolicies from "./BootcampPolicies";

const toParagraphs = (content) => {
  if (!content) return [];
  return Array.isArray(content) ? content : [content];
};

const HandbookButton = ({ handbook, className = "" }) => {
  if (!handbook?.href) return null;

  return (
    <a
      href={handbook.href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-lg",
        "bg-quackred-800 px-6 py-3",
        "text-base font-semibold text-white",
        "transition hover:bg-quackred-600",
        className,
      ].join(" ")}
    >
      {handbook.buttonText || "Download Learner Handbook"}
    </a>
  );
};

const ProgrammeBranding = ({ course }) => {
  const defaultLogos = [
    {
      src: "/logos/QRT-logo/QRT-black-transparent-centred.png",
      alt: "Quack Recruitment & Training logo",
      className: "max-h-16 w-auto",
    },
    ...(course.authority?.logo
      ? [
          {
            src: course.authority.logo,
            alt: course.authority.logoAlt || `${course.authority.name} logo`,
            className: "max-h-16 w-auto",
          },
        ]
      : []),
  ];

  const logos = course.brandingLogos?.length > 0 ? course.brandingLogos : defaultLogos;

  if (!logos.length) return null;

  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-4 px-5 py-5 md:px-12">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">
          Delivered in partnership with
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo, index) => (
            <img
              key={`${logo.src}-${index}`}
              src={logo.src}
              alt={logo.alt || ""}
              className={logo.className || "max-h-16 w-auto object-contain"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgrammeAtAGlance = ({ course }) => {
  const { overview = {}, authority } = course;

  const details = [
    {
      label: "Funding partner",
      value: authority?.name,
    },
    {
      label: "Course",
      value: overview.course,
    },
    {
      label: "Sector",
      value: overview.sector,
    },
    {
      label: "Duration",
      value: overview.duration,
    },
    {
      label: "Guided learning hours",
      value: overview.guidedLearningHours,
    },
    {
      label: "Schedule",
      value: overview.schedule,
    },
    {
      label: "Delivery",
      value: overview.deliveryModes?.length > 0 ? overview.deliveryModes.join(" / ") : null,
    },
  ].filter((item) => item.value);

  const overviewText = [
    overview.duration,
    overview.guidedLearningHours,
    overview.schedule,
    overview.deliveryNote,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const additionalStats = (course.programmeStructure || []).filter((item) => {
    const value = String(item.value || "").toLowerCase();

    return value && !overviewText.includes(value);
  });

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-2xl font-bold text-zinc-950">At a glance</h2>

      <dl className="mt-5 divide-y divide-zinc-200">
        {details.map((item) => (
          <div
            key={item.label}
            className="grid gap-1 py-3 sm:grid-cols-[140px_1fr] lg:grid-cols-[125px_1fr]"
          >
            <dt className="font-semibold text-zinc-900">{item.label}</dt>

            <dd className="min-w-0 text-zinc-700">{item.value}</dd>
          </div>
        ))}
      </dl>

      {overview.deliveryNote && (
        <p className="mt-4 text-sm leading-6 text-zinc-600">{overview.deliveryNote}</p>
      )}

      {additionalStats.length > 0 && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {additionalStats.map((item, index) => (
            <div key={`${item.label}-${index}`} className="rounded-xl bg-quackred-50 p-4">
              <p className="text-xl font-bold text-quackred-800">{item.value}</p>

              <p className="mt-1 text-sm font-semibold text-zinc-800">{item.label}</p>
            </div>
          ))}
        </div>
      )}

      {course.programmeStructureNote && (
        <p className="mt-5 text-sm leading-6 text-zinc-600">{course.programmeStructureNote}</p>
      )}
    </section>
  );
};

const LearnerSupportSection = ({ course }) => {
  const supportLinks = [
    {
      title: "Learner Support, SEND & Inclusion",
      description:
        "Find out more about learner support, SEND, reasonable adjustments and the support available throughout your programme.",
      href: "/learner-support",
      icon: "diversity_1",
    },
    {
      title: "Accessibility",
      description:
        "Find information about accessibility and how to tell us about any adjustments or support you may need.",
      href: "/accessibility",
      icon: "accessibility_new",
    },
    {
      title: "Safeguarding",
      description:
        "Read our safeguarding information or find out how to report a safeguarding concern.",
      href: "/report-a-safeguarding-concern",
      icon: "shield_person",
    },
  ];

  return (
    <BootcampSection title="Learner Support">
      {course.learnerSupportIntro ? (
        <p className="mb-5 text-lg leading-8 text-zinc-800">{course.learnerSupportIntro}</p>
      ) : (
        <p className="mb-5 text-lg leading-8 text-zinc-800">
          Support is available throughout the programme and is tailored where appropriate to
          individual learner needs.
        </p>
      )}

      {course.learnerSupport?.length > 0 && (
        <div className="mb-8">
          <BootcampBulletList items={course.learnerSupport} />
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-3">
        {supportLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              group rounded-2xl border border-zinc-200
              bg-white p-5 shadow-sm transition
              hover:-translate-y-0.5 hover:shadow-md
            "
          >
            <div className="mb-3 flex items-center gap-3">
              <span
                className="material-symbols-outlined shrink-0 text-2xl text-quackred-800"
                aria-hidden="true"
              >
                {item.icon}
              </span>

              <h3 className="text-lg font-bold text-zinc-950">{item.title}</h3>
            </div>

            <p className="text-base leading-7 text-zinc-700">{item.description}</p>

            <span className="mt-4 inline-flex items-center gap-1 font-semibold text-quackred-800">
              Find out more
              <span
                className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </span>
          </Link>
        ))}
      </div>
    </BootcampSection>
  );
};

const CareersProgressionSection = ({ course }) => {
  const hasRoles = course.careerOpportunities?.length > 0;

  const hasProgression = course.progressionItems?.length > 0;

  const hasJobSupport = course.jobSupport?.length > 0;

  const hasEmployerSection = Boolean(course.employerSection);

  if (!hasRoles && !hasProgression && !hasJobSupport && !hasEmployerSection) {
    return null;
  }

  return (
    <BootcampSection title="Careers and Progression">
      {course.progressionIntro && (
        <p className="mb-6 text-lg leading-8 text-zinc-800">{course.progressionIntro}</p>
      )}

      {(hasRoles || hasProgression) && (
        <div
          className={["grid gap-8", hasRoles && hasProgression ? "md:grid-cols-2" : ""].join(" ")}
        >
          {hasRoles && (
            <div>
              <h3 className="mb-3 text-xl font-bold text-zinc-950">Example roles</h3>

              <BootcampBulletList items={course.careerOpportunities} />
            </div>
          )}

          {hasProgression && (
            <div>
              <h3 className="mb-3 text-xl font-bold text-zinc-950">
                Sectors and progression areas
              </h3>

              <BootcampBulletList items={course.progressionItems} />
            </div>
          )}
        </div>
      )}

      {course.careerNote && (
        <p className="mt-6 text-lg leading-8 text-zinc-800">{course.careerNote}</p>
      )}

      {course.progressionOutro && (
        <p className="mt-4 text-lg leading-8 text-zinc-800">{course.progressionOutro}</p>
      )}

      {hasJobSupport && (
        <div className="mt-10">
          <h3 className="mb-3 text-2xl font-bold text-zinc-950">
            Employment and progression support
          </h3>

          {course.jobSupportIntro && (
            <p className="mb-6 text-lg leading-8 text-zinc-800">{course.jobSupportIntro}</p>
          )}

          <BootcampFeatureList items={course.jobSupport} variant="grid" />
        </div>
      )}

      {hasEmployerSection && (
        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-2xl font-bold text-zinc-950">
            {course.employerSection.title || "Employer Engagement"}
          </h3>

          {course.employerSection.description && (
            <p className="mt-4 text-lg leading-8 text-zinc-800">
              {course.employerSection.description}
            </p>
          )}

          {course.employerSection.details?.length > 0 && (
            <>
              <p className="my-4 text-lg leading-8 text-zinc-800">
                {course.employerSection.detailsIntro ||
                  "Employers may engage with the programme through:"}
              </p>

              <BootcampBulletList items={course.employerSection.details} />
            </>
          )}

          {course.employerSection.note && (
            <p className="mt-5 text-lg leading-8 text-zinc-800">{course.employerSection.note}</p>
          )}
        </div>
      )}
    </BootcampSection>
  );
};

const OfstedPanel = () => {
  return (
    <div className="my-10 rounded-2xl border border-zinc-200 bg-zinc-100 p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
            Our Ofsted inspection
          </p>

          <h2 className="text-2xl font-bold text-zinc-950">Significant Progress in Inclusion</h2>

          <p className="mt-3 text-base leading-7 text-zinc-700">
            Quack Recruitment & Training achieved Significant Progress in Inclusion, the highest
            possible progress judgement for this theme at a new-provider monitoring inspection.
          </p>

          <p className="mt-2 text-sm leading-6 text-zinc-600">
            This is a provider-level inspection outcome and is not a separate grade for this Skills
            Bootcamp or its funding commissioner.
          </p>
        </div>

        <Link
          href="/ofsted"
          className="
            inline-flex shrink-0 items-center justify-center gap-2
            rounded-lg border-2 border-quackred-800 bg-white
            px-5 py-3 font-semibold text-quackred-800
            transition hover:bg-quackred-50
          "
        >
          View our Ofsted results
          <span className="material-symbols-outlined text-xl" aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
};

const BottomApplySection = ({ course }) => {
  if (!course.apply?.href) return null;

  const heading =
    course.finalCta?.heading || course.apply.heading || "Apply for the Skills Bootcamp";

  const text = course.finalCta?.text || course.apply.text;

  const buttonText = course.finalCta?.buttonText || course.apply.buttonText || "Apply Now";

  return (
    <section className="mt-12 rounded-2xl bg-zinc-950 px-6 py-10 text-center text-white shadow-lg sm:px-8">
      <h2 className="mx-auto max-w-3xl text-3xl font-bold">{heading}</h2>

      {text && <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-200">{text}</p>}

      <a
        href={course.apply.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-7 inline-flex items-center justify-center
          rounded-lg bg-white px-6 py-3
          text-base font-semibold text-zinc-950
          transition hover:bg-quackred-50
        "
      >
        {buttonText}
      </a>
    </section>
  );
};

const LearnerInformation = ({ course, policies }) => {
  if (!course.handbook?.href && policies.length === 0) {
    return null;
  }

  return (
    <BootcampSection title="Learner Information">
      {course.handbook?.href && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-2xl font-bold text-zinc-950">
            {course.handbook.title || "Learner Handbook"}
          </h3>

          {toParagraphs(course.handbook.description).map((paragraph, index) => (
            <p key={index} className="mt-4 text-lg leading-8 text-zinc-800">
              {paragraph}
            </p>
          ))}

          <div className="mt-6">
            <HandbookButton handbook={course.handbook} />
          </div>
        </div>
      )}

      {policies.length > 0 && (
        <div className={course.handbook?.href ? "mt-8" : ""}>
          <h3 className="mb-5 text-2xl font-bold text-zinc-950">
            Policies and learner information
          </h3>

          <BootcampPolicies items={policies} />
        </div>
      )}

      <p className="mt-6 text-base leading-7 text-zinc-600">
        You can also find further information about{" "}
        <Link href="/learner-support" className="font-semibold text-quackred-800 hover:underline">
          learner support
        </Link>
        ,{" "}
        <Link href="/accessibility" className="font-semibold text-quackred-800 hover:underline">
          accessibility
        </Link>{" "}
        and{" "}
        <Link
          href="/report-a-safeguarding-concern"
          className="font-semibold text-quackred-800 hover:underline"
        >
          safeguarding
        </Link>
        .
      </p>
    </BootcampSection>
  );
};

const RelatedProgrammes = ({ courses }) => {
  if (!courses.length) return null;

  return (
    <section className="mb-10 mt-16 border-t border-zinc-200 pt-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
        Related provision
      </p>

      <h2 className="mb-4 text-3xl font-bold text-zinc-950">Explore Other Skills Bootcamps</h2>

      <p className="mb-8 max-w-3xl text-lg leading-8 text-zinc-700">
        Explore our other employer-led Skills Bootcamp pathways and find the programme that best
        matches your goals.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((item) => (
          <Link
            key={item.slug}
            href={item.link}
            className="
              group rounded-2xl border border-zinc-200
              bg-white p-6 shadow-sm transition
              hover:-translate-y-0.5 hover:shadow-md
            "
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-quackred-800">
              Skills Bootcamp
            </p>

            <h3 className="text-xl font-bold text-zinc-950 group-hover:text-quackred-800">
              {item.title}
            </h3>

            {item.authority?.name && (
              <p className="mt-2 text-sm font-semibold leading-6 text-zinc-600">
                {item.authority.name}
              </p>
            )}

            {item.cardDescription && (
              <p className="mt-4 text-base leading-7 text-zinc-700">{item.cardDescription}</p>
            )}

            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-quackred-800">
              View Skills Bootcamp
              <span
                className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

const BootcampCoursePage = ({ course, allCourses = [] }) => {
  if (!course) return null;

  const otherCourses = allCourses.filter((item) => item.slug !== course.slug);

  const cscsProgression = toParagraphs(course.cscsProgression);

  const policies = (course.policies || [])
    .filter((policy) => policy.link !== course.handbook?.href)
    .filter(
      (policy, index, items) => items.findIndex((item) => item.link === policy.link) === index,
    );

  return (
    <main className="flex flex-col bg-zinc-50">
      {/* Banner */}
      {course.banner && (
        <Banner
          eyebrow={course.banner.eyebrow || "Skills Bootcamp"}
          title={
            <>
              {course.banner.title}

              {course.banner.titleAccent && (
                <>
                  {" "}
                  <span className="text-quackred-800">{course.banner.titleAccent}</span>
                </>
              )}
            </>
          }
          description={course.banner.description || course.banner.slogan}
          imgSrc={course.banner.imgSrc}
          imgAlt={course.banner.imgAlt || ""}
          imagePosition={course.banner.imagePosition || course.banner.position || "right"}
          size={course.banner.size || "compact"}
        />
      )}

      {/* Cohort / application notice */}
      <div className="border-y border-quackred-200 bg-quackred-50">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-12">
          <p className="text-base font-medium text-zinc-900">
            {course.noticeText || "Next cohort starting soon"}

            {course.apply?.href && (
              <>
                {" - "}
                <a
                  href={course.apply.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-quackred-800 hover:underline"
                >
                  {course.noticeLinkText || "apply now to secure a place"}
                </a>
              </>
            )}
          </p>

          {course.handbook?.href && (
            <HandbookButton handbook={course.handbook} className="w-full md:w-auto" />
          )}
        </div>
      </div>

      {/* Provider / commissioner branding */}
      <ProgrammeBranding course={course} />

      <div className="mx-auto w-full max-w-screen-xl px-5 md:px-12">
        <div className="gap-10 lg:flex lg:items-start">
          {/* Main content */}
          <div className="min-w-0 lg:w-2/3">
            {/* Programme overview */}
            <BootcampSection title={course.overviewTitle || "Programme Overview"}>
              {course.hero?.intro?.length > 0 && (
                <div className="space-y-5">
                  {course.hero.intro.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-8 text-zinc-800">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </BootcampSection>

            {/* Mobile / tablet At a glance */}
            <div className="mb-10 space-y-6 lg:hidden">
              <ProgrammeAtAGlance course={course} />

              <BootcampApplyCard apply={course.apply} />
            </div>

            {/* Why choose */}
            {course.whyChoose?.length > 0 && (
              <BootcampSection title="Why Choose This Skills Bootcamp?">
                <BootcampFeatureList items={course.whyChoose} variant="grid" />
              </BootcampSection>
            )}

            {/* What you will learn */}
            {(course.learningFeatures?.length > 0 ||
              course.learningPoints?.length > 0 ||
              course.skillsDeveloped?.length > 0) && (
              <BootcampSection title={course.learningTitle || "What You Will Learn"}>
                {course.learningIntro && (
                  <p className="mb-5 text-lg leading-8 text-zinc-800">{course.learningIntro}</p>
                )}

                {course.learningFeatures?.length > 0 ? (
                  <BootcampFeatureList items={course.learningFeatures} variant="grid" />
                ) : (
                  course.learningPoints?.length > 0 && (
                    <BootcampBulletList items={course.learningPoints} />
                  )
                )}

                {course.learningOutro && (
                  <p className="mt-5 text-lg leading-8 text-zinc-800">{course.learningOutro}</p>
                )}

                {course.skillsDeveloped?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="mb-4 text-2xl font-bold text-zinc-950">
                      {course.skillsTitle || "Skills and Knowledge Developed"}
                    </h3>

                    <BootcampBulletList items={course.skillsDeveloped} />
                  </div>
                )}
              </BootcampSection>
            )}

            {/* Qualifications */}
            {(course.qualifications?.length > 0 || cscsProgression.length > 0) && (
              <BootcampSection title="Qualifications">
                {course.qualifications?.length > 0 && (
                  <>
                    <h3 className="mb-4 text-xl font-bold text-zinc-950">
                      Accredited qualifications
                    </h3>

                    <BootcampBulletList items={course.qualifications} />

                    {course.qualificationsNote && (
                      <p className="mt-5 text-lg leading-8 text-zinc-800">
                        {course.qualificationsNote}
                      </p>
                    )}
                  </>
                )}

                {cscsProgression.length > 0 && (
                  <div className={course.qualifications?.length > 0 ? "mt-8" : ""}>
                    <h3 className="mb-4 text-xl font-bold text-zinc-950">
                      Additional CITB and CSCS progression
                    </h3>

                    <div className="space-y-4">
                      {cscsProgression.map((paragraph, index) => (
                        <p key={index} className="text-lg leading-8 text-zinc-800">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </BootcampSection>
            )}

            {/* Learner support */}
            <LearnerSupportSection course={course} />

            {/* Careers and progression */}
            <CareersProgressionSection course={course} />

            {/* Testimonials */}
            {course.testimonials?.length > 0 && (
              <BootcampSection title={course.testimonialsTitle || "Learner Success Stories"}>
                <BootcampTestimonials items={course.testimonials} />
              </BootcampSection>
            )}

            {/* Ofsted */}
            <OfstedPanel />

            {/* Eligibility */}
            {course.overview?.eligibility?.length > 0 && (
              <BootcampSection title="Who Can Apply">
                <p className="mb-5 text-lg leading-8 text-zinc-800">
                  To be eligible for this Skills Bootcamp, applicants must:
                </p>

                <BootcampBulletList items={course.overview.eligibility} />

                {course.eligibilityNote && (
                  <p className="mt-5 text-lg leading-8 text-zinc-800">{course.eligibilityNote}</p>
                )}

                {course.learnerExpectations?.length > 0 && (
                  <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
                    <h3 className="mb-4 text-xl font-bold text-zinc-950">
                      What we expect from learners
                    </h3>

                    <BootcampBulletList items={course.learnerExpectations} />
                  </div>
                )}
              </BootcampSection>
            )}

            {/* Main lower-page CTA */}
            <BottomApplySection course={course} />

            {/* Handbook and policies */}
            <LearnerInformation course={course} policies={policies} />

            {/* Related programmes */}
            <RelatedProgrammes courses={otherCourses} />
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block lg:w-1/3 lg:self-stretch">
            <div className="sticky top-24 space-y-6 py-10">
              <ProgrammeAtAGlance course={course} />

              <BootcampApplyCard apply={course.apply} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BootcampCoursePage;
