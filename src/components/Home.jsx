
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "../assets/style/style.css";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  GraduationCap,
  Menu,
  Play,
  Sparkles,
  Star,
  X,
  Zap,
  Clock3,
  Users,
  Award,
  Globe,
  Infinity,
} from "lucide-react";
import "../assets/style/style.css";

const courses = [
  {
    id: 1,
    category: "DEVELOPMENT",
    title: "Full Stack Web Development",
    description: "Build modern websites from frontend to backend.",
    price: "$49",
    oldPrice: "$99",
    duration: "12 weeks",
    lessons: "48 lessons",
    level: "Beginner",
    icon: Code2,
    color: "purple",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    category: "DESIGN",
    title: "UI/UX Design Masterclass",
    description: "Turn creative ideas into beautiful digital products.",
    price: "$39",
    oldPrice: "$79",
    duration: "8 weeks",
    lessons: "36 lessons",
    level: "All levels",
    icon: Sparkles,
    color: "pink",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
    tags: ["Figma", "Prototyping", "UX"],
  },
  {
    id: 3,
    category: "DATA SCIENCE",
    title: "AI & Machine Learning",
    description: "Explore intelligent systems and real-world AI projects.",
    price: "$59",
    oldPrice: "$119",
    duration: "10 weeks",
    lessons: "42 lessons",
    level: "Intermediate",
    icon: Zap,
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
    tags: ["Python", "AI", "Data"],
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    initials: "SJ",
    color: "avatar-purple",
    rating: 5,
    text: "The React course completely changed the way I build websites. I created my portfolio and landed my first developer job!",
    course: "Full Stack Development",
  },
  {
    name: "Arun Kumar",
    role: "UI/UX Designer",
    initials: "AK",
    color: "avatar-orange",
    rating: 5,
    text: "Everything is explained clearly, even for beginners. The projects helped me build confidence and improve my design skills.",
    course: "UI/UX Design",
  },
  {
    name: "Emily Chen",
    role: "Data Analyst",
    initials: "EC",
    color: "avatar-blue",
    rating: 5,
    text: "Amazing lessons and practical examples. I finally understand how machine learning works and can apply it to real projects.",
    course: "AI & Machine Learning",
  },
];

const faqs = [
  {
    question: "Are these courses suitable for beginners?",
    answer:
      "Absolutely! Many courses start with the basics and gradually introduce advanced concepts. You can learn at your own pace.",
  },
  {
    question: "How long can I access a course?",
    answer:
      "You can access your purchased course materials anytime, including after completing the lessons. Your learning stays flexible.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Eligible courses include a completion certificate that you can add to your portfolio or professional profile.",
  },
  {
    question: "Can I learn on my own schedule?",
    answer:
      "Yes! Learn from your laptop or mobile device whenever it suits you. Pause lessons, revisit topics, and practice at your own speed.",
  },
];

const gallery = [
  {
    number: "01",
    title: "Learn by Building",
    subtitle: "Real-world projects",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    description:
      "Turn theory into practical skills with guided projects and hands-on exercises.",
  },
  {
    number: "02",
    title: "Learn from Experts",
    subtitle: "Industry-led lessons",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    description:
      "Follow structured lessons designed around real industry workflows.",
  },
  {
    number: "03",
    title: "Build Your Future",
    subtitle: "Career-ready skills",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    description:
      "Create a portfolio, sharpen your skills, and take your next career step.",
  },
];

function StarsBackground() {
  return (
    <div className="stars-background" aria-hidden="true">
      {Array.from({ length: 75 }, (_, i) => (
        <span
          key={i}
          className={`star star-${i % 5}`}
          style={{
            left: `${(i * 37.7) % 100}%`,
            top: `${(i * 23.3) % 100}%`,
            animationDelay: `${(i % 9) * 0.4}s`,
            animationDuration: `${2 + (i % 5) * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}

function PillNav() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Courses", "#courses"],
    ["Experience", "#experience"],
    ["Reviews", "#reviews"],
    ["FAQ", "#faq"],
  ];

  const navigate = (name, href) => {
    setActive(name);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="site-header">
      <a
        href="#home"
        className="brand"
        onClick={() => setActive("Home")}
      >
        <span className="brand-mark">
          <GraduationCap size={23} />
        </span>
        <span>nexora<span className="brand-dot">.</span></span>
      </a>

      <nav className={`pill-nav ${menuOpen ? "nav-open" : ""}`}>
        {links.map(([name, href]) => (
          <button
            type="button"
            key={name}
            className={`nav-link ${active === name ? "active" : ""}`}
            onClick={() => navigate(name, href)}
          >
            {name}
          </button>
        ))}
        <a
          className="mobile-enroll"
          href="#courses"
          onClick={() => setMenuOpen(false)}
        >
          Explore courses <ArrowRight size={16} />
        </a>
      </nav>

      <a className="nav-cta" href="#courses">
        Get started <ArrowUpRight size={17} />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function ElectricCard({ children, className = "" }) {
  return (
    <div className={`electric-card ${className}`}>
      <div className="electric-card-inner">{children}</div>
    </div>
  );
}

function CourseCard({ course, onSelect }) {
  const Icon = course.icon;

  return (
    <motion.article
      className={`course-card pixel-card ${course.color}`}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
    >
      <div className="course-image">
        <img src={course.image} alt={course.title} loading="lazy" />
        <span className="course-category">{course.category}</span>
        <span className="course-icon">
          <Icon size={21} />
        </span>
      </div>

      <div className="course-content">
        <div className="course-meta">
          <span><Clock3 size={14} /> {course.duration}</span>
          <span><BookOpen size={14} /> {course.lessons}</span>
        </div>

        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-tags">
          {course.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="course-bottom">
          <div className="price">
            <strong>{course.price}</strong>
            <del>{course.oldPrice}</del>
          </div>
          <button
            className="course-action"
            onClick={() => onSelect(course)}
            aria-label={`View ${course.title}`}
          >
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function AccordionGallery() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="accordion-gallery">
      {gallery.map((item, index) => (
        <button
          key={item.number}
          className={`gallery-panel ${selected === index ? "expanded" : ""}`}
          onClick={() => setSelected(index)}
          style={{ "--panel-image": `url("${item.image}")` }}
          aria-expanded={selected === index}
        >
          <span className="gallery-number">{item.number}</span>
          <span className="gallery-panel-content">
            <span className="gallery-subtitle">{item.subtitle}</span>
            <span className="gallery-title">{item.title}</span>
            <AnimatePresence>
              {selected === index && (
                <motion.span
                  className="gallery-description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25 }}
                >
                  {item.description}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          <span className="gallery-arrow">
            <ArrowUpRight size={22} />
          </span>
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  return (
    <motion.article
      className="review-card pixel-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -7 }}
    >
      <div className="review-top">
        <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }, (_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        <span className="quote-mark">“</span>
      </div>

      <p className="review-text">{review.text}</p>

      <div className="review-course">
        <Check size={14} /> Completed: {review.course}
      </div>

      <div className="review-person">
        <div className={`review-avatar ${review.color}`}>{review.initials}</div>
        <div>
          <h4>{review.name}</h4>
          <span>{review.role}</span>
        </div>
        <span className="verified"><Check size={13} /></span>
      </div>
    </motion.article>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className={`faq-item ${open === index ? "faq-open" : ""}`}
        >
          <button
            className="faq-question"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">
              <ChevronDown size={20} />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function CourseModal({ course, onClose }) {
  useEffect(() => {
    if (!course) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <motion.div
          className="course-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-course-title"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
          <img src={course.image} alt="" />
          <span className="modal-label">{course.category}</span>
          <h2 id="modal-course-title">{course.title}</h2>
          <p>{course.description}</p>
          <div className="modal-details">
            <span><Clock3 size={16} /> {course.duration}</span>
            <span><BookOpen size={16} /> {course.lessons}</span>
          </div>
          <div className="modal-price">
            <strong>{course.price}</strong>
            <del>{course.oldPrice}</del>
          </div>
          <a href="#contact" className="primary-btn modal-enroll" onClick={onClose}>
            Enquire about this course <ArrowRight size={17} />
          </a>
          <small>Demo course details — connect your checkout to accept payments.</small>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 70 });
  }, []);

  return (
    <main className="nexora">
      <StarsBackground />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <PillNav />

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="eyebrow-icon"><Sparkles size={14} /></span>
            THE NEXT GENERATION OF LEARNING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            Your future
            <br />
            starts <span className="gradient-text">with a skill.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            Learn in-demand skills, create real projects, and unlock new
            opportunities with expert-led online courses made for your future.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a className="primary-btn" href="#courses">
              Explore courses <ArrowRight size={18} />
            </a>
            <a className="secondary-btn" href="#experience">
              <span className="play-icon"><Play size={14} fill="currentColor" /></span>
              See how it works
            </a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="avatar-stack">
              <span>JD</span><span>AK</span><span>MK</span><span>+</span>
            </div>
            <div>
              <div className="social-rating">
                <Star size={14} fill="currentColor" /> 4.9/5
              </div>
              <p>Loved by ambitious learners</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <ElectricCard className="hero-main-card">
            <div className="hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=90"
                alt="Student learning online with a laptop"
              />
              <div className="image-overlay" />
              <div className="live-tag"><span /> LEARNING IN PROGRESS</div>
              <div className="hero-image-caption">
                <span className="caption-icon"><Code2 size={19} /></span>
                <div>
                  <strong>Build something amazing.</strong>
                  <p>Your next chapter begins here.</p>
                </div>
              </div>
            </div>
            <div className="learning-progress">
              <div className="progress-heading">
                <span>Weekly learning goal</span>
                <strong>75%</strong>
              </div>
              <div className="progress-track"><span /></div>
              <div className="progress-bottom">
                <span>3 of 4 hours completed</span>
                <span><Zap size={14} /> Keep going!</span>
              </div>
            </div>
          </ElectricCard>

          <motion.div
            className="floating-badge badge-courses"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          >
            <span className="floating-icon purple-icon"><BookOpen size={19} /></span>
            <span><strong>120+</strong><small>Expert courses</small></span>
          </motion.div>

          <motion.div
            className="floating-badge badge-certificate"
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <span className="floating-icon green-icon"><Award size={20} /></span>
            <span><strong>Skill unlocked!</strong><small>Keep leveling up</small></span>
          </motion.div>
        </motion.div>

        <div className="hero-scroll">
          <span className="scroll-line" /> SCROLL TO EXPLORE
        </div>
      </section>

      <section className="stats-strip section-wrap" data-aos="fade-up">
        <div className="stat-item">
          <Users size={21} />
          <div><strong>25K+</strong><span>Happy learners</span></div>
        </div>
        <div className="stat-item">
          <BookOpen size={21} />
          <div><strong>120+</strong><span>Online courses</span></div>
        </div>
        <div className="stat-item">
          <Award size={21} />
          <div><strong>95%</strong><span>Course completion goal</span></div>
        </div>
        <div className="stat-item">
          <Globe size={21} />
          <div><strong>40+</strong><span>Countries reached</span></div>
        </div>
      </section>

      <section className="courses-section section-wrap" id="courses">
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker"><span /> YOUR NEXT SKILL STARTS HERE</span>
          <h2>Find your next <span className="gradient-text">superpower.</span></h2>
          <p>Curated courses to help you learn faster, build better, and grow further.</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={course.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <CourseCard course={course} onSelect={setSelectedCourse} />
            </div>
          ))}
        </div>

        <div className="courses-footer" data-aos="fade-up">
          <span>Not sure where to begin? Start with what excites you.</span>
          <a href="#experience">Explore your possibilities <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="experience-section section-wrap" id="experience">
        <div className="experience-heading" data-aos="fade-up">
          <span className="section-kicker"><span /> MORE THAN JUST VIDEOS</span>
          <h2>A learning experience<br />that <span className="gradient-text">moves you forward.</span></h2>
          <p>Explore a smarter way to learn, one milestone at a time.</p>
        </div>

        <AccordionGallery />

        <div className="experience-bottom" data-aos="fade-up">
          <div className="experience-bottom-icon"><Infinity size={26} /></div>
          <div>
            <h3>Your pace. Your path. Your future.</h3>
            <p>Make progress every day, without putting your life on hold.</p>
          </div>
          <a href="#courses" className="round-arrow"><ArrowRight size={21} /></a>
        </div>
      </section>

      <section className="reviews-section section-wrap" id="reviews">
        <div className="reviews-heading" data-aos="fade-up">
          <span className="section-kicker"><span /> REAL LEARNERS. REAL PROGRESS.</span>
          <h2>Don't take our word.<br /><span className="gradient-text">Hear it from them.</span></h2>
          <p>Every success story starts with a first step.</p>
        </div>

        <div className="reviews-summary" data-aos="fade-up">
          <div className="summary-stars">
            <strong>4.9</strong>
            <div>
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={16} fill="currentColor" />
                ))}
              </div>
              <span>Sample learner ratings</span>
            </div>
          </div>
          <div className="summary-divider" />
          <div className="summary-learners">
            <strong>25,000+</strong>
            <span>Learners on their journey</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        <p className="reviews-note">
          * The testimonials and statistics shown are sample demonstration content.
          Replace them with verified learner reviews before publishing.
        </p>
      </section>

      <section className="faq-section section-wrap" id="faq">
        <div className="faq-intro" data-aos="fade-right">
          <span className="section-kicker"><span /> GOT QUESTIONS?</span>
          <h2>Good questions.<br /><span className="gradient-text">Clear answers.</span></h2>
          <p>Everything you need to know before starting your learning journey.</p>
          <a href="#contact" className="secondary-btn">
            Still need help? <ArrowUpRight size={17} />
          </a>
        </div>
        <div data-aos="fade-left">
          <FAQSection />
        </div>
      </section>

      <section className="cta-section section-wrap" id="contact" data-aos="zoom-in">
        <div className="cta-stars" />
        <div className="cta-content">
          <span className="section-kicker"><span /> YOUR FUTURE IS CALLING</span>
          <h2>One small step.<br />A <span className="gradient-text">whole new you.</span></h2>
          <p>Start learning today. Your future self will thank you.</p>
          <a href="#courses" className="primary-btn">
            Start learning today <ArrowRight size={18} />
          </a>
          <div className="cta-note"><Check size={14} /> Learn at your own pace</div>
        </div>
        <div className="cta-decoration">
          <div className="cta-ring ring-one" />
          <div className="cta-ring ring-two" />
          <div className="cta-cap"><GraduationCap size={68} /></div>
          <Sparkles className="cta-sparkle sparkle-one" size={26} />
          <Sparkles className="cta-sparkle sparkle-two" size={19} />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-mark"><GraduationCap size={23} /></span>
              <span>nexora<span className="brand-dot">.</span></span>
            </a>
            <p>Learn with purpose.<br />Build with confidence.</p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">in</a>
              <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">ig</a>
              <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noreferrer">yt</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#courses">All courses</a>
            <a href="#experience">How it works</a>
            <a href="#reviews">Student reviews</a>
            <a href="#faq">FAQs</a>
          </div>

          <div className="footer-column">
            <h4>Categories</h4>
            <a href="#courses">Development</a>
            <a href="#courses">UI/UX Design</a>
            <a href="#courses">AI & Data Science</a>
            <a href="#courses">Career skills</a>
          </div>

          <div className="footer-column footer-newsletter">
            <h4>Keep growing.</h4>
            <p>Make space for a new skill in your inbox.</p>
            <form onSubmit={(event) => {
              event.preventDefault();
              alert("Demo form: connect an email service to subscribe.");
            }}>
              <input type="email" placeholder="Your email address" required aria-label="Your email address" />
              <button type="submit" aria-label="Subscribe"><ArrowRight size={18} /></button>
            </form>
            <small>Demo newsletter form. No email is sent yet.</small>
          </div>
        </div>

        <div className="footer-bottom section-wrap">
          <span>© {new Date().getFullYear()} Nexora Learning. All rights reserved.</span>
          <div><a href="#contact">Privacy</a><a href="#contact">Terms</a></div>
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
      </footer>

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </main>
  );
}
