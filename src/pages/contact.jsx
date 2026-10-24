
import emailjs from "@emailjs/browser";


import { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus(
      "Your form is valid! Email delivery will work after EmailJS integration."
    );
  }

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-heading text-center">
          <span className="contact-badge">GET IN TOUCH</span>
          <h1>
            Let's work <span>together.</span>
          </h1>
          <p>
            Have a project in mind or need help with your website?
            We'd love to hear from you.
          </p>
        </div>

        <div className="row g-0 contact-card">
          {/* Left information panel */}
          <div className="col-lg-5">
            <div className="contact-info">
              <span className="info-label">CONTACT INFORMATION</span>

              <h2>Let's talk about your next project.</h2>

              <p className="info-description">
                Tell us what you're planning. We'll get back to you
                as soon as possible.
              </p>

              <div className="contact-info-item">
                <div className="contact-icon">@</div>
                <div>
                  <h6>Email Us</h6>
                  <p>Send us your project details</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">↗</div>
                <div>
                  <h6>Our Approach</h6>
                  <p>Simple, creative and reliable solutions</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">✓</div>
                <div>
                  <h6>Let's Collaborate</h6>
                  <p>Have an idea? Let's make it happen.</p>
                </div>
              </div>

              <div className="contact-decoration">
                Let's build something great.
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="col-lg-7">
            <div className="contact-form-wrapper">
              <h3>Send us a message</h3>
              <p className="form-subtitle">
                Fill out the form below and tell us how we can help.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control contact-input"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control contact-input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="form-control contact-input"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control contact-input"
                    rows="5"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send Message <span>→</span>
                </button>

                {status && (
                  <p className="contact-status mt-3" role="status">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
