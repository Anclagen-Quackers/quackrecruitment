const BootcampOverviewCard = ({ overview, authority }) => {
  if (!overview) return null;

  return (
    <aside className="bg-quackred-50 p-5 xl:p-8 rounded-xl h-fit shadow-xl">
      <h3 className="text-3xl font-bold text-center mb-6">Course Information</h3>

      {authority?.logo && (
        <img
          src={authority.logo}
          alt={authority.logoAlt || authority.name}
          className="w-full h-auto bg-white p-3 rounded-lg max-w-[240px] mx-auto mb-6"
        />
      )}

      {overview.course && (
        <p className="mb-3 text-lg">
          <b>Course:</b> {overview.course}
        </p>
      )}

      {overview.sector && (
        <p className="mb-3 text-lg">
          <b>Sector:</b> {overview.sector}
        </p>
      )}

      {overview.duration && (
        <p className="mb-3 text-lg">
          <b>Duration:</b> {overview.duration}
        </p>
      )}

      {overview.guidedLearningHours && (
        <p className="mb-3 text-lg">
          <b>Guided Learning Hours:</b> {overview.guidedLearningHours}
        </p>
      )}

      {overview.schedule && (
        <p className="mb-3 text-lg">
          <b>Schedule:</b> {overview.schedule}
        </p>
      )}

      {overview.deliveryModes?.length > 0 && (
        <div className="mb-3 text-lg">
          <b>Training can be delivered:</b>
          <ul className="mt-2 ms-6 list-disc">
            {overview.deliveryModes.map((mode, index) => (
              <li key={index}>{mode}</li>
            ))}
          </ul>
        </div>
      )}

      {overview.deliveryNote && <p className="text-lg mt-4">{overview.deliveryNote}</p>}
    </aside>
  );
};

export default BootcampOverviewCard;
