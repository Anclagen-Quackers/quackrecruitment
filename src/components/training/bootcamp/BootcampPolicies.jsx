function BootcampPolicies({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((policy) => (
        <a
          key={policy.link}
          href={policy.link}
          download
          className="block rounded-lg border border-quackred-100 bg-white p-5 transition hover:border-quackred-300 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900">{policy.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{policy.description}</p>
            </div>

            <span className="shrink-0 rounded-md bg-quackred-100 px-3 py-1 text-sm font-medium text-quackred-700">
              PDF
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default BootcampPolicies;
