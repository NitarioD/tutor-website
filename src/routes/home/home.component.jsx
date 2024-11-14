import React from "react";

import headerCourseImg from "../../assets/images/header-course.png";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/footer.component";
import { ReactComponent as WavyBackgroundEffect } from "../../assets/images/hero-bottom.svg";

import {
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  chaptersIcon1,
  chaptersIcon2,
  chaptersIcon3,
  details,
  author,
  stats,
} from "../../assets/images";

import "./home.styles.scss";
import LearnCard from "../../components/card/learn-card.component";
import ChapterCard from "../../components/card/chapter-card.component";
import TakeawayCard from "../../components/card/takeaway-card.component";

const Home = () => {
  const learnCard = [
    {
      id: 1,
      imgSrc: description1,
      text: "Set Clear Objectives and goals",
    },
    {
      id: 2,
      imgSrc: description2,
      text: "Plan Layout And Design Elements",
    },
    {
      id: 3,
      imgSrc: description3,
      text: "Sketch Creative Concepts",
    },
    {
      id: 4,
      imgSrc: description4,
      text: "Establish Strong Call-to-Actions",
    },
    {
      id: 5,
      imgSrc: description5,
      text: "Choose High-Quality HTML Templates",
    },
    {
      id: 6,
      imgSrc: description6,
      text: "Create Impressive Layout Previews",
    },
    {
      id: 7,
      imgSrc: description7,
      text: "Master Landing Page Coding Techniques",
    },
    {
      id: 8,
      imgSrc: description8,
      text: "Launch Your Project Successfully Online",
    },
  ];
  const chaptersCard = [
    {
      id: 1,
      imgSrc: chaptersIcon1,
      subheading: "Setting Clear Objectives",
      paragraph:
        "Learn how to define clear objectives and goals for your video projects, ensuring focus and direction",
    },
    {
      id: 2,
      imgSrc: chaptersIcon2,
      subheading: "Content Creation Strategies",
      paragraph:
        "Dive into effective content creation strategies that resonate with your audience",
    },
    {
      id: 3,
      imgSrc: chaptersIcon3,
      subheading: "Coding Essentials",
      paragraph:
        "Explore the fundamentals of coding for video projects, including HTML, CSS, and JavaScript",
    },
  ];

  const takeawayCard = [
    {
      id: 1,
      iconClasses: "fas fa-rocket fa-3x text-primary",
      boldText: "Enhanced Skills",
      otherText: " - Develop advanced skills in web design & development",
    },
    {
      id: 2,
      iconClasses: "fas fa-globe fa-3x text-primary",
      boldText: "Global Perspective",
      otherText: " - Gain insights into industry trends and best practices",
    },

    {
      id: 3,
      iconClasses: "fas fa-cloud fa-3x text-primary",
      boldText: "Cloud Technology",
      otherText: " - Explore the latest cloud technologies and tools",
    },

    {
      id: 4,
      iconClasses: "fas fa-user fa-3x text-primary",
      boldText: "Networking",
      otherText: " - Connect with fellow professionals and expand your network",
    },
    {
      id: 5,
      iconClasses: "fas fa-cog fa-3x text-primary",
      boldText: "Problem-Solving",
      otherText:
        " - Enhance your problem-solving abilities and critical thinking skills",
    },
    {
      id: 6,
      iconClasses: "fas fa-server fa-3x text-primary",
      boldText: "Technical Proficiency",
      otherText:
        " - Improve your technical proficiency and stay ahead in the digital landscape.",
    },
  ];

  return (
    <>
      <header className="hero">
        <div className="container hero-flex">
          <div className="hero-content">
            <h1>Create Your Own Video Courses</h1>
            <p>
              Dive deep into the world of creativity and learn to craft stunning
              videos that captivate your audience.
            </p>
            <Link to="#" className="btn">
              $29 Get Course
            </Link>
          </div>
          <img src={headerCourseImg} alt="header background img" />
        </div>
        <WavyBackgroundEffect />
      </header>

      {/* Learn Section */}
      <section className="learn">
        <div className="container">
          <div className="section-header">
            <h2>What Will You Learn?</h2>
            <div className="heading-border" />
            <p>
              Embark on a journey of learning with our comprehensive video
              courses.Discover the secrets of successful video creation and
              enhance your skills.
            </p>
          </div>
          <div className="topics">
            {learnCard.map((card) => (
              <LearnCard imgSrc={card.imgSrc} text={card.text} key={card.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Course Chapter Section*/}
      <section className="chapters section" id="chapters">
        <div className="container">
          <div className="section-header">
            <h2>Main Course Chapters</h2>
            <div className="heading-border" />
            <p>
              Explore the core concepts and techniques covered in our video
              course. Each chapter is designed to equip you with essential
              skills for video creation.
            </p>
          </div>
          <div className="chapter-cards">
            {chaptersCard.map(({ imgSrc, subheading, paragraph, id }) => (
              <ChapterCard
                imgSrc={imgSrc}
                subheading={subheading}
                paragraph={paragraph}
                key={id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course Summary  */}
      <section className="summary" id="summary">
        <div className="container">
          <div className="section-header">
            <h2>Course Summary</h2>
            <div className="heading-border" />
          </div>
          <div className="section-lists">
            <div className="list">
              <div className="list-header">Setting Clear Objectives</div>
              <div className="list-item">
                1.1 Learn to set clear and achievable objectives for your video
                projects, ensuring alignment with your overall goals.
              </div>
              <div className="list-item">
                1.2 Explore strategies for defining specific objectives that
                guide the direction of your project and facilitate success.
              </div>
              <div className="list-item">
                1.3 Understand the importance of setting measurable objectives
                to evaluate the effectiveness of your video content.
              </div>
            </div>

            <div className="list">
              <div className="list-header">Content Creation Strategies</div>
              <div className="list-item">
                2.1 Discover effective content creation strategies tailored to
                engage your target audience and convey your message effectively.
              </div>
              <div className="list-item">
                2.2 Learn to craft compelling video content that resonates with
                viewers and inspires action, using storytelling and visual
                techniques.
              </div>
              <div className="list-item">
                2.3 Explore methods for optimizing content creation processes to
                streamline production and maximize impact.
              </div>
            </div>

            <div className="list">
              <div className="list-header">From Layout To HTML/CSS</div>
              <div className="list-item">
                3.1 Master the transition from layout design to HTML/CSS
                implementation, ensuring seamless translation of visual concepts
              </div>
              <div className="list-item">
                3.2 Dive into best practices for coding HTML and CSS, including
                responsive design principles and optimization techniques
              </div>
              <div className="list-item">
                3.3 Gain proficiency in converting design mockups into
                interactive web pages, incorporating CSS styling and layout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="info" id="info">
        <div className="info-container">
          <div className="info-left" />
          <div className="info-content">
            <h2>Who Is This Course For?</h2>
            <p>
              This course is designed for individuals seeking to enhance their
              skills and knowledge in web design, development, and digital
              marketing. Whether you are a seasoned web designer, a budding web
              developer or a marketing professional looking to expand your skill
              set.
            </p>
            <ul>
              <li>
                <i className="fas fa-check"></i> Web Designers
              </li>
              <li>
                <i className="fas fa-check"></i> Web Developers
              </li>
              <li>
                <i className="fas fa-check"></i> Marketing Professionals
              </li>
              <li>
                <i className="fas fa-check"></i> Entreprenuers
              </li>
              <li>
                <i className="fas fa-check"></i> Business Owners
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TakeAways */}
      <section className="takeaways section" id="takeaways">
        <div className="container">
          <div className="section-header">
            <h2>Key Takeaways</h2>
            <div className="heading-border" />
            <p>
              This section highlights some of the key insights and learnings
              you'll gain from the course. Take a look at what you can expect to
              achieve:
            </p>
          </div>
          <div className="takeaways-cards">
            {takeawayCard.map(({ iconClasses, boldText, otherText, id }) => (
              <TakeawayCard
                iconClasses={iconClasses}
                boldText={boldText}
                otherText={otherText}
                key={id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="details section" id="details">
        <div className="container details-flex">
          <img src={details} alt="details" />
          <div className="details-content">
            <h2>Course Details</h2>
            <div className="heading-border" />
            <p>
              Gain insight into the course curriculum, structure, and what to
              expect throughout your learning journey.
            </p>
            <Link to="#" className="btn">
              See Details
            </Link>
          </div>
        </div>
      </section>

      {/* Author info */}
      <section className="details section" id="author">
        <div className="container details-flex">
          <img src={author} alt="details" />
          <div className="details-content">
            <h2>Author Information</h2>
            <div className="heading-border"></div>
            <p>
              Learn about the author's background, expertise, and contributions
              to the course content.
            </p>
            <ul>
              <li>
                <i className="fas fa-chevron-circle-right text-primary"></i>
                <strong> Expertise: </strong> Lorem ipsum dolor sit amet
                consectetur.
              </li>
              <li>
                <i className="fas fa-chevron-circle-right text-primary"></i>
                <strong>Experience:</strong> Blandit turpis a est eget augue
                ornare.
              </li>
              <li>
                <i className="fas fa-chevron-circle-right text-primary"></i>
                <strong>Skills:</strong> Sed vulputate aliquet eget non velit.
              </li>
            </ul>
            <Link to="#" className="btn">
              See Details
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats section" id="stats">
        <div className="container stats-flex">
          <img src={stats} alt="stats" />
          <div className="stats-content">
            <div className="stats-numbers">
              <div>
                <h3 aria-labelledby="stats-happy-users">2000+</h3>
                <p id="stats-happy-users">Happy Users</p>
              </div>
              <div>
                <h3 aria-labelledby="stats-issues-solved">358</h3>
                <p id="stats-issues-solved">Issues Solved</p>
              </div>
              <div>
                <h3 aria-labelledby="stats-good-reviews">980</h3>
                <p id="stats-good-reviews">Good Reviews</p>
              </div>
              <div>
                <h3 aria-labelledby="stats-case-studies">216</h3>
                <p id="stats-case-studies">Case Studies</p>
              </div>
            </div>

            <p className="stats-text">
              Tutor is probably one of the best video courses on landing page
              making in the web industry
            </p>
            <Link to="#" className="btn">
              Get The Course
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter section" id="newsletter">
        <div className="container newsletter-flex">
          <h2>Subscribe To Our Newsletter</h2>
          <p>
            Stay updated with the latest news, offers, and insights from our
            platform. Join our newsletter community today!
          </p>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Social */}
      <section className="social section">
        <div className="container ">
          <p>
            Follow us on social media for updates and news about our courses.
          </p>
          <div className="social-icons">
            <Link
              to="https://facebook.com"
              target="_blank"
              aria-label="Follow Us On Facebook"
            >
              <i className="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              aria-label="Follow Us On Twitter"
            >
              <i className="fa-brands fa-twitter fa-2x"></i>
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              aria-label="Follow Us On Instagram"
            >
              <i className="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link
              to="https://linkdin.com"
              target="_blank"
              aria-label="Follow Us On Linkdin"
            >
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </Link>
            <Link
              to="https://youtube.com"
              target="_blank"
              aria-label="Follow Us On Youtube"
            >
              <i className="fa-brands fa-youtube fa-2x"></i>
            </Link>
            <Link
              to="https://pinterest.com"
              target="_blank"
              aria-label="Follow Us On Pinterest"
            >
              <i className="fa-brands fa-pinterest fa-2x"></i>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
