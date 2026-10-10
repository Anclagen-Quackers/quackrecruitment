import Link from "next/link";

export default function ProgrammeCard({ title, description, href, image, imageAlt = "" }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="
        group relative min-h-[260px] overflow-hidden rounded-xl
        border border-zinc-200 bg-white
        transition
        hover:border-quackred-300 hover:shadow-md
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-quackred-700
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={imageAlt}
        className="
          absolute inset-y-0 right-0
          h-full w-[58%]
          object-cover object-center
          transition-transform duration-300
          group-hover:scale-[1.02]
        "
      />

      {/* Fade image into card */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,white_0%,white_43%,rgba(255,255,255,0.98)_52%,rgba(255,255,255,0.75)_64%,rgba(255,255,255,0)_82%)]
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-[62%] p-6">
        <h3 className="text-xl font-bold text-zinc-950">{title}</h3>

        <p className="mt-3 text-base leading-7 text-zinc-600">{description}</p>

        <div className="mt-5 inline-flex items-center gap-2 font-semibold text-quackred-700">
          Find out more
          <span
            className="
              material-symbols-outlined text-xl
              transition-transform
              group-hover:translate-x-1
            "
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}
