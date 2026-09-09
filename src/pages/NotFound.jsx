import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function NotFound() {
  return (
    <Container className="flex flex-1 flex-col justify-center py-section">
      <div className="max-w-4xl">
        <p className="eyebrow">
          <span className="text-ochre-deep">404</span>
          <span className="mx-2.5 text-hairline-strong">/</span>
          <span>Not found</span>
        </p>

        <h1 className="mt-6 text-display">Off the map</h1>

        <div className="mt-8 h-px w-16 bg-ochre" aria-hidden="true" />

        <p className="mt-8 max-w-md text-sm leading-relaxed text-ash">
          That route does not exist.
        </p>

        <Button to="/" variant="outline" className="mt-10">
          Back to home
        </Button>
      </div>
    </Container>
  );
}

export default NotFound;
