"use client";
import PolicyCard from "@/components/Card/PolicyCard";
import { useState } from "react";

const AllPolicies = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 max-w-3xl">
        <p className="text-lg leading-8 text-gray-800">
          Access current Quack Recruitment & Training policies covering safeguarding, learner
          support, assessment, data protection, governance, health and safety and responsible
          business.
        </p>
      </div>

      <div className="space-y-14">
        {policyGroups.map((group) => (
          <section key={group.id} id={group.id}>
            <div className="mb-6 border-l-4 border-quackred-700 pl-4">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-quackred-700">
                Policy area
              </p>

              <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{group.title}</h2>

              {group.description && (
                <p className="mt-2 max-w-3xl text-base leading-7 text-gray-700">
                  {group.description}
                </p>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {group.policies.map((policy) => (
                <PolicyItem key={policy.href} policy={policy} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AllPolicies;

const PolicyItem = ({ policy }) => {
  return (
    <a
      href={policy.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-quackred-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-quackred-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-gray-900 transition group-hover:text-quackred-800">
              {policy.title}
            </h3>

            {policy.version && (
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                {policy.version}
              </span>
            )}
          </div>

          {policy.description && (
            <p className="mt-2 text-sm leading-6 text-gray-600">{policy.description}</p>
          )}

          {policy.reference && (
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-500">
              Policy {policy.reference}
            </p>
          )}
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <span className="rounded-md bg-quackred-100 px-3 py-1 text-sm font-medium text-quackred-700">
            PDF
          </span>

          <span
            className="material-icons text-xl text-gray-400 transition group-hover:text-quackred-700"
            aria-hidden="true"
          >
            open_in_new
          </span>
        </div>
      </div>
    </a>
  );
};

export const policyGroups = [
  {
    id: "safeguarding",
    title: "Safeguarding, Prevent and Staff Suitability",
    description:
      "Policies covering safeguarding, Prevent responsibilities and safer recruitment practices.",
    policies: [
      {
        title: "Safeguarding, Prevent and Online Safety Policy",
        version: "v5.0",
        href: "/docs/policies/1.1-quack-safeguarding-prevent-online-safety-policy-v5.pdf",
      },
      {
        title: "Prevent, Radicalisation and Extremism Policy",
        version: "v3.0",
        href: "/docs/policies/1.3-quack-prevent-radicalisation-extremism-policy-v3.pdf",
      },
      {
        title: "Safer Recruitment, Selection and Pre-Employment Checks Policy",
        version: "v2.0",
        href: "/docs/policies/1.5-quack-safer-recruitment-selection-pre-employment-checks-v2.pdf",
      },
    ],
  },

  {
    id: "learner-support",
    title: "Learner Journey, Support and Progression",
    description:
      "Policies covering learner support, inclusion, progression, attendance, conduct and complaints.",
    policies: [
      {
        title: "Learner Support Policy",
        version: "v2.0",
        href: "/docs/policies/2.1-quack-learner-support-policy-v2.pdf",
      },
      {
        title: "Equality, Diversity and Inclusion Policy",
        version: "v2.0",
        href: "/docs/policies/2.2-quack-equality-diversity-inclusion-policy-v2.pdf",
      },
      {
        title: "Information, Advice, Guidance, Careers and Progression Policy",
        version: "v1.0",
        href: "/docs/policies/2.3-quack-iag-careers-progression-policy-v1.pdf",
      },
      {
        title: "Attendance, Engagement, Re-engagement and Withdrawal Policy",
        version: "v1.0",
        href: "/docs/policies/2.4-quack-attendance-engagement-withdrawal-policy-v1.pdf",
      },
      {
        title: "Learner Conduct, Behaviour and Anti-Bullying Policy",
        version: "v1.0",
        href: "/docs/policies/2.5-quack-learner-conduct-behaviour-anti-bullying-policy-v1.pdf",
      },
      {
        title: "Complaints Policy and Procedure",
        version: "v2.0",
        href: "/docs/policies/2.7-quack-complaints-policy-procedure-v2.pdf",
      },
    ],
  },

  {
    id: "curriculum-quality",
    title: "Curriculum, Assessment and Quality",
    description:
      "Policies governing teaching, assessment, examinations, academic integrity and online learning.",
    policies: [
      {
        title: "Teaching, Learning and Assessment Policy",
        version: "v1.0",
        href: "/docs/policies/3.1-quack-teaching-learning-assessment-policy-v1.pdf",
      },
      {
        title: "Assessment Appeals, Enquiries and Reviews Procedure",
        version: "v2.0",
        href: "/docs/policies/3.3-quack-assessment-appeals-enquiries-reviews-v2.pdf",
      },
      {
        title: "Examinations, E-Assessment and Invigilation Policy",
        version: "v2.0",
        href: "/docs/policies/3.4-quack-examinations-e-assessment-invigilation-policy-v2.pdf",
      },
      {
        title: "Malpractice, Maladministration and Assessment Integrity Policy",
        version: "v2.0",
        href: "/docs/policies/3.5-quack-malpractice-maladministration-assessment-integrity-v2.pdf",
      },
      {
        title: "Online and E-Learning Policy",
        version: "v2.0",
        href: "/docs/policies/3.7-quack-online-elearning-policy-v2.pdf",
      },
    ],
  },

  {
    id: "data-privacy",
    title: "Funding, Data, Privacy and Records",
    description: "Policies covering learner data, privacy and information governance.",
    policies: [
      {
        title: "GDPR and Learner Privacy Policy",
        version: "v3.0",
        href: "/docs/policies/4.2-quack-gdpr-learner-privacy-policy-v3.pdf",
      },
    ],
  },

  {
    id: "governance",
    title: "Governance, Risk and Integrity",
    description:
      "Policies supporting transparent governance, financial integrity and protected disclosures.",
    policies: [
      {
        title:
          "Conflict of Interest, Related-Party Relationships and Impartial Decision-Making Policy",
        version: "v2.0",
        href: "/docs/policies/5.3-quack-conflict-interest-related-party-impartiality-policy-v2.pdf",
      },
      {
        title: "Counter Fraud, Bribery, Corruption and Financial Irregularity Policy",
        version: "v2.1",
        href: "/docs/policies/5.4-quack-counter-fraud-bribery-corruption-policy-v2.1.pdf",
      },
      {
        title: "Whistleblowing and Protected Disclosures Policy",
        version: "v2.0",
        href: "/docs/policies/5.5-quack-whistleblowing-protected-disclosures-policy-v2.pdf",
      },
    ],
  },

  {
    id: "health-safety",
    title: "Health, Safety and Continuity",
    policies: [
      {
        title: "Health and Safety Policy",
        version: "v3.0",
        href: "/docs/policies/7.1-quack-health-safety-policy-v3.pdf",
      },
    ],
  },

  {
    id: "responsible-business",
    title: "Procurement, Sustainability and Responsible Business",
    policies: [
      {
        title: "Modern Slavery, Human Trafficking and Labour Exploitation Policy",
        version: "v2.0",
        href: "/docs/policies/8.2-quack-modern-slavery-human-trafficking-policy-v2.pdf",
      },
      {
        title: "Environmental Sustainability and Climate Action Policy",
        version: "v2.0",
        href: "/docs/policies/8.3-quack-environmental-sustainability-climate-action-policy-v2.pdf",
      },
      {
        title: "Carbon Reduction Plan",
        version: "v2.0",
        href: "/docs/policies/8.4-quack-carbon-reduction-plan-v2.pdf",
      },
    ],
  },
];

const docs = [
  {
    name: "GDPR Privacy Policy",
    description: "Our GDPR & Privacy Policy 2023",
    link: "/docs/Quack_Group_Ltd_GDPR_Privacy_Policy_2023.pdf",
    type: "business",
  },
  // Retired 2026
  // {
  //   name: "Equality, Diversity, and Inclusion Policy",
  //   description: "Our commitment to equality, diversity, and inclusion",
  //   link: "/docs/Quack_Group_Ltd-Equality_Diversity_and_Inclusion_Policy_2021.pdf",
  //   type: "business",
  // },
  {
    name: "Equality, Diversity, and Inclusion Policy 2026 v2.0",
    description: "Our commitment to equality, diversity, and inclusion",
    link: "/docs/Quack_EDI_Policy_June_2026.pdf",
    type: "business",
  },
  {
    name: "Carbon Reduction Plan",
    description: "Our carbon reduction plan",
    link: "/docs/Carbon_Reduction_Plan_QR0T.pdf",
    type: "environment",
  },
  {
    name: "Privacy Notice",
    description: "LRS Privacy Notice",
    link: "/docs/LRS_Privacy_Notice.pdf",
    type: "legal",
  },
  // {
  //   name: "Malpractice and Maladministration Policy",
  //   description: "Quack Recruitment & Training Malpractice and Maladministration Policy",
  //   link: "/docs/Quack Recruitment & Training Malpractice and Maladministration Policy.docx",
  //   type: "business",
  // },
  {
    name: "Modern Slavery and Human Trafficking Policy",
    description: "Quack Group Ltd Modern Slavery and Human Trafficking Policy 2021",
    link: "/docs/Quack_Group_Ltd–Modern_Slavery_and_Human_Trafficking_Policy_2021.pdf",
    type: "business",
  },
  {
    name: "Safeguarding, Prevent & Online Safety Policy",
    description: "Quack Recruitment and Training, Safeguarding, Prevent & Online Safety Policy",
    link: "/docs/Quack_Recruitment_and_Training-Safeguarding_Policy_v.4.pdf",
    type: "safety",
  },
  {
    name: "Safeguarding Learner Onboarding",
    description: "Safeguarding learners at Quack Recruitment & Training",
    link: "/docs/Quack_safeguarding_learner_onboarding.pdf",
    type: "safety",
  },
  {
    name: "Prevent Risk Assessment v1.0 2026",
    description: "Quack Prevent Risk Assessment",
    link: "/docs/Quack_Prevent_Risk_Assessment_June_2026.pdf",
    type: "safety",
  },
  {
    name: "Learner Support Policy v2.0 2026",
    description: "Safeguarding learners at Quack Recruitment & Training",
    link: "/docs/Quack_Learner_Support_Policy_June_2026.pdf",
    type: "safety",
  },
  {
    name: "Appeals Procedure",
    description: "Quack Recruitment and Training Appeals Procedure",
    link: "/docs/Quack_Recruitment_and_Training_Appeals_Procedure.pdf",
    type: "training",
  },
  // Retired 2026
  // {
  //   name: "Complaints Policy",
  //   description: "Quack Recruitment and Training Complaints Policy",
  //   link: "/docs/Quack_Recruitment_and_Training_Complaints_Policy.pdf",
  //   type: "training",
  // },
  {
    name: "Complaints Policy v2.0 2026",
    description: "Quack Recruitment and Training Complaints Policy",
    link: "/docs/Quack_Complaints_Policy_and_Procedure_June_2026.pdf",
    type: "training",
  },
  {
    name: "Conflict of Interest Policy",
    description: "Quack Recruitment and Training Conflict of Interest Policy",
    link: "/docs/Quack_Recruitment_and_Training_Conflict_of_Intrest_Policy.pdf",
    type: "business",
  },
  {
    name: "Counter Fraud Policy",
    description: "Quack Recruitment and Training Counter Fraud Policy",
    link: "/docs/Quack_Recruitment_and_Training_Counter_Fraud_Policy.pdf",
    type: "legal",
  },
  // retired 2026
  // {
  //   name: "Health and Safety Policy",
  //   description: "Quack Recruitment and Training Health and Safety Policy",
  //   link: "/docs/Quack_Recruitment_and_Training_Health_and_Safety_Policy.pdf",
  //   type: "safety",
  // },
  {
    name: "Health and Safety Policy v3.0 2026",
    description: "Quack Recruitment and Training Health and Safety Policy",
    link: "/docs/Quack_Health_and_Safety_Policy_v3_June_2026.pdf",
    type: "safety",
  },
  {
    name: "Internal Quality Assurance Policy 2024",
    description: "Quack Recruitment and Training Internal Quality Assurance Policy 2024",
    link: "/docs/Quack_Recruitment_and_Training_Internal_Quality_Assurance_Policy_2024.pdf",
    type: "training",
  },
  {
    name: "Safer Recruitment Policy 2024",
    description: "Quack Recruitment and Training Safer Recruitment Policy 2024",
    link: "/docs/Quack_Recruitment_and_Training_Safer_Recruitment_Policy_2024.pdf",
    type: "business",
  },
  {
    name: "Whistleblowing Policy",
    description: "Quack Group Ltd Whistleblowing Policy",
    link: "/docs/WHISTLEBLOWING_POLICY.pdf",
    type: "legal",
  },
  {
    name: "Kent Education Privacy Notice",
    description: "Kent County Council Education Privacy Notices",
    link: "https://www.kent.gov.uk/about-the-council/information-and-data/access-to-information/gdpr-privacy-notices/education",
    type: "legal",
    dl: false,
  },
];
