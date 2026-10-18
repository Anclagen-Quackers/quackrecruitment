import Banner from "@/components/Banner";
import Section from "@/components/Sections/Section";
import GeneralContactForm from "@/components/ContactForms/GeneralContactForm";
import { quackRecruitmentLocations } from "@/components/data/locations";
import ExpandableSectionFAQ from "@/components/ExpandableSection/ExpandableSectionFAQ";

export const metadata = {
  title: "Contact | Quack Recruitment & Training",
  description:
    "Contact Quack Recruitment & Training for Skills Bootcamps, learner support, recruitment services, employer enquiries and general assistance.",
  keywords: [
    "Quack Recruitment & Training",
    "Contact Quack Recruitment & Training",
    "Skills Bootcamp enquiries",
    "Training enquiries",
    "Employer support",
    "Learner support",
    "Recruitment enquiries",
    "Stevenage",
  ],
};

const contactDetails = [
  {
    icon: "mail",
    title: "Email",
    content: (
      <a
        href="mailto:applications@quackrecruitmentandtraining.co.uk"
        className="font-semibold text-quackred-800 hover:underline"
      >
        applications@quackrecruitmentandtraining.co.uk
      </a>
    ),
  },
  {
    icon: "call",
    title: "Phone",
    content: (
      <a href="tel:03335770036" className="font-semibold text-quackred-800 hover:underline">
        0333 577 0036
      </a>
    ),
  },
  {
    icon: "schedule",
    title: "Office hours",
    content: (
      <div className="space-y-1">
        <p>Monday to Friday: 8:00am – 5:30pm</p>
        <p>Saturday to Sunday: 9:00am – 3:00pm</p>
      </div>
    ),
  },
];

const Contact = () => {
  return (
    <main className="flex flex-col bg-zinc-50">
      <Banner
        eyebrow="Contact"
        title={
          <>
            Get in touch with{" "}
            <span className="text-quackred-800">Quack Recruitment & Training</span>
          </>
        }
        description="Whether you are interested in a Skills Bootcamp, need learner support, are looking for recruitment services or simply have a question, our team is here to help."
        imgSrc="/images/banners/contact_banner.jpg"
        imgAlt=""
        imagePosition="right"
        size="default"
      />

      {/* Contact details + form */}
      <Section bgColor="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Contact details
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">How can we help?</h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-700">
              Contact us by email or phone, or use the enquiry form and a member of the team will
              respond as soon as possible.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                >
                  <span
                    className="material-symbols-outlined mt-0.5 shrink-0 text-2xl text-quackred-800"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-bold text-zinc-950">{item.title}</h3>

                    <div className="mt-1 overflow-wrap-anywhere text-base leading-7 text-zinc-700 [overflow-wrap:anywhere]">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-2xl text-quackred-800"
                  aria-hidden="true"
                >
                  location_on
                </span>

                <h3 className="text-xl font-bold text-zinc-950">Legal / Head office</h3>
              </div>

              <address className="mt-4 not-italic leading-7 text-zinc-700">
                Quack Recruitment & Training Ltd
                <br />
                Business & Technology Centre
                <br />
                Bessemer Drive
                <br />
                Stevenage
                <br />
                SG1 2DX
              </address>

              <p className="mt-5 border-t border-zinc-200 pt-5 text-sm leading-6 text-zinc-600">
                Quack Recruitment & Training Ltd is registered in England and Wales under company
                number 11066952.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Send an enquiry
            </p>

            <h2 className="text-3xl font-bold text-zinc-950">Get in touch</h2>

            <p className="mt-4 mb-7 text-base leading-7 text-zinc-700">
              Complete the form below with your enquiry and provide enough information for us to
              direct it to the right member of the team.
            </p>

            <GeneralContactForm />
          </div>
        </div>
      </Section>

      {/* Branches */}
      <Section bgColor="bg-zinc-100">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-quackred-800">
              Locations
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
              Our branches and serviced locations
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-700">
              View our current locations below. If you are unsure which location is most relevant to
              your enquiry, contact our team and we can point you in the right direction.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="mb-5 text-2xl font-bold text-zinc-950">Find a branch near you</h3>

            <div className="space-y-3">
              {quackRecruitmentLocations.locations.map((location, index) => (
                <ExpandableSectionFAQ title={location.area} key={`${location.area}-${index}`}>
                  <div className="space-y-4">
                    {location.addresses.map((address, addressIndex) => (
                      <address
                        key={addressIndex}
                        className={[
                          "not-italic text-base leading-7 text-zinc-700",
                          addressIndex !== location.addresses.length - 1
                            ? "border-b border-zinc-200 pb-4"
                            : "",
                        ].join(" ")}
                      >
                        <p className="font-semibold text-zinc-950">Quack Recruitment & Training</p>

                        {address.address.map((line, lineIndex) => (
                          <p key={lineIndex}>{line}</p>
                        ))}

                        <p>{address.postalCode}</p>
                      </address>
                    ))}
                  </div>
                </ExpandableSectionFAQ>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="border-b border-zinc-200 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-2xl text-quackred-800"
                  aria-hidden="true"
                >
                  map
                </span>

                <h3 className="text-xl font-bold text-zinc-950">Offices & serviced locations</h3>
              </div>
            </div>

            <div className="relative h-[500px] w-full md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1AEQ0AIORpHpTdUN1ZYW8NfvsZR_yjvM&ehbc=2E312F&noprof=1"
                title="Quack Recruitment & Training offices and serviced locations"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
