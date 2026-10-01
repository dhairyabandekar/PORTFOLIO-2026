/**
 * Film grain overlay.
 *
 * Purely decorative texture.
 */
function FilmGrain({ className = "", opacity = 0.03 }) {
  return (
    <span
      aria-hidden="true"
      className={`film-grain absolute inset-0 max-w-full overflow-hidden pointer-events-none ${className}`}
      style={{ opacity }}
    />
  );
}

export default FilmGrain;