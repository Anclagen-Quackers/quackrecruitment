"use client";
import PolicyCard from "@/components/Card/PolicyCard";
import { useState } from "react";

const AllPolicies = () => {
  const [activeTab, setActiveTab] = useState("all");
  const active =
    "py-2 px-4 block bg-quackred-800 hover:bg-quackred-600 focus:ring-quackred-400 focus:ring-offset-quackred-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg";
  const inactive =
    "py-2 px-4 block bg-gray-300 hover:bg-gray-200 focus:ring-gray-400 focus:ring-offset-gray-200 text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg";
  return (
    <>
      <h2>Our Policies</h2>
      <p>
        At Quack Group Ltd, we take privacy and data protection seriously. We are committed to ensuring the protection and proper use of your data. Below are our policies. Click on each to learn more.
      </p>
      <div className="flex justify-center">
        <ul className="flex space-x-4 mt-4">
          <button className={activeTab === "all" ? active : inactive} onClick={() => setActiveTab("all")}>
            All
          </button>
          <button className={activeTab === "business" ? active : inactive} onClick={() => setActiveTab("business")}>
            Business
          </button>
          <button className={activeTab === "environment" ? active : inactive} onClick={() => setActiveTab("environment")}>
            Environment
          </button>
          <button className={activeTab === "legal" ? active : inactive} onClick={() => setActiveTab("legal")}>
            Legal
          </button>
          <button className={activeTab === "safety" ? active : inactive} onClick={() => setActiveTab("safety")}>
            Safety
          </button>
          <button className={activeTab === "training" ? active : inactive} onClick={() => setActiveTab("training")}>
            Training
          </button>
        </ul>
      </div>
      <div className="flex flex-wrap justify-center">
        {docs.map((doc, index) => (activeTab === "all" || activeTab === doc.type ? <PolicyCard key={index} name={doc.name} description={doc.description} link={doc.link} /> : null))}
      </div>
    </>
  );
};

export default AllPolicies;

const docs = [
  { name: "GDPR Privacy Policy", description: "Our GDPR & Privacy Policy 2023", link: "./docs/Quack_Group_Ltd_GDPR_Privacy_Policy_2023.pdf", type: "business" },
  {
    name: "Equality, Diversity, and Inclusion Policy",
    description: "Our commitment to equality, diversity, and inclusion",
    link: "/docs/Quack_Group_Ltd-Equality_Diversity_and_Inclusion_Policy_2021.pdf",
    type: "business",
  },
  { name: "Carbon Reduction Plan", description: "Our carbon reduction plan", link: "./docs/Carbon_Reduction_Plan_QR0T.pdf", type: "environment" },
  { name: "Privacy Notice", description: "LRS Privacy Notice", link: "/docs/LRS_Privacy_Notice.pdf", type: "legal" },
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
    name: "Safeguarding, Prevention and Anti-Bullying Policy",
    description: "Quack Recruitment and Training Safeguarding, Prevention and Anti-Bullying Policy",
    link: "/docs/Quack_Recruitment_and_Training-Safeguarding_Prevention_and_Anti-Bullying_Policy.pdf",
    type: "safety",
  },
  { name: "Appeals Procedure", description: "Quack Recruitment and Training Appeals Procedure", link: "./docs/Quack_Recruitment_and_Training_Appeals_Procedure.pdf", type: "training" },
  { name: "Complaints Policy", description: "Quack Recruitment and Training Complaints Policy", link: "./docs/Quack_Recruitment_and_Training_Complaints_Policy.pdf", type: "training" },
  {
    name: "Conflict of Interest Policy",
    description: "Quack Recruitment and Training Conflict of Interest Policy",
    link: "/docs/Quack_Recruitment_and_Training_Conflict_of_Intrest_Policy.pdf",
    type: "business",
  },
  { name: "Counter Fraud Policy", description: "Quack Recruitment and Training Counter Fraud Policy", link: "/docs/Quack_Recruitment_and_Training_Counter_Fraud_Policy.pdf", type: "legal" },
  {
    name: "Health and Safety Policy",
    description: "Quack Recruitment and Training Health and Safety Policy",
    link: "/docs/Quack_Recruitment_and_Training_Health_and_Safety_Policy.pdf",
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
  { name: "Whistleblowing Policy", description: "Quack Group Ltd Whistleblowing Policy", link: "/docs/WHISTLEBLOWING_POLICY.pdf", type: "legal" },
];
