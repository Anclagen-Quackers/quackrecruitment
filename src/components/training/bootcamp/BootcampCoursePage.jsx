import BannerHalf from "@/components/Banner/BannerHalf";
import BootcampOverviewCard from "./BootcampOverviewCard";
import BootcampSection from "./BootcampSection";
import BootcampBulletList from "./BootcampBulletList";
import BootcampTestimonials from "./BootcampTestimonials";
import BootcampFeatureList from "./BootcampFeatureList";
import BootcampApplyCard from "./BootcampApplyCard";
import BootcampPolicies from "./BootcampPolicies";
import Link from "next/link";

const toParagraphs = (content) => {
  if (!content) return [];
  return Array.isArray(content) ? content : [content];
};

const HandbookButton = ({ handbook, className = "" }) => {
  if (!handbook?.href) return null;

  return (
    <a
      href={handbook.href}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex justify-center rounded-lg bg-quackred-800 px-6 py-3 text-base font-semibold text-white transition hover:bg-quackred-600 ${className}`}
    >
      {handbook.buttonText || "Download Learner Handbook"}
    </a>
  );
};

const BootcampCoursePage = ({ course, allCourses = [] }) => {
  if (!course) return null;

  const otherCourses = allCourses.filter((item) => item.slug !== course.slug);
  const cscsProgression = toParagraphs(course.cscsProgression);

  return (
    <main className="flex flex-col bg-gray-50">
      {course.banner && (
        <BannerHalf
          title={course.banner.title}
          slogan={course.banner.slogan}
          imgSrc={course.banner.imgSrc}
          imgAlt={course.banner.imgAlt}
          position={course.banner.position || "center"}
        />
      )}

      <div className="border-y border-quackred-200 bg-quackred-50">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-md font-medium text-gray-900">
            {course.noticeText || "Next cohort starting soon"}
            {course.apply?.href && (
              <>
                {" - "}
                <a
                  href={course.apply.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-quackred-700 hover:underline"
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

      <div className="mx-auto max-w-screen-2xl px-4 lg:py-12">
        <div className="gap-10 lg:flex">
          <div className="mx-auto max-w-screen-2xl lg:w-2/3">
            {course.brandingLogos?.length > 0 && (
              <section className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:mx-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  {course.brandingLogos.map((logo) => (
                    <img
                      key={logo.src}
                      src={logo.src}
                      alt={logo.alt}
                      className={`h-auto max-w-full object-contain ${logo.className || "max-h-20 w-auto"}`}
                    />
                  ))}
                </div>
              </section>
            )}

            <BootcampSection
              title={course.overviewTitle || "Course Overview"}
              bannerTitle={course.banner?.title}
            >
              <div className="space-y-5">
                {course.hero?.intro?.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-8 text-gray-900">
                    {paragraph}
                  </p>
                ))}
              </div>
            </BootcampSection>

            {course.programmeStructure?.length > 0 && (
              <BootcampSection title={course.programmeStructureTitle || "Programme Structure"}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {course.programmeStructure.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-quackred-100 bg-white p-5 shadow-sm"
                    >
                      <p className="text-3xl font-bold text-quackred-800">{item.value}</p>
                      <p className="mt-2 text-base font-semibold leading-6 text-gray-900">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                {course.programmeStructureNote && (
                  <p className="mt-5 text-lg leading-8 text-gray-900">
                    {course.programmeStructureNote}
                  </p>
                )}
              </BootcampSection>
            )}

            <BootcampSection title={course.learningTitle || "What You Will Learn"}>
              {course.learningIntro && (
                <p className="mb-4 text-lg leading-8 text-gray-900">{course.learningIntro}</p>
              )}
              {course.learningFeatures?.length > 0 ? (
                <BootcampFeatureList items={course.learningFeatures} variant="grid" />
              ) : (
                <BootcampBulletList items={course.learningPoints} />
              )}
              {course.learningOutro && (
                <p className="mt-4 text-lg leading-8 text-gray-900">{course.learningOutro}</p>
              )}
            </BootcampSection>

            {course.qualifications?.length > 0 && (
              <BootcampSection title="Qualifications Delivered">
                <BootcampBulletList items={course.qualifications} />
                {course.qualificationsNote && (
                  <p className="mt-4 text-lg leading-8 text-gray-900">
                    {course.qualificationsNote}
                  </p>
                )}
              </BootcampSection>
            )}

            {cscsProgression.length > 0 && (
              <BootcampSection title="CSCS Labourer Card Progression">
                <div className="space-y-5">
                  {cscsProgression.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-8 text-gray-900">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </BootcampSection>
            )}

            {course.learnerSupport?.length > 0 && (
              <BootcampSection title={course.learnerSupportTitle || "Safeguarding and Learner Support"}>
                {course.learnerSupportIntro && (
                  <p className="mb-4 text-lg leading-8 text-gray-900">
                    {course.learnerSupportIntro}
                  </p>
                )}
                <BootcampBulletList items={course.learnerSupport} />
              </BootcampSection>
            )}

            {course.learnerExpectations?.length > 0 && (
              <BootcampSection title="Learner Expectations">
                <BootcampBulletList items={course.learnerExpectations} />
              </BootcampSection>
            )}

            {course.careerOpportunities?.length > 0 && (
              <BootcampSection title={course.careerTitle || "Career Opportunities"}>
                <BootcampBulletList items={course.careerOpportunities} />
                {course.careerNote && (
                  <p className="mt-4 text-lg leading-8 text-gray-900">{course.careerNote}</p>
                )}
              </BootcampSection>
            )}

            <div className="mt-10 lg:hidden">
              <BootcampApplyCard apply={course.apply} />
            </div>

            {course.testimonials?.length > 0 && (
              <BootcampSection title={course.testimonialsTitle || "Learner Success Stories"}>
                <BootcampTestimonials items={course.testimonials} />
              </BootcampSection>
            )}

            {course.jobSupport?.length > 0 && (
              <BootcampSection title={course.jobSupportTitle || "How We Help You Get a Job"}>
                {course.jobSupportIntro && (
                  <p className="mb-6 text-lg leading-8 text-gray-900">{course.jobSupportIntro}</p>
                )}
                <BootcampFeatureList items={course.jobSupport} variant="grid" />
              </BootcampSection>
            )}

            {course.employerSection && (
              <BootcampSection title={course.employerSection.title || "Employer Engagement"}>
                <p className="text-lg leading-8 text-gray-900">
                  {course.employerSection.description}
                </p>
                {course.employerSection.details?.length > 0 && (
                  <>
                    <p className="my-4 text-lg leading-8 text-gray-900">
                      {course.employerSection.detailsIntro ||
                        "Employers may engage with the programme through:"}
                    </p>
                    <BootcampBulletList items={course.employerSection.details} />
                  </>
                )}
              </BootcampSection>
            )}

            {course.whyChoose?.length > 0 && (
              <BootcampSection title="Why Choose Quack Recruitment & Training?">
                <BootcampFeatureList items={course.whyChoose} variant="grid" />
              </BootcampSection>
            )}

            {course.progressionItems?.length > 0 && (
              <BootcampSection title={course.progressionTitle || "Where Our Learners Now Work"}>
                {course.progressionIntro && (
                  <p className="mb-4 text-lg leading-8 text-gray-900">{course.progressionIntro}</p>
                )}
                <BootcampBulletList items={course.progressionItems} />
                {course.progressionOutro && (
                  <p className="mt-4 text-lg leading-8 text-gray-900">{course.progressionOutro}</p>
                )}
              </BootcampSection>
            )}

            <div className="hidden px-10 lg:block">
              <BootcampApplyCard apply={course.apply} />
            </div>

            {course.handbook?.href && (
              <BootcampSection title={course.handbook.title || "Learner Handbook"}>
                {toParagraphs(course.handbook.description).map((paragraph, index) => (
                  <p key={index} className="mb-5 text-lg leading-8 text-gray-900">
                    {paragraph}
                  </p>
                ))}
                <HandbookButton handbook={course.handbook} />
              </BootcampSection>
            )}

            {course.policies?.length > 0 && (
              <BootcampSection title="Policies & Learner Information">
                <BootcampPolicies items={course.policies} variant="grid" />
              </BootcampSection>
            )}

            {course.finalCta && (
              <section className="mt-14 rounded-xl bg-gray-900 px-6 py-10 text-center text-white shadow-xl lg:mx-10">
                <h3 className="mx-auto max-w-3xl text-3xl font-bold">
                  {course.finalCta.heading}
                </h3>
                {course.finalCta.text && (
                  <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-100">
                    {course.finalCta.text}
                  </p>
                )}
                {course.apply?.href && (
                  <a
                    href={course.apply.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 transition hover:bg-quackred-50"
                  >
                    {course.finalCta.buttonText || "Apply Now"}
                  </a>
                )}
              </section>
            )}

            {otherCourses.length > 0 && (
              <section className="mt-16 border-t border-quackred-100 pt-12 lg:px-10">
                <h3 className="mb-4 text-3xl font-bold">Other Skills Bootcamps Available</h3>
                <p className="mb-8 max-w-3xl text-lg leading-8 text-gray-900">
                  Explore our other Skills Bootcamp programmes designed to support different career
                  pathways.
                </p>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {otherCourses.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.link}
                      className="group rounded-2xl border border-quackred-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-quackred-700">
                        Skills Bootcamp
                      </p>

                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-quackred-800">
                        {item.title}
                      </h4>

                      {item.authority?.name && (
                        <p className="mt-2 text-sm leading-6 text-gray-700">
                          {item.authority.name}
                        </p>
                      )}

                      {item.cardDescription && (
                        <p className="mt-4 text-base leading-7 text-gray-800">
                          {item.cardDescription}
                        </p>
                      )}

                      <span className="mt-5 inline-flex text-sm font-semibold text-quackred-700 group-hover:underline">
                        View Skills Bootcamp
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="mt-10 mb-10 space-y-6 lg:w-1/3">
            <BootcampOverviewCard overview={course.overview} authority={course.authority} />
            <BootcampApplyCard apply={course.apply} />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BootcampCoursePage;
