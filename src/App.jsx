import { useEffect, useState } from "react";
import "./App.css";

const PHONE = "8434034498";
const PHONE_LINK = `tel:${PHONE}`;

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Sirdala+Road%2C+Nawada%2C+Bihar";

const services = [
  {
    number: "01",
    icon: "◉",
    title: "Wedding",
    text: "Complete wedding photography and cinematic videography for your most important day.",
  },
  {
    number: "02",
    icon: "✦",
    title: "Pre-Wedding",
    text: "Creative pre-wedding films and photography with a cinematic visual approach.",
  },
  {
    number: "03",
    icon: "○",
    title: "Birthday",
    text: "Capture birthdays, celebrations and special family moments with professional coverage.",
  },
  {
    number: "04",
    icon: "▣",
    title: "Events",
    text: "Professional photo and video coverage for events, functions and special occasions.",
  },
  {
    number: "05",
    icon: "△",
    title: "Drone",
    text: "Aerial cinematic shots that add scale, movement and a premium look to your film.",
  },
  {
    number: "06",
    icon: "▶",
    title: "Editing",
    text: "Cinematic editing, colour treatment, music sync and final video delivery.",
  },
];

const packages = [
  {
    name: "Essential",
    title: "Classic",
    price: "₹7,999",
    time: "UP TO 4 HOURS",
    features: [
      "Photography coverage",
      "Cinematic video coverage",
      "Professional editing",
      "Digital delivery",
      "Basic colour correction",
    ],
  },
  {
    name: "Signature",
    title: "Premium",
    price: "₹14,999",
    time: "UP TO 8 HOURS",
    featured: true,
    features: [
      "Photography + videography",
      "Cinematic highlight film",
      "Professional editing",
      "Colour grading",
      "Premium digital delivery",
      "Selected cinematic shots",
    ],
  },
  {
    name: "Cinematic",
    title: "Full Day",
    price: "₹24,999",
    time: "FULL DAY COVERAGE",
    features: [
      "Full-day photography",
      "Full-day videography",
      "Cinematic highlight film",
      "Advanced editing",
      "Professional colour grading",
      "Drone coverage where suitable",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Plan",
    text: "We understand your event, timing, location and coverage requirements.",
  },
  {
    number: "02",
    title: "Capture",
    text: "Our focus stays on authentic moments, details and cinematic frames.",
  },
  {
    number: "03",
    title: "Create",
    text: "Your footage is professionally selected, edited and colour-treated.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Your finished photographs and films are prepared for digital delivery.",
  },
];

function App() {
  const [introOpen, setIntroOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = introOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [introOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const enterStudio = () => {
    setIntroOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="app">
      {/* =====================================================
          WELCOME / CAMERA INTRO
      ====================================================== */}

      <div className={`intro ${introOpen ? "" : "intro-hidden"}`}>
        <div className="intro-noise"></div>

        <div className="intro-camera">
          <div className="lens-ring"></div>
          <div className="aperture"></div>
        </div>

        <div className="intro-content">
          <div className="intro-est">EST. 2025 • INDIA</div>

          <h1 className="intro-brand">AYUSH VIDEOGRAPHY</h1>

          <p className="intro-tagline">Your Moments. Our Focus.</p>

          <div className="intro-meta">
            <span>8434034498</span>
            <span>SIRDALA ROAD, NAWADA</span>
            <span>BIHAR</span>
          </div>

          <button className="enter-button" onClick={enterStudio}>
            ENTER STUDIO
          </button>
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a
            href="#home"
            className="nav-logo"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("home");
            }}
          >
            <span className="logo-mark"></span>
            <span>AYUSH VIDEOGRAPHY</span>
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>

            <a className="nav-call" href={PHONE_LINK}>
              CALL NOW
            </a>
          </nav>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <main>
        <section className="hero" id="home">
          <div className="hero-bg"></div>
          <div className="hero-grid"></div>
          <div className="hero-scan"></div>

          <div className="container">
            <div className="hero-content">
              <div className="hero-kicker">
                <span className="rec-dot"></span>
                <span>LIVE • CINEMATIC CAPTURE</span>
              </div>

              <h1 className="hero-title">
                YOUR
                <br />
                <span className="outline">MOMENTS.</span>
                <br />
                OUR FOCUS.
              </h1>

              <p className="hero-subtitle">
                Professional photography and cinematic videography for
                weddings, pre-weddings, birthdays, events and special
                celebrations across Nawada, Gaya and nearby Bihar.
              </p>

              <div className="hero-actions">
                <a className="btn btn-gold" href={PHONE_LINK}>
                  CALL 8434034498
                </a>

                <button
                  className="btn btn-outline"
                  onClick={() => scrollToSection("packages")}
                >
                  VIEW PACKAGES
                </button>

                <a
                  className="btn btn-outline"
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  LOCATION
                </a>
              </div>
            </div>
          </div>

          <div className="hero-camera">
            <div className="hud hud-top">
              ISO 400 • F/2.8 • 1/250
            </div>

            <div className="hud hud-bottom">
              REC • 4K • 24 FPS
            </div>

            <div className="camera-body">
              <div className="camera-label">AYUSH / CAMERA 01</div>
              <div className="camera-lens"></div>
            </div>

            <div className="focus-box"></div>
          </div>
        </section>

        {/* =====================================================
            TICKER
        ====================================================== */}

        <div className="ticker">
          <div className="ticker-track">
            <span>Wedding Films</span>
            <span>Pre-Wedding</span>
            <span>Photography</span>
            <span>Drone</span>
            <span>Events</span>
            <span>Editing</span>

            <span>Wedding Films</span>
            <span>Pre-Wedding</span>
            <span>Photography</span>
            <span>Drone</span>
            <span>Events</span>
            <span>Editing</span>
          </div>
        </div>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="section" id="services">
          <div className="container">
            <div className="eyebrow">WHAT WE CAPTURE</div>

            <h2 className="section-title">
              Built around
              <br />
              <span>your moments.</span>
            </h2>

            <p className="section-description">
              From intimate celebrations to large events, AYUSH VIDEOGRAPHY
              creates professional visual stories designed to preserve the
              atmosphere, emotion and details of your occasion.
            </p>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-number">{service.number}</div>

                  <div className="service-icon">{service.icon}</div>

                  <h3 className="service-title">{service.title}</h3>

                  <p className="service-text">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CINEMATIC BREAK
        ====================================================== */}

        <section className="cinematic-break">
          <div className="cinematic-ring"></div>

          <div className="cinematic-content">
            <div className="cinematic-small">
              FRAME • FOCUS • FEELING
            </div>

            <h2 className="cinematic-big">
              SHOOT
              <br />
              <span>THE</span>
              <br />
              STORY.
            </h2>
          </div>
        </section>

        {/* =====================================================
            PACKAGES
        ====================================================== */}

        <section className="section packages" id="packages">
          <div className="container">
            <div className="eyebrow">PACKAGES & PRICING</div>

            <h2 className="section-title">
              Choose your
              <br />
              <span>coverage.</span>
            </h2>

            <p className="section-description">
              Clear starting packages for different event sizes. Final pricing
              can be adjusted according to event requirements, location,
              duration and coverage.
            </p>

            <div className="package-grid">
              {packages.map((pkg) => (
                <article
                  className={`package-card ${
                    pkg.featured ? "featured" : ""
                  }`}
                  key={pkg.name}
                >
                  {pkg.featured && (
                    <div className="recommended">RECOMMENDED</div>
                  )}

                  <p className="package-name">{pkg.name}</p>

                  <h3 className="package-title">{pkg.title}</h3>

                  <p className="package-price">{pkg.price}</p>

                  <div className="package-time">{pkg.time}</div>

                  <ul className="package-list">
                    {pkg.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <a
                    className="btn btn-gold package-button"
                    href={PHONE_LINK}
                  >
                    BOOK THIS PACKAGE
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section className="section" id="about">
          <div className="container">
            <div className="about-layout">
              <div className="about-copy">
                <div className="eyebrow">ABOUT OUR COMPANY</div>

                <h2 className="section-title">
                  Visual stories
                  <br />
                  with <span>purpose.</span>
                </h2>

                <p>
                  AYUSH VIDEOGRAPHY is a photography and videography service
                  based in Nawada, Bihar. We focus on creating clean,
                  cinematic and meaningful visual memories for weddings,
                  celebrations, events and special occasions.
                </p>

                <p>
                  Established in 2025 in India, our work is built around
                  professional camera work, thoughtful composition,
                  cinematic editing and attention to the moments that matter.
                </p>

                <a className="btn btn-outline" href={PHONE_LINK}>
                  TALK TO US
                </a>
              </div>

              <div className="about-facts">
                <div className="fact">
                  <div className="fact-number">01</div>
                  <h3 className="fact-title">Established</h3>
                  <p className="fact-text">
                    Established in 2025 in India.
                  </p>
                </div>

                <div className="fact">
                  <div className="fact-number">02</div>
                  <h3 className="fact-title">Experience</h3>
                  <p className="fact-text">
                    2+ years of experience in the field.
                  </p>
                </div>

                <div className="fact">
                  <div className="fact-number">03</div>
                  <h3 className="fact-title">Location</h3>
                  <p className="fact-text">
                    Sirdala Road, Nawada, Bihar.
                  </p>
                </div>

                <div className="fact">
                  <div className="fact-number">04</div>
                  <h3 className="fact-title">Service Area</h3>
                  <p className="fact-text">
                    Nawada, Gaya and nearby Bihar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WORKFLOW
        ====================================================== */}

        <section className="section">
          <div className="container">
            <div className="eyebrow">OUR PROCESS</div>

            <h2 className="section-title">
              From idea
              <br />
              to <span>final frame.</span>
            </h2>

            <div className="workflow-grid">
              {workflow.map((step) => (
                <article className="workflow-step" key={step.number}>
                  <div className="workflow-number">{step.number}</div>

                  <h3 className="workflow-title">{step.title}</h3>

                  <p className="workflow-text">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE AREA
        ====================================================== */}

        <section className="section">
          <div className="container">
            <div className="area-box">
              <div className="eyebrow">WHERE WE WORK</div>

              <h2 className="area-title">
                Nawada.
                <br />
                Gaya.
                <br />
                <span>Bihar.</span>
              </h2>

              <div className="area-list">
                <span>NAWADA</span>
                <span>GAYA</span>
                <span>NEARBY BIHAR</span>
                <span>EVENT LOCATIONS</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section className="section" id="contact">
          <div className="container">
            <div className="contact-layout">
              <div>
                <div className="eyebrow">CONTACT AYUSH VIDEOGRAPHY</div>

                <h2 className="contact-title">
                  LET'S
                  <br />
                  <span>CREATE.</span>
                </h2>

                <div className="contact-buttons">
                  <a className="btn btn-gold" href={PHONE_LINK}>
                    CALL NOW
                  </a>

                  <a
                    className="btn btn-outline"
                    href={MAP_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    OPEN LOCATION
                  </a>
                </div>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-label">PHONE</div>

                  <a className="contact-value" href={PHONE_LINK}>
                    {PHONE}
                  </a>
                </div>

                <div className="contact-item">
                  <div className="contact-label">ADDRESS</div>

                  <div className="contact-value">
                    Sirdala Road,
                    <br />
                    Nawada, Bihar
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-label">SERVICE AREA</div>

                  <div className="contact-value">
                    Nawada + Gaya + nearby Bihar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">AYUSH VIDEOGRAPHY</div>

              <div className="footer-tagline">
                Your Moments. Our Focus.
              </div>
            </div>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#packages">Packages</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2025 AYUSH VIDEOGRAPHY</span>

            <span>SIRDALA ROAD • NAWADA • BIHAR</span>
          </div>
        </div>
      </footer>

      {/* =====================================================
          MOBILE CALL
      ====================================================== */}

      <a className="mobile-call" href={PHONE_LINK}>
        CALL AYUSH VIDEOGRAPHY • 8434034498
      </a>
    </div>
  );
}

export default App;