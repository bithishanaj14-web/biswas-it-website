
import { Link, useParams } from "react-router-dom";
import services from "../data/services.js";

function ServiceDetail() {
  const { id } = useParams();

  const service = services.find(
    (item) => String(item.id) === String(id)
  );

  if (!service) {
    return (
      <section className="container py-5">
        <h1>Service Not Found</h1>
        <Link to="/services">Back to Services</Link>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <div className="service-icon mb-3">{service.icon}</div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <Link to="/services" className="btn btn-primary">
        Back to Services
      </Link>
    </section>
  );
}

export default ServiceDetail;
