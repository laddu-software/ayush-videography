import { useEffect, useState } from "react";
import "./App.css";

const PHONE = "8434034498";
const PHONE_LINK = `tel:${PHONE}`;

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Sirdala+Road%2C+Nawada%2C+Bihar";

const services = [
  {
    no: "01",
    title: "WEDDING",
    text: "Cinematic wedding photography and films that turn real moments into unforgettable memories.",
  },
  {
    no: "02",
    title: "PRE-WEDDING",
    text: "Creative pre-wedding photography and cinematic films with stylish compositions.",
  },
  {
    no: "03",
    title: "BIRTHDAY",
    text: "Professional coverage for birthdays, family celebrations and special moments.",
  },
  {
    no: "04",
    title: "EVENTS",
    text: "Complete photography and videography coverage for functions and events.",
  },
  {
    no: "05",
    title: "DRONE",
    text: "Aerial cinematic views that give your event film a completely different perspective.",
  },
  {
    no: "06",
    title: "EDITING",
    text: "Professional editing, colour treatment, music sync and cinematic finishing.",
  },
];

const packages = [
  {
    name: "CLASSIC",
    price: "₹7,999",
    duration: "UP TO 4 HOURS",
    features: [
      "Photography coverage",
      "Cinematic video",
      "Professional editing",
      "Digital delivery",
      "Colour correction",
    ],
  },
  {
    name: "PREMIUM",
    price: "₹14,999",
    duration: "UP TO 8 HOURS",
    featured: true,
    features: [
      "Photography + videography",
      "Cinematic highlight film",
      "Professional editing",
      "Colour grading",
      "Premium digital delivery",
      "Cinematic shots",
    ],
  },
  {
    name: "CINEMATIC",
    price: "₹24,999",
    duration: "FULL DAY",
    features: [
      "Full-day photography",
      "Full-day videography",
      "Highlight film",
      "Advanced editing",
      "Professional colour grading",
      "Drone coverage where suitable",
    ],
  },
];

function App() {
  const [intro, setIntro] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = intro ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [intro]);

  const goTo = (id) => {
    setMenu(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="site">

      {/* ================= INTRO ================= */}

      <div className={`intro-screen ${intro ? "intro-active" : "intro-close"}`}>
        <div className="intro-gradient gradient-one"></div>
        <div className="intro-gradient gradient-two"></div>
        <div className="intro-gradient gradient-three"></div>

        <div className="intro-top">
          <span>AYUSH / VISUAL STUDIO</span>
          <span>EST. 2025</span>
        </div>

        <div className="intro-camera-wrap">

          <div className="intro-camera">
            <div className="camera-glow"></div>

            <div className="outer-ring"></div>
            <div className="outer-ring ring-two"></div>
            <div className="outer-ring ring-three"></div>

            <div className="lens">
              <div className="lens-reflection"></div>

              <div className="iris iris-one"></div>
              <div className="iris iris-two"></div>
              <div className="iris iris-three"></div>
              <div className="iris iris-four"></div>
              <div className="iris iris-five"></div>
              <div className="iris iris-six"></div>

              <div className="lens-core"></div>
            </div>
          </div>

        </div>

        <div className="intro-content">

          <div className="intro-small">
            PHOTOGRAPHY • FILM • CREATIVE
          </div>

          <h1>
            AYUSH
            <br />
            <span>VIDEOGRAPHY</span>
          </h1>

          <p>Your Moments. Our Focus.</p>

          <button
            className="intro-enter"
            onClick={() => setIntro(false)}
          >
            <span>ENTER STUDIO</span>
            <b>→</b>
          </button>

        </div>

        <div className="intro-bottom">
          <span>NAWADA, BIHAR</span>
          <span>8434034498</span>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <button
          className="brand"
          onClick={() => goTo("home")}
        >
          <span className="brand-symbol">A</span>

          <span>
            AYUSH
            <small>VIDEOGRAPHY</small>
          </span>
        </button>

        <nav className={menu ? "nav-open" : ""}>
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("services")}>Services</button>
          <button onClick={() => goTo("packages")}>Packages</button>
          <button onClick={() => goTo("about")}>About</button>
          <button onClick={() => goTo("contact")}>Contact</button>
        </nav>

        <a className="nav-call" href={PHONE_LINK}>
          CALL NOW
        </a>

        <button
          className="menu-button"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "×" : "☰"}
        </button>

      </header>

      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">

          <div className="blob blob-a"></div>
          <div className="blob blob-b"></div>
          <div className="blob blob-c"></div>

          <div className="scribble scribble-one"></div>
          <div className="scribble scribble-two"></div>

          <div className="hero-grid"></div>

          <div className="hero-content">

            <div className="hero-label">
              <span></span>
              CINEMATIC VISUAL STUDIO
            </div>

            <h2>
              WE
              <br />
              CAPTURE
              <br />
              <em>FEELING.</em>
            </h2>

            <p>
              Professional photography and cinematic videography
              for weddings, pre-weddings, birthdays, events and
              special celebrations across Nawada, Gaya and Bihar.
            </p>

            <div className="hero-buttons">

              <a className="button primary" href={PHONE_LINK}>
                BOOK A SHOOT
                <span>↗</span>
              </a>

              <button
                className="button secondary"
                onClick={() => goTo("services")}
              >
                EXPLORE SERVICES
                <span>↓</span>
              </button>

            </div>

          </div>

          {/* 3D CAMERA */}

          <div className="hero-visual">

            <div className="visual-caption">
              <span>CAM 01</span>
              <span>4K / 24FPS</span>
            </div>

            <div className="floating-camera">

              <div className="camera-shadow"></div>

              <div className="camera-top"></div>

              <div className="camera-body">
                <div className="camera-side-line"></div>

                <div className="camera-name">
                  AYUSH
                  <small>VISUAL SYSTEM</small>
                </div>

                <div className="camera-lens-large">

                  <div className="lens-circle-outer"></div>

                  <div className="lens-circle-mid">

                    <div className="lens-glass">
                      <div className="glass-shine"></div>
                      <span>24-70</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="camera-tag tag-one">
              <span>01</span>
              FOCUS
            </div>

            <div className="camera-tag tag-two">
              <span>02</span>
              FRAME
            </div>

            <div className="camera-tag tag-three">
              <span>03</span>
              STORY
            </div>

          </div>

          <div className="scroll-note">
            SCROLL TO EXPLORE
            <span>↓</span>
          </div>

        </section>

        {/* ================= MARQUEE ================= */}

        <div className="marquee">

          <div className="marquee-track">
            <span>WEDDINGS</span>
            <i>✦</i>
            <span>PRE-WEDDINGS</span>
            <i>✦</i>
            <span>EVENTS</span>
            <i>✦</i>
            <span>DRONE</span>
            <i>✦</i>
            <span>FILMS</span>
            <i>✦</i>
            <span>PHOTOGRAPHY</span>
            <i>✦</i>

            <span>WEDDINGS</span>
            <i>✦</i>
            <span>PRE-WEDDINGS</span>
            <i>✦</i>
            <span>EVENTS</span>
            <i>✦</i>
            <span>DRONE</span>
            <i>✦</i>
          </div>

        </div>

        {/* ================= SERVICES ================= */}

        <section className="section services-section" id="services">

          <div className="section-header">

            <div>
              <span className="section-number">01 / 04</span>

              <h2>
                WHAT
                <br />
                WE <em>DO.</em>
              </h2>
            </div>

            <p>
              We create photographs and films that feel alive.
              Every frame is planned, captured and edited with
              attention to detail.
            </p>

          </div>

          <div className="services-grid">

            {services.map((service) => (
              <article className="service-card" key={service.no}>

                <div className="service-top">
                  <span>{service.no}</span>
                  <span>↗</span>
                </div>

                <div className="service-circle">
                  {service.no}
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <div className="service-line"></div>

              </article>
            ))}

          </div>

        </section>

        {/* ================= CINEMATIC BREAK ================= */}

        <section className="cinematic-section">

          <div className="big-orb"></div>

          <div className="cinematic-text">

            <span>EVERY FRAME HAS A</span>

            <h2>
              <strong>STORY</strong>
              <br />
              <em>TO TELL.</em>
            </h2>

            <p>
              We don't simply record events.
              We create visual memories.
            </p>

          </div>

          <div className="film-strip">
            <span>●</span>
            <span>FRAME 01</span>
            <span>FRAME 02</span>
            <span>FRAME 03</span>
            <span>FRAME 04</span>
            <span>●</span>
          </div>

        </section>

        {/* ================= PACKAGES ================= */}

        <section className="section packages-section" id="packages">

          <div className="section-header">

            <div>
              <span className="section-number">02 / 04</span>

              <h2>
                PICK YOUR
                <br />
                <em>FRAME.</em>
              </h2>
            </div>

            <p>
              Simple starting packages. Final pricing can be
              adjusted according to your event, duration,
              location and coverage requirements.
            </p>

          </div>

          <div className="packages-grid">

            {packages.map((pkg) => (
              <article
                className={`package-card ${
                  pkg.featured ? "package-featured" : ""
                }`}
                key={pkg.name}
              >

                {pkg.featured && (
                  <div className="popular">
                    MOST POPULAR
                  </div>
                )}

                <span className="package-label">
                  {pkg.name}
                </span>

                <h3>{pkg.price}</h3>

                <div className="package-duration">
                  {pkg.duration}
                </div>

                <div className="package-divider"></div>

                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <span>✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  className="package-button"
                  href={PHONE_LINK}
                >
                  BOOK PACKAGE
                  <span>↗</span>
                </a>

              </article>
            ))}

          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section className="section about-section" id="about">

          <div className="about-visual">

            <div className="about-orb"></div>

            <div className="about-frame">
              <div className="frame-corner tl"></div>
              <div className="frame-corner tr"></div>
              <div className="frame-corner bl"></div>
              <div className="frame-corner br"></div>

              <span>AYUSH / 2025</span>

              <strong>
                A
              </strong>

              <small>
                VISUAL
                <br />
                STUDIO
              </small>
            </div>

          </div>

          <div className="about-content">

            <span className="section-number">03 / 04</span>

            <h2>
              ABOUT
              <br />
              <em>AYUSH.</em>
            </h2>

            <p>
              AYUSH VIDEOGRAPHY is a photography and videography
              service based in Nawada, Bihar.
            </p>

            <p>
              Established in 2025 in India, we focus on weddings,
              pre-weddings, birthdays, events, drone coverage and
              professional cinematic editing.
            </p>

            <div className="about-stats">

              <div>
                <strong>2025</strong>
                <span>ESTABLISHED</span>
              </div>

              <div>
                <strong>2+</strong>
                <span>YEARS EXPERIENCE</span>
              </div>

              <div>
                <strong>BIHAR</strong>
                <span>SERVICE REGION</span>
              </div>

            </div>

          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section className="contact-section" id="contact">

          <div className="contact-shape shape-one"></div>
          <div className="contact-shape shape-two"></div>

          <div className="contact-inner">

            <span className="section-number">04 / 04</span>

            <h2>
              LET'S MAKE
              <br />
              SOMETHING
              <br />
              <em>UNFORGETTABLE.</em>
            </h2>

            <p>
              Have an event coming up?
              Let's talk about your story.
            </p>

            <div className="contact-buttons">

              <a className="contact-button dark" href={PHONE_LINK}>
                CALL 8434034498
                <span>↗</span>
              </a>

              <a
                className="contact-button light"
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
              >
                OPEN LOCATION
                <span>↗</span>
              </a>

            </div>

            <div className="contact-details">

              <div>
                <span>LOCATION</span>
                <strong>
                  Sirdala Road,
                  <br />
                  Nawada, Bihar
                </strong>
              </div>

              <div>
                <span>PHONE</span>
                <strong>8434034498</strong>
              </div>

              <div>
                <span>AREA</span>
                <strong>
                  Nawada + Gaya
                  <br />
                  + Nearby Bihar
                </strong>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-brand">
          AYUSH
          <span>VIDEOGRAPHY</span>
        </div>

        <div className="footer-middle">
          YOUR MOMENTS.
          <br />
          OUR FOCUS.
        </div>

        <div className="footer-right">
          © 2025 AYUSH VIDEOGRAPHY
          <br />
          NAWADA, BIHAR
        </div>

      </footer>

      <a className="mobile-call" href={PHONE_LINK}>
        CALL AYUSH VIDEOGRAPHY • 8434034498
      </a>

    </div>
  );
}

export default App;