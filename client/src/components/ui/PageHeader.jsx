import Container from "./Container";

/**
 * TEMPORARY page scaffold.
 *
 * Every route currently renders one of these: an index number, the page title
 * and a hairline. Real content replaces this per page in the next step.
 */
function PageHeader({ index, title, children }) {
  return (
    <Container className="flex flex-1 flex-col justify-center py-section">
      <div className="max-w-4xl">
        <p className="eyebrow">
          <span className="text-ochre-deep">{index}</span>
          <span className="mx-2.5 text-hairline-strong">/</span>
          <span>{title}</span>
        </p>

        <h1 className="mt-6 text-display">{title}</h1>

        <div className="mt-8 h-px w-16 bg-ochre" aria-hidden="true" />

        <p className="mt-8 max-w-md text-sm leading-relaxed text-ash">
          {children ?? "Content for this section is not built yet."}
        </p>
      </div>
    </Container>
  );
}

export default PageHeader;
