const BootcampFeatureList = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index}>
          <h4 className="text-2xl font-bold">{item.title}</h4>
          {item.description && (
            <p className="mt-3 text-lg leading-7 text-gray-900">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default BootcampFeatureList;
