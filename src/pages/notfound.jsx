
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="container py-5 text-center">
      <h1 className="display-4 fw-bold">404</h1>
      <h2>Page Not Found</h2>
      <p className="text-secondary">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" className="btn btn-primary rounded-pill">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
