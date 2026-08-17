"use client";
import Section from "@/components/Sections/Section";
import { useRef } from "react";

const TrainingSignUpFallback = () => {
  const contentRef = useRef(null);

  const handleSelectAll = () => {
    if (contentRef.current) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(contentRef.current);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const handleCopyText = async () => {
    const textToCopy = `
    Candidate Registration

    Attachments
    Please attach the following documents before sending your registration details:
     - Proof of address*
     - ID* (some examples passport, full birth certificate, and BRP cards)
     - National insurance Number* (NI Card, P45, P60, HMRC Letter, Payslip with NI Number on)
     - Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required.)
     - CV (optional)
    
    Personal Details
    Title*: 
    First Name*: 
    Middle Name:
    Last Name*: 
    Date of Birth* (yyyy-mm-dd): 
    Gender*: 
    Ethnicity*:
    Email*: 
    Mobile Number*: 
    Landline Number: 
    
    Address Details
    address*:
    if you have lived at your current address for less than 5 years please provide previous address details below
    
    Job Preference & Work Eligibility
    Desired Salary/Hourly Rate (£)*:
    Are you appling for a specific role?* (if yes provide details)
    What means of transport do you have?*
    Do You Have Any Disabilities?* (if yes provide details)
    National Insurance Number*:
    Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required):
    
    Bank Details
    Account Holder: 
    Account Number: 
    Sort Code: 
    Bank Branch: 
    
    Emergency Contact
    Name:
    Phone Number:
      `;

    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy text. Please select the content manually and copy.", err);
    }
  };

  return (
    <>
      <main className="flex flex-col">
        <Section bgColor="bg-zinc-200">
          <div className="max-w-screen-md mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-center text-black mb-10">Candidate Registration Email Template</h1>
            </div>
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Please copy the contents below to an email, fill it out and send it to us at{" "}
                  <a href="mailto:applications@quackrecruitment.co.uk" className="underline">
                    applications@quackrecruitment.co.uk
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h2 className="text-lg font-medium mb-2">Copyable Email Content:</h2>
              <div className="mt-2 space-x-4">
                {/* Copy Button */}
                <button onClick={handleCopyText} className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-150">
                  Copy to Clipboard
                </button>

                {/* Select All Button */}
                <button onClick={handleSelectAll} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150">
                  Select All Content
                </button>
              </div>
              <pre ref={contentRef} className="w-full p-2 border rounded whitespace-pre-wrap break-words">
                {`
Candidate Registration

Attachments
Please attach the following documents before sending your registration details:
 - Proof of address*
 - ID* (some examples passport, full birth certificate, and BRP cards)
 - National insurance Number* (NI Card, P45, P60, HMRC Letter, Payslip with NI Number on)
 - Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required.)
 - CV (optional)

Personal Details
Title*: 
First Name*: 
Middle Name:
Last Name*: 
Date of Birth* (yyyy-mm-dd): 
Gender*: 
Ethnicity*:
Email*: 
Mobile Number*: 
Landline Number: 

Address Details
address*:
if you have lived at your current address for less than 5 years please provide previous address details below

Job Preference & Work Eligibility
Desired Salary/Hourly Rate (£)*:
Are you appling for a specific role?* (if yes provide details)
What means of transport do you have?*
Do You Have Any Disabilities?* (if yes provide details)
National Insurance Number*:
Sharecode (If you have a foreign passport, BRP, visa. A sharecode is required):

Bank Details
Account Holder: 
Account Number: 
Sort Code: 
Bank Branch: 

Emergency Contact
Name:
Phone Number:
                `}
              </pre>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default TrainingSignUpFallback;
