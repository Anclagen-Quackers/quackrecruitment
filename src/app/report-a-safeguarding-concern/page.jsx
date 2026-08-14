import BannerHalf from "@/components/Banner/BannerHalf";
import Image from "next/image";
import Link from "next/link";

const formLink =
  "https://forms.cloud.microsoft/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__n3F9tZUOEkyQkNKVkYyOE1IMTE0WUFNQzA5NEhFWC4u&route=shorturl";

const contacts = [
  {
    role: "Designated Safeguarding Lead",
    name: "Jessica Roughton",
    email: "jessica.roughton@quackrecruitmentandtraining.co.uk",
  },
  {
    role: "Deputy Designated Safeguarding Lead",
    name: "Aaron Jones",
    email: "aaron.jones@quackrecruitmentandtraining.co.uk",
  },
];

const concernTypes = [
  "safeguarding",
  "welfare",
  "Prevent",
  "abuse",
  "exploitation",
  "harassment",
  "discrimination",
  "mental health",
  "online safety",
  "staff conduct",
  "workplace concern",
];

const policyLinks = [
  {
    label: "Safeguarding, Prevent & Online Safety Policy",
    href: "/docs/Quack_Recruitment_and_Training-Safeguarding_Policy_v.4.pdf",
  },
  {
    label: "Safeguarding Learner Onboarding",
    href: "/docs/Quack_safeguarding_learner_onboarding.pdf",
  },
  {
    label: "Prevent Risk Assessment",
    href: "/docs/Quack_Prevent_Risk_Assessment_June_2026.pdf",
  },
  {
    label: "All Policies",
    href: "/legal/policies",
  },
];

export const metadata = {
  title: "Report a Safeguarding Concern | Quack Recruitment & Training",
  description:
    "Report a safeguarding, welfare, Prevent, abuse, exploitation, harassment, discrimination, mental health, online safety, staff conduct or workplace concern to Quack Recruitment & Training.",
};

const ReportSafeguardingConcern = () => {
  return (
    <main className="flex flex-col bg-gray-50">
      <BannerHalf
        title="Report a Safeguarding Concern"
        slogan="A clear route to report concerns online"
        imgSrc="/images/banners/training-banner.jpg"
        imgAlt="Learners in a training environment"
        position="center"
      />

      <section className="bg-quackred-50 border-y border-quackred-200">
        <div className="mx-auto max-w-screen-2xl px-4 py-5">
          <div className="flex flex-col gap-3 rounded-lg border border-quackred-300 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <span
                className="material-icons mt-1 text-3xl text-quackred-800"
                aria-hidden="true"
              >
                warning
              </span>
              <div>
                <p className="text-2xl font-bold text-gray-950">
                  If someone is in immediate danger, call 999 first.
                </p>
                <p className="mt-1 text-lg font-semibold text-quackred-900">
                  This form is not monitored 24/7.
                </p>
              </div>
            </div>

            <a
              href="tel:999"
              className="inline-flex w-full items-center justify-center rounded-lg bg-quackred-800 px-5 py-3 text-base font-semibold text-white transition hover:bg-quackred-700 focus:outline-none focus:ring-2 focus:ring-quackred-500 focus:ring-offset-2 md:w-auto"
            >
              Call 999
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-2xl px-4 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          <div className="space-y-8 lg:col-span-2">
            <section className="lg:px-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-quackred-700">
                Safeguarding concern form
              </p>
              <h2 className="mb-6 text-3xl font-bold text-gray-950 sm:text-4xl">
                Tell our safeguarding team about a concern
              </h2>
              <div className="space-y-5 text-lg leading-8 text-gray-900">
                <p>
                  Quack Recruitment & Training is committed to keeping learners, applicants, staff
                  and stakeholders safe.
                </p>
                <p>
                  If you are worried about your own safety or wellbeing, or you are concerned about
                  someone else, you can use the Safeguarding Concern Form to report the concern to
                  our safeguarding team.
                </p>
                <p>
                  You can use this form to report a safeguarding, welfare, Prevent, abuse,
                  exploitation, harassment, discrimination, mental health, online safety, staff
                  conduct or workplace concern.
                </p>
                <p>
                  You can report anonymously, but this may limit our ability to follow up or provide
                  support.
                </p>
              </div>
            </section>

            <section className="rounded-xl border border-quackred-100 bg-white p-6 shadow-lg lg:mx-10">
              <h2 className="mb-4 text-3xl font-bold text-gray-950">
                Report a Safeguarding Concern
              </h2>
              <p className="mb-6 text-lg leading-8 text-gray-900">
                Use the online form to send a concern to the safeguarding team. For urgent or
                immediate danger, call 999 first.
              </p>
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-quackred-800 px-6 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-quackred-700 focus:outline-none focus:ring-2 focus:ring-quackred-500 focus:ring-offset-2 sm:w-auto"
              >
                Report a Safeguarding Concern
              </a>
            </section>

            <section className="lg:px-10">
              <h2 className="mb-5 text-3xl font-bold text-gray-950">How Concerns Are Handled</h2>
              <div className="space-y-5 text-lg leading-8 text-gray-900">
                <p>
                  Concerns submitted through this form will be reviewed by the Designated
                  Safeguarding Lead or Deputy Designated Safeguarding Lead. Where necessary,
                  information may be shared with relevant safeguarding agencies to protect a child,
                  young person or adult at risk.
                </p>
                <p>
                  Concerns are handled sensitively, but information may be shared where necessary to
                  protect someone from harm.
                </p>
              </div>
            </section>

            <section className="lg:px-10">
              <h2 className="mb-5 text-3xl font-bold text-gray-950">What You Can Report</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {concernTypes.map((type) => (
                  <li key={type} className="flex items-start gap-3 text-lg text-gray-900">
                    <span
                      className="material-icons mt-1 text-xl text-quackred-800"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="capitalize">{type}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-xl bg-quackred-800 p-6 text-white shadow-xl">
              <h2 className="mb-4 text-3xl font-bold">Safeguarding Contacts</h2>
              <p className="mb-6 text-lg">
                If someone is in immediate danger, call 999 first.
              </p>

              <div className="space-y-5">
                {contacts.map((contact) => (
                  <div key={contact.email} className="border-t border-quackred-300 pt-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-quackred-100">
                      {contact.role}
                    </p>
                    <p className="mt-1 text-xl font-bold">{contact.name}</p>
                    <a className="break-words underline" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-quackred-300 pt-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-quackred-100">
                  Safeguarding Email
                </p>
                <a
                  className="mt-1 block break-words text-lg font-semibold underline"
                  href="mailto:safeguarding@quackrecruitmentandtraining.co.uk"
                >
                  safeguarding@quackrecruitmentandtraining.co.uk
                </a>
              </div>

              <div className="mt-5 border-t border-quackred-300 pt-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-quackred-100">
                  Telephone
                </p>
                <a className="mt-1 block text-xl font-bold underline" href="tel:03335770036">
                  0333 577 0036
                </a>
              </div>
            </section>

            <section className="rounded-xl border border-quackred-100 bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-gray-950">
                Safeguarding Information
              </h2>
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mb-6 block w-fit rounded-2xl bg-white p-1 shadow-sm ring-1 ring-quackred-100"
              >
                <span className="sr-only">Open the Safeguarding Concern Form</span>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/QRCode-Safeguarding-Concern-Form.jpg"
                    alt="QR code for the Safeguarding Concern Form"
                    width={600}
                    height={600}
                    className="h-48 w-48 object-cover md:h-56 md:w-56 lg:h-64 lg:w-64"
                  />
                </div>
              </a>
              <div className="space-y-3">
                {policyLinks.map((link) =>
                  link.href.startsWith("/docs/") ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-lg border border-quackred-100 bg-gray-50 px-4 py-3 text-base font-semibold text-gray-950 transition hover:border-quackred-300 hover:bg-quackred-50"
                    >
                      <span>{link.label}</span>
                      <span className="text-sm text-quackred-800">PDF</span>
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between gap-3 rounded-lg border border-quackred-100 bg-gray-50 px-4 py-3 text-base font-semibold text-gray-950 transition hover:border-quackred-300 hover:bg-quackred-50"
                    >
                      <span>{link.label}</span>
                      <span className="material-icons text-quackred-800" aria-hidden="true">
                        arrow_forward
                      </span>
                    </Link>
                  ),
                )}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ReportSafeguardingConcern;
