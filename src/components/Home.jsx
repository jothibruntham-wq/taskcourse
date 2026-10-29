
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style/style.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);



  return (
      <main className="commerce-home">
          {/* HERO SECTION */}

          <h1 className="h1">YOUR FUTURE STARTS HERE</h1>

          <h4 className="h4">Unlock Your Potential with  Learning</h4>
          <h5 className="h5">Learn in-demand skills, build real-world projects, and take the next step toward your dream career — anytime, anywhere.</h5>

          {/* COURSE SECTION */}
          <section className="courses-section" id="courses">
              <div className="section-heading" data-aos="fade-up">
                  <span className="section-label">OUR PROGRAMS</span>

                  <h2>
                      Find Your <span>Learning Path</span>
                  </h2>

                  <p>
                      Choose a course that matches your goals and start
                      building useful skills for your future.
                  </p>
              </div><div className="course-grid">
                      <article
                          className="course-card course-blue"
                          data-aos="fade-up"
                      >
                          <div className="course-top">
                              <span className="course-number">01 / COURSE</span>
                              <span className="course-icon">🎓</span>
                          </div>

                          <span className="course-category">DEGREE PROGRAM</span>
                          <h3>B.Com</h3>

                          <p>
                              Build your foundation in commerce, business law,
                              economics and financial accounting.
                          </p>

                          <div className="course-bottom">
                              <span>◷ &nbsp; 3 Years</span>
                              <a href="#benefits" aria-label="Learn about B.Com">↗</a>
                          </div>
                      </article>

                      <article
                          className="course-card course-purple"
                          data-aos="fade-up"
                          data-aos-delay="100"
                      >
                          <div className="course-top">
                              <span className="course-number">02 / COURSE</span>
                              <span className="course-icon">📚</span>
                          </div>

                          <span className="course-category">POSTGRADUATE</span>
                          <h3>M.Com</h3>

                          <p>
                              Explore advanced finance, business management,
                              taxation and accounting principles.
                          </p>

                          <div className="course-bottom">
                              <span>◷ &nbsp; 2 Years</span>
                              <a href="#benefits" aria-label="Learn about M.Com">↗</a>
                          </div>
                      </article>

                      <article
                          className="course-card course-orange"
                          data-aos="fade-up"
                          data-aos-delay="200"
                      >
                          <div className="course-top">
                              <span className="course-number">03 / COURSE</span>
                              <span className="course-icon">💻</span>
                          </div>

                          <span className="course-category">PRACTICAL TRAINING</span>
                          <h3>Tally Prime</h3>

                          <p>
                              Learn ledger creation, voucher entries, inventory,
                              GST and financial reporting.
                          </p>

                          <div className="course-bottom">
                              <span>◷ &nbsp; 3 Months</span>
                              <a href="#benefits" aria-label="Learn about Tally Prime">↗</a>
                          </div>
                      </article>

                      <article
                          className="course-card course-green"
                          data-aos="fade-up"
                      >
                          <div className="course-top">
                              <span className="course-number">04 / COURSE</span>
                              <span className="course-icon">🧾</span>
                          </div>

                          <span className="course-category">TAX MANAGEMENT</span>
                          <h3>GST & Taxation</h3>

                          <p>
                              Understand tax invoices, GST concepts, return filing
                              and taxation fundamentals.
                          </p>

                          <div className="course-bottom">
                              <span>◷ &nbsp; 2 Months</span>
                              <a href="#benefits" aria-label="Learn about GST and Taxation">↗</a>
                          </div>
                      </article>

                      <article
                          className="course-card course-pink"
                          data-aos="fade-up"
                          data-aos-delay="100"
                      >
                          <div className="course-top">
                              <span className="course-number">05 / COURSE</span>
                              <span className="course-icon">🔍</span>
                          </div>

                          <span className="course-category">FINANCIAL CONTROL</span>
                          <h3>Auditing</h3>

                          <p>
                              Discover audit procedures, internal controls,
                              verification and audit reports.
                          </p>

                          <div className="course-bottom">
                              <span>◷ &nbsp; 2 Months</span>
                              <a href="#benefits" aria-label="Learn about Auditing">↗</a>
                          </div>
                      </article>

                      <article
                          className="course-card course-teal"
                          data-aos="fade-up"
                          data-aos-delay="200"
                      >
                          <div className="course-top">
                              <span className="course-number">06 / COURSE</span>
                              <span className="course-icon">📈</span>
                          </div>

                          <span className="course-category">FINANCIAL REPORTING</span>
                          <h3>Balance Sheet</h3>

                          <p>
                              Understand assets, liabilities, capital, profit and
                              loss, and financial statements.
                          </p>

                          <div className="course-bottom">
                              <span>◷ &nbsp; 1 Month</span>
                              <a href="#benefits" aria-label="Learn about Balance Sheet">↗</a>
                          </div>
                      </article>
                  </div>
          </section>

          {/* BENEFITS SECTION */}
          <section className="benefits-section" id="benefits">
              <div className="benefits-heading" data-aos="fade-right">
                  <span className="section-label">WHY LEARN WITH US?</span>

                  <h2>
                      Knowledge That
                      <br />
                      <span>Moves You Forward.</span>
                  </h2>

                  <p>
                      Learn important concepts, practise what you learn
                      and develop skills you can use in your career.
                  </p>
              </div>

              <div className="benefit-list">
                  <div className="benefit-item" data-aos="fade-left">
                      <div className="benefit-icon">✦</div>
                      <div>
                          <h3>Learn at Your Pace</h3>
                          <p>Study concepts according to your schedule.</p>
                      </div>
                      <span className="benefit-arrow">↗</span>
                  </div>

                  <div
                      className="benefit-item"
                      data-aos="fade-left"
                      data-aos-delay="100"
                  >
                      <div className="benefit-icon">▤</div>
                      <div>
                          <h3>Practical Knowledge</h3>
                          <p>Explore accounting concepts and real-world examples.</p>
                      </div>
                      <span className="benefit-arrow">↗</span>
                  </div>

                  <div
                      className="benefit-item"
                      data-aos="fade-left"
                      data-aos-delay="200"
                  >
                      <div className="benefit-icon">↗</div>
                      <div>
                          <h3>Career Development</h3>
                          <p>Strengthen your skills for future opportunities.</p>
                      </div>
                      <span className="benefit-arrow">↗</span>
                  </div>
              </div>
          </section>

          {/* FINAL CALL TO ACTION */}
          <section className="final-cta" data-aos="zoom-in">
              <div className="cta-decoration">✳</div>

              <div>
                  <span className="section-label">YOUR NEXT CHAPTER</span>

                  <h2>
                      Small Steps.
                      <br />
                      <span>Big Opportunities.</span>
                  </h2>

                  <p>
                      Start learning today and take the next step toward
                      your commerce career.
                  </p>
              </div>

              <a href="#courses" className="primary-btn cta-button">
                  View All Courses <span>↗</span>
              </a>
          </section>

      <section className="course-reviews">
              <div className="reviews-heading" data-aos="fade-up">
                  <span className="reviews-label">STUDENT FEEDBACK</span>

                  <h2 className="h2">
                      What Students Say About
                      <span> Our Courses</span>
                  </h2>

                  <p>
                      Honest feedback from learners about their commerce
                      and accounting learning experiences.
                  </p>

                  <div className="reviews-rating">
                      <strong>4.9</strong>
                      <div>
                          <div className="stars">★★★★★</div>
                          <small>Student course reviews</small>
                      </div>
                  </div>
              </div>

              <div className="reviews-grid">
                  <article className="review-card" data-aos="fade-up">
                      <div className="review-top">
                          <div className="review-avatar avatar-purple">A</div>
                          <div>
                              <h3>Arun Kumar</h3>
                              <p>B.Com Student</p>
                          </div>
                          <span className="review-quote">“</span>
                      </div>

                      <div className="review-stars">★★★★★</div>

                      <p className="review-text">
                          The B.Com course helped me understand accounting,
                          business concepts and economics more clearly.
                          The lessons are easy to follow.
                      </p>

                      <div className="review-course">
                          <span>📘</span>
                          <div>
                              <small>COURSE REVIEW</small>
                              <strong>B.Com</strong>
                          </div>
                      </div>
                  </article>

                  <article
                      className="review-card review-featured"
                      data-aos="fade-up"
                      data-aos-delay="100"
                  >
                      <div className="review-top">
                          <div className="review-avatar avatar-orange">P</div>
                          <div>
                              <h3>Priya S</h3>
                              <p>Tally Prime Learner</p>
                          </div>
                          <span className="review-quote">“</span>
                      </div>

                      <div className="review-stars">★★★★★</div>

                      <p className="review-text">
                          Tally Prime training gave me a better understanding
                          of ledger entries, vouchers and GST. Practical
                          examples make the concepts easier to learn.
                      </p>

                      <div className="review-course">
                          <span>💻</span>
                          <div>
                              <small>COURSE REVIEW</small>
                              <strong>Tally Prime</strong>
                          </div>
                      </div>
                  </article>

                  <article
                      className="review-card"
                      data-aos="fade-up"
                      data-aos-delay="200"
                  >
                      <div className="review-top">
                          <div className="review-avatar avatar-green">K</div>
                          <div>
                              <h3>Karthik R</h3>
                              <p>Taxation Learner</p>
                          </div>
                          <span className="review-quote">“</span>
                      </div>

                      <div className="review-stars">★★★★★</div>

                      <p className="review-text">
                          GST and Taxation lessons helped me understand
                          tax invoices, GST basics and return filing.
                          The course topics are clearly organised.
                      </p>

                      <div className="review-course">
                          <span>🧾</span>
                          <div>
                              <small>COURSE REVIEW</small>
                              <strong>GST & Taxation</strong>
                          </div>
                      </div>
                  </article>

                  <article
                      className="review-card"
                      data-aos="fade-up"
                      data-aos-delay="100"
                  >
                      <div className="review-top">
                          <div className="review-avatar avatar-pink">M</div>
                          <div>
                              <h3>Meena R</h3>
                              <p>M.Com Student</p>
                          </div>
                          <span className="review-quote">“</span>
                      </div>

                      <div className="review-stars">★★★★★</div>

                      <p className="review-text">
                          The M.Com subjects help me revise advanced
                          accounting, finance and business management
                          concepts in a structured way.
                      </p>

                      <div className="review-course">
                          <span>📚</span>
                          <div>
                              <small>COURSE REVIEW</small>
                              <strong>M.Com</strong>
                          </div>
                      </div>
                  </article>

                  <article
                      className="review-card"
                      data-aos="fade-up"
                      data-aos-delay="200"
                  >
                      <div className="review-top">
                          <div className="review-avatar avatar-blue">S</div>
                          <div>
                              <h3>Santhosh M</h3>
                              <p>Auditing Learner</p>
                          </div>
                          <span className="review-quote">“</span>
                      </div>

                      <div className="review-stars">★★★★★</div>

                      <p className="review-text">
                          I gained a better understanding of audit
                          procedures, internal controls and financial
                          verification through these lessons.
                      </p>

                      <div className="review-course">
                          <span>🔍</span>
                          <div>
                              <small>COURSE REVIEW</small>
                              <strong>Auditing</strong>
                          </div>
                      </div>
                  </article>

                  <article
                      className="review-card"
                      data-aos="fade-up"
                      data-aos-delay="300"
                  >
                      <div className="review-top">
                          <div className="review-avatar avatar-teal">D</div>
                          <div>
                              <h3>Divya P</h3>
                              <p>Accounting Learner</p>
                          </div>
                          <span className="review-quote">“</span>
                      </div>

                      <div className="review-stars">★★★★★</div>

                      <p className="review-text">
                          The Balance Sheet lessons made assets,
                          liabilities, capital and financial statements
                          easier for me to understand.
                      </p>

                      <div className="review-course">
                          <span>📈</span>
                          <div>
                              <small>COURSE REVIEW</small>
                              <strong>Balance Sheet</strong>
                          </div>
                      </div>
                  </article>
              </div>

              <div className="reviews-bottom" data-aos="fade-up">
                  <span className="bottom-icon">✦</span>
                  <p>
                      Every new skill begins with one lesson.
                      <strong> Keep learning, keep growing.</strong>
                  </p>
              </div>
          </section>
      </main>
  );
}
