import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style/style.css";
import {
  FaLeaf, FaSearch, FaUsers, FaGraduationCap, FaCertificate, FaHandshake,
  FaStar, FaChevronRight, FaChevronLeft, FaVideo, FaChartBar, FaBriefcase,
  FaDesktop, FaPencilAlt, FaHeart, FaFacebookF, FaInstagram, FaLinkedinIn,
  FaYoutube, FaPinterestP,
} from "react-icons/fa";


import digital from "../assets/images/digital.jpg";
import ux from "../assets/images/ux.jpg";
import html from "../assets/images/html.png";
import design from "../assets/images/design.webp";
import cars1 from "../assets/images/cars1.jpg";


/* Replace the picsum / pravatar links with your own images (src/assets) */
const img = (seed, w = 400, h = 260) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const face = (n) => `https://i.pravatar.cc/200?img=${n}`;

const navLinks = ["Categories", "Courses", "Mentors", "Stories", "Contact"];

const stats = [
  { icon: <FaUsers />, num: "15K+", label: "Learners" },
  { icon: <FaGraduationCap />, num: "10+", label: "Years Teaching" },
  { icon: <FaCertificate />, num: "420+", label: "Certificates" },
  { icon: <FaHandshake />, num: "60+", label: "Partners" },
];

const courses = [
  { title: "Digital Marketing", desc: "Grow brands in the digital world.", rating: 4.8, reviews: "2,341", price: 19, old: 49, tag: "BEST SELLER", img: digital },
  { title: "UX Strategy", desc: "Design better digital experiences.", rating: 4.7, reviews: "1,982", price: 16, old: 39, img: ux },
  { title: "HTML Basics", desc: "Build websites from scratch.", rating: 4.8, reviews: "2,118", price: 14, old: 29, img: html },
  { title: "Product Design", desc: "Turn ideas into real products.", rating: 4.6, reviews: "1,765", price: 18, old: 45, tag: "POPULAR", img: design },
];

const features = [
  { icon: <FaUsers />, color: "teal", title: "Expert Mentors", text: "Learn from industry professionals" },
  { icon: <FaVideo />, color: "coral", title: "Live Classes", text: "Interactive and engaging sessions" },
  { icon: <FaChartBar />, color: "teal", title: "Active Learners", text: "A global community of 500K+" },
];

const categories = [
  { icon: <FaBriefcase />, name: "Business", text: "Build your career", color: "teal" },
  { icon: <FaDesktop />, name: "Technology", text: "Stay ahead", color: "coral" },
  { icon: <FaPencilAlt />, name: "Creative", text: "Express your ideas", color: "yellow" },
  { icon: <FaHeart />, name: "Lifestyle", text: "Live a better you", color: "mint" },
];

const mentors = [
  { name: "Daniel Carter", role: "Digital Marketing", rating: 4.9, count: 892, img: digital, bg: "teal" },
  { name: "Sophia Nguyen", role: "UX Design", rating: 4.8, count: 764, img: face(47), bg: "mint" },
  { name: "Marcus Lee", role: "Web Development", rating: 4.9, count: "1,021", img: face(15), bg: "yellow" },
  { name: "Emma Wilson", role: "Product Design", rating: 4.7, count: 688, img: face(44), bg: "pink" },
];

const stories = [
  { quote: "The course was well structured and super easy to follow. I gained real skills and landed a new job within 3 months!", name: "Alyssa Chen", role: "Marketing Specialist", img: face(32), color: "yellow" },
  { quote: "Amazing content, supportive mentors and a great community. Learnora made learning fun and practical!", name: "James Miller", role: "Software Engineer", img: face(53), color: "mint" },
];

const guides = [
  { title: "10 Habits for Lifelong Learning", text: "Build a growth mindset for a brighter future.", date: "Jan 12, 2024", read: "6 min read", img: img("guide1", 500, 260) },
  { title: "How to Choose the Right Career Path", text: "Key questions to help you decide.", date: "Feb 3, 2024", read: "5 min read", img: img("guide2", 500, 260) },
  { title: "Turn Your Passion Into a Career", text: "Real stories from Learnora students.", date: "Mar 18, 2024", read: "4 min read", img: img("guide3", 500, 260) },
];

const footerCols = [
  { head: "Explore", links: ["Categories", "Courses", "Mentors", "Stories", "Learning Guides"] },
  { head: "Company", links: ["About Us", "Careers", "Press", "Partners", "Blog"] },
  { head: "Support", links: ["Help Center", "Terms & Conditions", "Privacy Policy", "Contact Us", "Community"] },
];

const Stars = ({ n = 5 }) => (
  <span className="stars">
    {Array.from({ length: n }).map((_, i) => <FaStar key={i} />)}
  </span>
);

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [news, setNews] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  const total = 8;
  const next = () => setSlide((s) => (s + 1) % total);
  const prev = () => setSlide((s) => (s - 1 + total) % total);

  return (
    <div className="learnora-page">
      {/* NAVBAR */}
      <header className="ln-nav" data-aos="fade-down">
        <div className="ln-nav-top">
          <a href="#home" className="ln-logo"><FaLeaf /> LEARNORA</a>
          <div className="ln-search">
            <FaSearch />
            <input type="text" placeholder="Search courses" aria-label="Search courses" />
          </div>
          <button className="btn btn-dark">Sign In</button>
        </div>
        <nav className="ln-links">
          {navLinks.map((l) => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
        </nav>
      </header>

      {/* HERO */}
      <section className="ln-hero" id="home">
        <div className="hero-left" data-aos="fade-right">
          <h1>Learn New Skills<br />Build Your Future</h1>
          <p className="hero-sub">Practical courses for career growth.</p>
          <form className="hero-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-dark">Start Free</button>
          </form>
          <small className="hero-note"><i /> No credit card required</small>
        </div>

        <div className="hero-right" data-aos="zoom-in" data-aos-delay="150">
          <span className="scribble s-top">A Brighter<br />Day Ahead</span>
          <span className="scribble s-mid">Better Skills<br />Brighter Tomorrow</span>
          <img className="hero-girl" src={cars1} alt="Smiling student" />
          <div className="float-card rating-card" data-aos="fade-left" data-aos-delay="400">
            <span className="fc-icon yellow"><FaStar /></span>
            <div><strong>4.9/5</strong><small>From 12K+ learner reviews</small></div>
          </div>
          <div className="float-card recommend-card" data-aos="fade-right" data-aos-delay="550">
            <span className="fc-icon yellow"><FaUsers /></span>
            <div><strong>98%</strong><small>Would recommend Learnora</small></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ln-stats" data-aos="fade-up">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-icon">{s.icon}</span>
            <div><strong>{s.num}</strong><small>{s.label}</small></div>
          </div>
        ))}
      </section>

      {/* TRENDING COURSES */}
      <section className="ln-section" id="courses">
        <div className="sec-head" data-aos="fade-up">
          <h2>Trending Courses</h2>
          <p>Explore in-demand skills for tomorrow.</p>
        </div>
        <div className="course-grid">
          {courses.map((c, i) => (
            <article className="course-card" key={c.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="course-img">
                <img src={c.img} alt={c.title} />
                {c.tag && <span className="badge">{c.tag}</span>}
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="course-rating">
                <b>{c.rating}</b> <Stars /> <small>({c.reviews})</small>
              </div>
              <div className="course-price">
                <strong>${c.price}.00</strong> <s>${c.old}.00</s>
              </div>
            </article>
          ))}
        </div>
        <div className="center" data-aos="zoom-in">
          <button className="btn btn-dark">Browse All <FaChevronRight /></button>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="ln-features" data-aos="fade-up">
        {features.map((f) => (
          <div className="feature" key={f.title}>
            <span className={`feature-icon ${f.color}`}>{f.icon}</span>
            <div><strong>{f.title}</strong><small>{f.text}</small></div>
          </div>
        ))}
      </section>

      {/* CATEGORIES */}
      <section className="ln-section" id="categories">
        <div className="sec-head" data-aos="fade-up">
          <h2>Top Categories</h2>
          <p>Find the right path for you.</p>
        </div>
        <div className="cat-grid">
          {categories.map((c, i) => (
            <a href="#categories" className={`cat-card ${c.color}`} key={c.name} data-aos="flip-up" data-aos-delay={i * 100}>
              <span className="cat-icon">{c.icon}</span>
              <div><strong>{c.name}</strong><small>{c.text}</small></div>
              <FaChevronRight className="cat-arrow" />
            </a>
          ))}
        </div>
      </section>

      {/* MENTORS */}
      <section className="ln-section" id="mentors">
        <div className="sec-head" data-aos="fade-up">
          <h2>Meet Your Mentors</h2>
          <p>Learn from the best.</p>
        </div>
        <div className="mentor-grid">
          {mentors.map((m, i) => (
            <div className="mentor-card" key={m.name} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className={`mentor-photo ${m.bg}`}><img src={m.img} alt={m.name} /></div>
              <div>
                <strong>{m.name}</strong>
                <small>{m.role}</small>
                <span className="mentor-rate"><b>{m.rating}</b> <FaStar /> <em>({m.count})</em></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDENT STORIES */}
      <section className="ln-section" id="stories">
        <div className="sec-head center-head" data-aos="fade-up">
          <h2>Student Stories</h2>
          <p>Real people. Real progress.</p>
        </div>
        <div className="story-grid">
          {stories.map((s, i) => (
            <div className={`story-card ${s.color}`} key={s.name} data-aos={i ? "fade-left" : "fade-right"}>
              <img src={s.img} alt={s.name} />
              <div>
                <p>“{s.quote}”</p>
                <div className="story-foot">
                  <div><strong>{s.name}</strong><small>{s.role}</small></div>
                  <Stars />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pager" data-aos="fade-up">
          <button onClick={prev} aria-label="Previous"><FaChevronLeft /></button>
          <span>{slide + 1} of {total}</span>
          <button onClick={next} aria-label="Next"><FaChevronRight /></button>
        </div>
      </section>

      {/* GUIDES */}
      <section className="ln-section" id="guides">
        <div className="sec-head" data-aos="fade-up">
          <h2>Latest Learning Guides</h2>
          <p>Tips, stories and insights.</p>
        </div>
        <div className="guide-grid">
          {guides.map((g, i) => (
            <article className="guide-card" key={g.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <img src={g.img} alt={g.title} />
              <h3>{g.title}</h3>
              <p>{g.text}</p>
              <div className="guide-meta"><span>{g.date}</span><span>{g.read}</span></div>
            </article>
          ))}
        </div>
        <div className="center" data-aos="zoom-in">
          <button className="btn btn-dark">Read More</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ln-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-brand" data-aos="fade-up">
            <a href="#home" className="ln-logo"><FaLeaf /> LEARNORA</a>
            <p>Learning today. A brighter tomorrow.</p>
            <div className="socials">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP].map((Icon, i) => (
                <a href="#home" key={i} aria-label="social link"><Icon /></a>
              ))}
            </div>
          </div>

          {footerCols.map((col, i) => (
            <div className="footer-col" key={col.head} data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
              <h4>{col.head}</h4>
              {col.links.map((l) => <a href="#home" key={l}>{l}</a>)}
            </div>
          ))}

          <div className="footer-news" data-aos="fade-up" data-aos-delay="400">
            <h4>Newsletter</h4>
            <p>Get the latest courses, tips and stories.</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={news}
              onChange={(e) => setNews(e.target.value)}
            />
            <button className="btn btn-dark full">Subscribe</button>
          </div>

          <div className="footer-leaf" data-aos="zoom-in">
            <FaLeaf />
            <span className="scribble">Keep Learning<br />Keep Growing</span>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© 2024 Learnora. All rights reserved.</small>
          <small>A more skilled, kinder, brighter world.</small>
        </div>
      </footer>
    </div>
  );
}