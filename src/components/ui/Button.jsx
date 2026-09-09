import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] " +
  "transition-colors duration-300 ease-editorial " +
  "disabled:pointer-events-none disabled:opacity-40";

const variants = {
  /** Solid ochre. Reserved for the single most important action on a view. */
  solid: "bg-ochre text-ink hover:bg-bone",
  /** Default. Hairline box that warms to ochre. */
  outline:
    "border border-hairline-strong text-bone hover:border-ochre hover:text-ochre",
  /** Text-only, for tertiary actions. */
  ghost: "text-ash hover:text-ochre",
};

const sizes = {
  sm: "h-8 px-3",
  md: "h-10 px-4",
  lg: "h-12 px-6",
};

/**
 * One button style for the whole site.
 *
 * Renders as a <Link> when given `to`, an <a> when given `href`, otherwise a
 * <button>. Square by design — the palette does the talking, not border radius.
 */
function Button({
  as,
  to,
  href,
  variant = "outline",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const Tag = as ?? "button";
  return (
    <Tag className={classes} type={Tag === "button" ? "button" : undefined} {...rest}>
      {children}
    </Tag>
  );
}

export default Button;
