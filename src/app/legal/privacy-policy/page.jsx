import Banner from "@/components/Banner";
import PageLink from "@/components/PageLink";
import Section from "@/components/Sections/Section";
import { PolicyItem } from "@/components/templates/AllPolicies";

export const metadata = {
  title: "Privacy & Data Protection | Quack Recruitment & Training",
  description:
    "Learn how Quack Recruitment & Training Ltd handles personal information and access our current GDPR and Learner Privacy Policy.",
};

const PrivacyPolicy = () => {
  return (
    <main className="flex flex-col">
      <Banner
        eyebrow="Privacy & Data Protection"
        title="How we handle your information"
        description="Information about how Quack Recruitment & Training Ltd collects, uses, stores and protects personal information."
        imgSrc="/images/banners/privacy-banner.jpg"
        imgAlt=""
        position="right"
      />

      <Section bgColor="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Data protection
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Our commitment to protecting personal information
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-700">
              <p>
                Quack Recruitment & Training Ltd is committed to handling personal information
                lawfully, fairly, securely and transparently.
              </p>

              <p>
                We collect and use personal information where necessary to provide training,
                recruitment, learner support and related services, meet our legal and contractual
                obligations and administer publicly funded Skills Bootcamp provision.
              </p>

              <p>
                Our current controlled GDPR and Learner Privacy Policy explains how we collect, use,
                store, share and protect personal information and explains the rights available to
                individuals.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Current policy
            </p>

            <h2 className="text-2xl font-bold text-zinc-950">GDPR & Learner Privacy Policy</h2>

            <p className="mt-4 text-base leading-7 text-zinc-700">
              Access our current controlled GDPR and Learner Privacy Policy below.
            </p>

            <div className="mt-6">
              <PolicyItem
                policy={{
                  title: "GDPR and Learner Privacy Policy",
                  version: "v3.0",
                  href: "/docs/policies/4.2-quack-gdpr-learner-privacy-policy-v3.pdf",
                }}
              />
            </div>

            <div className="mt-6 border-t border-zinc-200 pt-6">
              <PageLink href="/legal/policies" label="View all policies" arrow variant="outline" />
            </div>
          </aside>
        </div>
      </Section>

      <Section bgColor="bg-zinc-200">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Questions about your data
            </p>

            <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">Need more information?</h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
              For general enquiries about how we handle personal information, please contact us
              using our main public contact address.
            </p>

            <div className="mt-6">
              <a
                href="mailto:applications@quackrecruitmentandtraining.co.uk"
                className="break-all font-semibold text-quackred-800 hover:underline"
              >
                applications@quackrecruitmentandtraining.co.uk
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default PrivacyPolicy;
