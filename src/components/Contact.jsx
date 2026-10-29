
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style/style.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content" data-aos="fade-right">
          <span className="contact-label">
            LET'S CONNECT
          </span>

          <h1 className="h1">
            Let's Talk About
            <br />
            <span>Your Future.</span>
          </h1>

          <p>
            Have questions about our commerce and accounting
            courses? Send us a message and let us know how
            we can help you get started.
          </p>

          <div className="contact-hero-note">
            <span className="note-icon">✦</span>
            <div>
              <strong>Your learning journey starts here.</strong>
              <small>Ask us about courses, duration and learning options.</small>
            </div>
          </div>
        </div>

      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-main">
        <div className="contact-info" data-aos="fade-up">
          <span className="contact-label">CONTACT DETAILS</span>

          <h2 className="h2">
            We're Here to
            <br />
            <span>Help You.</span>
          </h2>

          <p className="contact-info-description">
            Need help choosing the right course? Contact us
            with your questions.
          </p>

          <div className="contact-info-card">
            <div className="contact-info-icon">✉</div>
            <div>
              <small>EMAIL US</small>
              <h3>Course Enquiries</h3>
              <p>Enter your institute's email address here.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">☎</div>
            <div>
              <small>CALL US</small>
              <h3>Student Support</h3>
              <p>Add your official contact number here.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">◷</div>
            <div>
              <small>LEARNING SUPPORT</small>
              <h3>Course Guidance</h3>
              <p>Ask about course content and duration.</p>
            </div>
          </div>

          <div className="contact-social-note">
            <p>
              Have a goal in mind? Let's find the right course
              for you.
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-wrapper" data-aos="fade-left">
          {!submitted ? (
            <>
              <div className="contact-form-heading">
                <span className="contact-label">SEND AN ENQUIRY</span>
                <h2>Get in Touch</h2>
                <p>
                  Fill in the details below and tell us what
                  you want to learn.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-input-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-input-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9+() -]{7,20}"
                      title="Enter a valid phone number"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-course">Interested Course</label>
                    <select
                      id="contact-course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a course</option>
                      <option value="B.Com">B.Com</option>
                      <option value="M.Com">M.Com</option>
                      <option value="Tally Prime">Tally Prime</option>
                      <option value="GST & Taxation">GST & Taxation</option>
                      <option value="Auditing">Auditing</option>
                      <option value="Balance Sheet">Balance Sheet</option>
                    </select>
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell us what you would like to know..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="contact-submit-btn" type="submit">
                  Send Enquiry <span>↗</span>
                </button>

                <p className="contact-form-footnote">
                  ✦ Please provide accurate details so the institute
                  can respond to your enquiry.
                </p>
              </form>
            </>
          ) : (
            <div className="contact-success" data-aos="zoom-in">
              <div className="success-icon">✓</div>
              <span className="contact-label">FORM COMPLETED</span>
              <h2>Thank You, {formData.name}!</h2>
              <p>
                Your enquiry has been prepared for{" "}
                <strong>{formData.course}</strong>.
                This demo form does not send data to a server yet.
              </p>

              <button
                className="contact-submit-btn"
                onClick={handleReset}
                type="button"
              >
                Submit Another Enquiry <span>↗</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="contact-bottom-banner" data-aos="fade-up">
        <div>
          <span className="contact-label">YOUR NEXT STEP</span>
          <h2>
            Learn Today.
            <span> Grow Tomorrow.</span>
          </h2>
          <p>
            Explore commerce courses and build your knowledge
            one lesson at a time.
          </p>
        </div>

        <a href="/#courses" className="contact-bottom-btn">
          Explore Courses <span>↗</span>
        </a>
      </section>
    </main>
  );
}
