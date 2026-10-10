import Link from "next/link";

const variants = {
  solid: `
    bg-quackred-800
    text-white
    shadow-md
    hover:bg-quackred-600
  `,
  outline: `
    border-2 border-quackred-800
    bg-white
    text-quackred-800
    hover:bg-quackred-50
  `,
};

const PageLink = ({ label, href, arrow = false, variant = "solid", className = "" }) => {
  return (
    <Link
      prefetch={false}
      href={href}
      className={`
        group inline-flex items-center justify-center gap-2
        rounded-lg px-6 py-3
        text-base font-semibold
        transition
        focus:outline-none
        focus:ring-2 focus:ring-quackred-500
        focus:ring-offset-2
        ${variants[variant]}
        ${className}
      `}
    >
      <span>{label}</span>

      {arrow && (
        <span
          className={`
            material-symbols-outlined
            text-xl
            transition-transform
            duration-200
            group-hover:translate-x-1
            ${variant === "outline" ? "text-quackred-800" : "text-white"}
          `}
          aria-hidden="true"
        >
          arrow_forward
        </span>
      )}
    </Link>
  );
};

export default PageLink;
