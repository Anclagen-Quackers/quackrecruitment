const BootcampApplyCard = ({ apply }) => {
  if (!apply?.href) return null;

  return (
    <section className="bg-quackred-800 text-white rounded-xl p-6 shadow-xl">
      <h3 className="text-3xl font-bold mb-4">{apply.heading || "Apply Now"}</h3>

      {apply.text && <p className="text-lg mb-6">{apply.text}</p>}

      <a
        href={apply.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex py-4 px-6 text-base font-semibold rounded-lg bg-white text-quackred-800 hover:opacity-90 transition"
      >
        Apply for the Bootcamp
      </a>
    </section>
  );
};

export default BootcampApplyCard;
