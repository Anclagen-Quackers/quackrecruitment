import PageLink from "@/components/PageLink";

const HighlightCTA = ({ eyebrow, title, children, href, linkLabel, className = "" }) => {
  return (
    <article
      className={`
        mx-1
        md:mx-6
        rounded-md
        border border-zinc-200
        border-l-4 border-l-quackred-700
        bg-white
        px-6 py-5
        ${className}
      `}
    >
      <div className="max-w-4xl">
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-quackred-800">
            {eyebrow}
          </p>
        )}

        <h2 className="text-2xl font-bold leading-tight text-zinc-950 md:text-3xl">{title}</h2>

        <div className="mt-2 space-y-2 text-base leading-relaxed text-zinc-700">{children}</div>

        {href && linkLabel && (
          <div className="mt-4">
            <PageLink href={href} label={linkLabel} arrow variant="outline" />
          </div>
        )}
      </div>
    </article>
  );
};

export default HighlightCTA;
