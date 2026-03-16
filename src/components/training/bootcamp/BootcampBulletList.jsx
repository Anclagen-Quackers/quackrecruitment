const BootcampBulletList = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <ul className="ms-6 space-y-2 list-disc">
      {items.map((item, index) => (
        <li key={index} className="text-lg leading-7 text-gray-900">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BootcampBulletList;
