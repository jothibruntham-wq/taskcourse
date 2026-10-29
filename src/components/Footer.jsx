
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style/style.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <footer className="course-footer">
      <div className="footer-main" data-aos="fade-up">
        {/* BRAND */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <span className="footer-logo-icon">∑</span>
            <span>
              Commerce<span className="logo-highlight">Academy.</span>
            </span>
          </a>

          <p>
            Learn commerce, accounting and taxation with confidence.
            Build practical knowledge and take the next step toward
            your career goals.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className="social-dot" cx="18" cy="6" r="1" />
              </svg>
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4C17.2 1.2 16.1 1 15 1c-3.4 0-5 2-5 5.5V9H7v4h3v8z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 9h4v12H3zM10 9h4v2c.6-1.2 2-2.3 4-2.3 3.4 0 4 2.2 4 5.2V21h-4v-6.3c0-1.5 0-3-2-3s-2 1.6-2 3V21h-4z" />
              </svg>
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 7s-.2-2-1-2.9S20 3 19 3C16.7 2.8 12 2.8 12 2.8S7.3 2.8 5 3c-1 .1-2.2.1-3 1.1S1 7 1 7s-.2 2.3-.2 4.5v1c0 2.2.2 4.5.2 4.5s.2 2 1 2.9S4 21 5 21c2.3.2 7 .2 7 .2s4.7 0 7-.2c1-.1 2.2-.1 3-1.1s1-2.9 1-2.9.2-2.3.2-4.5v-1C23.2 9.3 23 7 23 7z" />
                <path className="youtube-play" d="m10 8 6 4-6 4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/#courses">Our Courses</a>
          <a href="/#benefits">Why Choose Us</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* COURSES */}
        <div className="footer-column">
          <h3>Popular Courses</h3>
          <a href="/#courses">B.Com</a>
          <a href="/#courses">M.Com</a>
          <a href="/#courses">Tally Prime</a>
          <a href="/#courses">GST & Taxation</a>
          <a href="/#courses">Auditing</a>
          <a href="/#courses">Balance Sheet</a>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>

          <div className="footer-contact-item">
            <span>✉</span>
            <p>Enter your official email address</p>
          </div>

          <div className="footer-contact-item">
            <span>☎</span>
            <p>Add your contact number</p>
          </div>

          <div className="footer-contact-item">
            <span>◷</span>
            <p>Course enquiry and student support</p>
          </div>

          <a className="footer-contact-btn" href="/contact">
            Contact Us <span>↗</span>
          </a>
        </div>
      </div>

      {/* NEWSLETTER-STYLE BANNER */}
      <div className="footer-learning-banner" data-aos="fade-up">
        <div className="footer-banner-icon">✦</div>

        <div>
          <h3>Keep Learning. Keep Growing.</h3>
          <p>
            Your next opportunity can begin with a single lesson.
          </p>
        </div>

        <a href="/#courses">
          Explore Courses <span>↗</span>
        </a>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CommerceAcademy. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <span>•</span>
          <a href="/terms">Terms & Conditions</a>
        </div>

        <a className="back-to-top" href="#" aria-label="Back to top">
          ↑
        </a>
      </div>
    </footer>
  );
}
