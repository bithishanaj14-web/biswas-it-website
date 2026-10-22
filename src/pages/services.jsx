
import services from "../data/services.js";
import ServiceCard from "../components/servicecard.jsx";

function Services() {
  return (
    <main>
      <section className="services-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <p className="text-primary fw-bold">
              WHAT WE DO
            </p>

            <h1 className="display-5 fw-bold">
              Our Services
            </h1>

            <p className="text-secondary mx-auto services-intro">
              We provide digital solutions to help your
              business grow and succeed online.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Services;
