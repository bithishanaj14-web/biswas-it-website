
import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card service-card h-100 border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="service-icon mb-3">
            {service.icon}
          </div>

          <h3 className="card-title h5 fw-bold">
            {service.title}
          </h3>

          <p className="card-text text-secondary">
            {service.description}
          </p>

          <Link
            to={`/services/${service.id}`}
            className="btn btn-outline-primary rounded-pill"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;