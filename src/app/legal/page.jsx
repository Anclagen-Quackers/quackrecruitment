import Banner from "@/components/Banner";
import PageLink from "@/components/PageLink";
import Section from "@/components/Sections/Section";

export const metadata = {
  title: "Legal | Quack Recruitment & Training",
  description:
    "Legal information for Quack Recruitment & Training Ltd, a company registered in England and Wales under company number 11066952.",
};

const companyDetails = [
  {
    label: "Company name",
    value: "Quack Recruitment & Training Ltd",
  },
  {
    label: "Company number",
    value: "11066952",
  },
  {
    label: "Registered office",
    value: "Business & Technology Centre, Bessemer Drive, Stevenage, Herts, SG1 2DX",
  },
  {
    label: "Email",
    value: (
      <a
        href="mailto:applications@quackrecruitmentandtraining.co.uk"
        className="text-quackred-800 hover:underline break-all"
      >
        applications@quackrecruitmentandtraining.co.uk
      </a>
    ),
  },
  {
    label: "Phone",
    value: "0333 577 0036",
  },
];

const insuranceDetails = [
  "Public Liability: £10m",
  "Employers' Liability: £10m",
  "Professional Indemnity: £10m",
];

const Legal = () => {
  return (
    <main className="flex flex-col">
      <Banner
        eyebrow="Legal"
        title="Company information & legal notice"
        description="Legal information about Quack Recruitment & Training Ltd and the operation of this website."
        imgSrc="/images/banners/legal-banner.jpg"
        imgAlt=""
        position="right"
      />

      <Section bgColor="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Legal notice
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              About the organisation responsible for this website
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-700">
              <p>
                This website is operated by Quack Recruitment & Training Ltd, a company registered
                in England and Wales under company number 11066952.
              </p>

              <p>
                We are a GLAA licence holder and our insurance levels are set up to support our
                clients&apos; needs.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-zinc-950">Insurance cover</h3>

              <ul className="mt-4 space-y-3">
                {insuranceDetails.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined mt-1 text-quackred-800"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>

                    <span className="text-lg text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Company details
            </p>

            <h2 className="text-2xl font-bold text-zinc-950">Quack Recruitment & Training Ltd</h2>

            <dl className="mt-6 divide-y divide-zinc-200">
              {companyDetails.map((item) => (
                <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                  <dt className="font-semibold text-zinc-950">{item.label}</dt>

                  <dd className="text-zinc-700">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <Section bgColor="bg-zinc-200">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Policies and data protection
            </p>

            <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">
              Further legal information
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
              You can find more information about how we handle personal data and view our principal
              public-facing policies below.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PageLink href="/legal/privacy-policy" label="Privacy & Data Protection" arrow />

              <PageLink href="/legal/policies" label="View Policies" arrow variant="outline" />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Legal;
