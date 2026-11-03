import Banner from "@/components/Banner";
import Section from "@/components/Sections/Section";
import AllPolicies from "@/components/templates/AllPolicies";

export const metadata = {
  title: "Policies | Quack Recruitment & Training",
  description:
    "Access current public-facing policies from Quack Recruitment & Training Ltd, including safeguarding, learner support, complaints, equality and data protection policies.",
};

const Policies = () => {
  return (
    <main className="flex flex-col">
      <Banner
        eyebrow="Policies"
        title="Our policies"
        description="Access our current public-facing policies and controlled documents."
        imgSrc="/images/banners/privacy-banner.jpg"
        imgAlt=""
        position="right"
      />
      <Section bgColor="bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Policy library
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">Our Policies</h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-zinc-700">
              <p>
                This library contains Quack Recruitment & Training&apos;s principal public-facing
                policies.
              </p>

              <p>
                Supporting operational procedures, risk assessments, registers and assurance records
                are maintained within our controlled management system and are available to relevant
                regulatory, funding and assurance bodies where appropriate.
              </p>

              <p>
                If you require an accessible version of a policy or need help understanding any of
                the information published here, please contact Jessica Roughton at{" "}
                <a
                  href="mailto:jessica.roughton@quackrecruitmentandtraining.co.uk"
                  className="inline-block max-w-full [overflow-wrap:anywhere] font-semibold text-quackred-800 underline-offset-4 hover:underline"
                >
                  jessica.roughton@quackrecruitmentandtraining.co.uk
                </a>
                .
              </p>
            </div>
          </div>

          <AllPolicies />
        </div>
      </Section>
    </main>
  );
};

export default Policies;
