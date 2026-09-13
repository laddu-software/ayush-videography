import { useMemo, useState } from "react";
import "./App.css";

const PHONE = "8434034498";
const PHONE_LINK = `tel:${PHONE}`;

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=SH+70%2C+Sirdalla%2C+Bihar+805127";

const socialLinks = {
  instagram: "#",
  facebook: "#",
  youtube: "#",
};

const services = [
  {
    number: "01",
    title: "Wedding",
    text: "Elegant photography and cinematic wedding films designed around your celebration.",
    icon: "rings",
  },
  {
    number: "02",
    title: "Pre-Wedding",
    text: "Creative couple-focused storytelling with locations, movement and cinematic frames.",
    icon: "spark",
  },
  {
    number: "03",
    title: "Birthday",
    text: "Bright event coverage for birthdays, family celebrations and special moments.",
    icon: "cake",
  },
  {
    number: "04",
    title: "Events",
    text: "Professional coverage for functions, gatherings, launches and local events.",
    icon: "event",
  },
  {
    number: "05",
    title: "Drone",
    text: "Aerial perspectives that add scale and cinematic movement to your event film.",
    icon: "drone",
  },
  {
    number: "06",
    title: "Editing",
    text: "Photo finishing, colour grading, reels and cinematic edits prepared for sharing.",
    icon: "edit",
  },
];

const packages = [
  {
    name: "Classic",
    price: 7999,
    label: "Essential coverage",
    features: ["Event photography", "Edited photo selection", "Basic video coverage"],
  },
  {
    name: "Premium",
    price: 14999,
    label: "Most selected",
    features: ["Photography + video", "Highlight film", "Social-ready reel"],
  },
  {
    name: "Cinematic",
    price: 24999,
    label: "Full storytelling",
    features: ["Extended coverage", "Cinematic film", "Advanced editing"],
  },
];

const packageSections = [
  {
    title: "Coverage & Time",
    items: [
      ["extra-hour", "Extra hour coverage", 1500],
      ["half-day", "Half-day coverage", 5000],
      ["full-day", "Full-day coverage", 9000],
      ["second-photo", "Second photographer", 3500],
      ["consultation", "Pre-event consultation", 500],
      ["night", "Night coverage", 2000],
    ],
  },
  {
    title: "Photography",
    items: [
      ["150-photos", "150 edited photos", 2500],
      ["300-photos", "300 edited photos", 4500],
      ["500-photos", "500 edited photos", 7000],
      ["family", "Family portrait session", 1500],
      ["couple", "Couple portrait session", 2000],
      ["instant", "Instant preview selection", 1000],
      ["print-ready", "Print-ready photo set", 1000],
    ],
  },
  {
    title: "Videography",
    items: [
      ["full-hd", "Full HD event film", 4000],
      ["4k-film", "4K event film", 7000],
      ["highlight", "Highlight film", 4500],
      ["ceremony", "Full ceremony film", 5000],
      ["live-clips", "Live event clips", 2500],
      ["social-reel", "Social media reel", 1500],
      ["same-day", "Same-day teaser", 2500],
    ],
  },
  {
    title: "Cinematic & Drone",
    items: [
      ["teaser", "30-second cinematic teaser", 1000],
      ["reel-60", "60-second cinematic reel", 1500],
      ["reel-90", "90-second cinematic reel", 2000],
      ["drone", "Drone coverage", 4000],
      ["aerial", "Aerial highlight", 2500],
      ["cinematic-intro", "Cinematic intro sequence", 2000],
    ],
  },
  {
    title: "Editing & Social",
    items: [
      ["slow-motion", "Slow-motion edit", 1500],
      ["motion-title", "Motion title graphics", 1000],
      ["colour", "Professional colour grading", 1500],
      ["retouching", "Photo retouching", 1500],
      ["advanced-edit", "Advanced video edit", 3000],
      ["social-pack", "Social media content pack", 2500],
    ],
  },
  {
    title: "Albums, Gifts & Delivery",
    items: [
      ["express", "Express delivery", 2500],
      ["photobook", "Premium photo book", 5000],
      ["usb", "Custom USB presentation box", 2000],
      ["gift", "Gift presentation box", 1500],
      ["prints", "Extra photo prints", 1000],
      ["gallery", "Online gallery setup", 1000],
    ],
  },
];

const portfolioCards = [
  {
    title: "Wedding Story",
    category: "PHOTOGRAPHY",
    visual: "wedding",
  },
  {
    title: "Event Motion",
    category: "VIDEOGRAPHY",
    visual: "event",
  },
  {
    title: "Aerial View",
    category: "DRONE",
    visual: "drone",
  },
  {
    title: "Reel Studio",
    category: "EDITING",
    visual: "reel",
  },
];

const faqs = [
  {
    q: "Are the prices fixed?",
    a: "The displayed prices are starting estimates. Final pricing can change according to event duration, location, coverage, crew requirements and selected options.",
  },
  {
    q: "Can I create a custom package?",
    a: "Yes. Choose the services you need in the Custom Package Builder. You can add or remove options and see the estimated total before calling.",
  },
  {
    q: "How do I select my event date?",
    a: "Choose your preferred date in the booking section or Custom Package Builder. The date is a request until availability is confirmed by the team.",
  },
  {
    q: "How do I book by phone?",
    a: "Select a package and date, then use Book Now. Your package summary is copied when supported and the phone dialer opens for a direct conversation.",
  },
  {
    q: "How can I reach the location by road?",
    a: "Use the Location button to open Google Maps for SH 70, Sirdalla, Bihar 805127.",
  },
  {
    q: "What services are available?",
    a: "AYUSH VIDEOGRAPHY provides wedding, pre-wedding, birthday, event, drone and editing services.",
  },
  {
    q: "Can I add or remove services?",
    a: "Yes. The custom builder allows you to add and remove individual services before preparing your booking call.",
  },
  {
    q: "Does selecting a date confirm my booking?",
    a: "No. Selecting a date creates a preferred-date request only. Final availability, scope and pricing are confirmed directly with AYUSH VIDEOGRAPHY.",
  },
];

function formatPrice(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function VisualArt({ type = "camera" }) {
  if (type === "camera") {
    return (
      <div className="art-camera">
        <div className="camera-body">
          <div className="camera-top" />
          <div className="camera-screen">
            <span>REC</span>
            <i />
          </div>
          <div className="camera-lens">
            <div className="lens-ring">
              <div className="lens-core" />
            </div>
          </div>
        </div>
        <div className="art-orb orb-one" />
        <div className="art-orb orb-two" />
        <div className="art-ring ring-one" />
      </div>
    );
  }

  if (type === "wedding") {
    return (
      <div className="abstract-art wedding-art">
        <span className="art-sun" />
        <span className="art-ring-large" />
        <span className="art-card" />
        <span className="art-dot dot-a" />
        <span className="art-dot dot-b" />
      </div>
    );
  }

  if (type === "event") {
    return (
      <div className="abstract-art event-art">
        <span className="stage" />
        <span className="light light-a" />
        <span className="light light-b" />
        <span className="light light-c" />
        <span className="event-bar" />
      </div>
    );
  }

  if (type === "drone") {
    return (
      <div className="abstract-art drone-art">
        <span className="drone-body" />
        <span className="drone-arm arm-a" />
        <span className="drone-arm arm-b" />
        <span className="drone-prop prop-a" />
        <span className="drone-prop prop-b" />
        <span className="drone-prop prop-c" />
        <span className="drone-prop prop-d" />
      </div>
    );
  }

  return (
    <div className="abstract-art reel-art">
      <span className="reel-screen" />
      <span className="reel-line line-a" />
      <span className="reel-line line-b" />
      <span className="reel-play">▶</span>
    </div>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [openFaq, setOpenFaq] = useState(0);
  const [callMessage, setCallMessage] = useState("");

  const allOptions = useMemo(
    () =>
      packageSections.flatMap((section) =>
        section.items.map(([id, name, price]) => ({
          id,
          name,
          price,
          section: section.title,
        }))
      ),
    []
  );

  const customTotal = useMemo(() => {
    const addOns = allOptions
      .filter((item) => selectedOptions.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);

    return 4999 + addOns;
  }, [allOptions, selectedOptions]);

  const toggleOption = (id) => {
    setSelectedOptions((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const buildSummary = (packageName, packagePrice) => {
    const dateText = selectedDate
      ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString("en-IN")
      : "Preferred date not selected";

    const selectedNames = allOptions
      .filter((item) => selectedOptions.includes(item.id))
      .map((item) => `• ${item.name} — ${formatPrice(item.price)}`)
      .join("\n");

    return `AYUSH VIDEOGRAPHY — BOOKING REQUEST

Package: ${packageName}
Preferred Date: ${dateText}
Estimated Price: ${formatPrice(packagePrice)}

Selected Add-ons:
${selectedNames || "• No additional options"}

Location:
SH 70, Sirdalla, Bihar 805127

Please confirm availability and final pricing by phone.`;
  };

  const callWithSummary = async (packageName, price) => {
    if (!selectedDate) {
      setCallMessage("Please select your preferred event date first.");
      document
        .getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const summary = buildSummary(packageName, price);

    try {
      await navigator.clipboard.writeText(summary);
      setCallMessage("Booking summary copied. Opening the call...");
    } catch {
      setCallMessage("Opening the call. Please mention your package and date.");
    }

    setTimeout(() => {
      window.location.href = PHONE_LINK;
    }, 450);
  };

  const handleCustomCall = () => {
    if (!selectedDate) {
      setCallMessage("Please select your preferred event date first.");
      document
        .getElementById("custom-package")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const selectedNames = allOptions
      .filter((item) => selectedOptions.includes(item.id))
      .map((item) => `• ${item.name} — ${formatPrice(item.price)}`)
      .join("\n");

    const dateText = new Date(`${selectedDate}T00:00:00`).toLocaleDateString(
      "en-IN"
    );

    const summary = `AYUSH VIDEOGRAPHY — CUSTOM PACKAGE REQUEST

Preferred Date: ${dateText}
Custom Package Base: ₹4,999
Estimated Total: ${formatPrice(customTotal)}

Selected Options:
${selectedNames || "• Base package only"}

Location:
SH 70, Sirdalla, Bihar 805127

Please confirm availability and final quote by phone.`;

    navigator.clipboard
      ?.writeText(summary)
      .catch(() => {});

    setCallMessage("Custom package summary copied. Opening the call...");

    setTimeout(() => {
      window.location.href = PHONE_LINK;
    }, 450);
  };

  if (!introDone) {
    return (
      <div className="intro-screen">
        <div className="intro-grid" />
        <div className="intro-glow intro-glow-a" />
        <div className="intro-glow intro-glow-b" />

        <div className="intro-frame">
          <div className="intro-status">
            <span className="rec-dot" />
            CAPTURE MODE
          </div>

          <div className="intro-focus">
            <span />
            <span />
            <span />
            <span />
            <div className="intro-focus-center">
              <VisualArt type="camera" />
            </div>
          </div>

          <div className="intro-copy">
            <span className="eyebrow">PHOTO • FILM • STORY</span>
            <h1>
              AYUSH
              <strong>VIDEOGRAPHY</strong>
            </h1>
            <p>Your Moments. Our Focus.</p>
          </div>

          <button
            className="intro-enter"
            onClick={() => setIntroDone(true)}
          >
            ENTER STUDIO <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">A</span>
          <span>
            <strong>AYUSH</strong>
            <small>VIDEOGRAPHY</small>
          </span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#custom-package">Custom</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-call" href={PHONE_LINK}>
          Call Now
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-pattern" />
        <div className="hero-left">
          <div className="hero-label">
            <span />
            PHOTOGRAPHY • VIDEOGRAPHY
          </div>

          <h1>
            Your Moments.
            <br />
            <em>Our Focus.</em>
          </h1>

          <p className="hero-description">
            Modern photography and cinematic videography for weddings,
            celebrations, events and stories worth remembering.
          </p>

          <div className="hero-actions">
            <a href="#booking" className="primary-button">
              Book Your Date <span>↗</span>
            </a>
            <a href="#portfolio" className="secondary-button">
              Explore Work
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN BIHAR</span>
            <span>•</span>
            <span>EST. 2025</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-label label-top">REC / 4K</div>
          <div className="hero-visual-label label-bottom">FOCUS 01</div>
          <VisualArt type="camera" />

          <div className="floating-card">
            <span>06</span>
            <div>
              <strong>Core Services</strong>
              <small>Photo • Film • Drone</small>
            </div>
          </div>
        </div>

        <div className="hero-scroll">SCROLL TO EXPLORE ↓</div>
      </section>

      <section className="brand-strip">
        <span>WEDDINGS</span>
        <i />
        <span>EVENTS</span>
        <i />
        <span>PORTRAITS</span>
        <i />
        <span>DRONE</span>
        <i />
        <span>REELS</span>
      </section>

      <section className="section about-section" id="about">
        <div className="section-label">01 / ABOUT US</div>

        <div className="about-grid">
          <div>
            <p className="mini-label">AYUSH VIDEOGRAPHY</p>
            <h2>
              We capture
              <br />
              <span>the feeling.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              AYUSH VIDEOGRAPHY is a photography and videography studio based
              in Bihar, focused on weddings, pre-weddings, birthdays, events,
              drone coverage and professional editing.
            </p>

            <p>
              Our approach combines clean photography, cinematic movement,
              thoughtful editing and a simple client experience.
            </p>

            <div className="about-labels">
              <span>EST. 2025</span>
              <span>BIHAR</span>
              <span>PHOTO + FILM</span>
              <span>2+ YEARS FIELD EXPERIENCE</span>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div>
            <strong>06</strong>
            <span>Core services</span>
          </div>
          <div>
            <strong>38+</strong>
            <span>Custom options</span>
          </div>
          <div>
            <strong>01</strong>
            <span>Direct booking line</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Client-focused process</span>
          </div>
        </div>
      </section>

      <section className="camera-story">
        <div className="camera-story-art">
          <div className="story-frame">
            <div className="story-rec">
              <span />
              REC
            </div>

            <div className="focus-box" />

            <div className="story-camera">
              <div className="story-camera-top" />
              <div className="story-camera-lens">
                <div />
              </div>
            </div>

            <div className="story-light light-one" />
            <div className="story-light light-two" />
          </div>
        </div>

        <div className="camera-story-copy">
          <span className="mini-label">OUR APPROACH</span>
          <h2>
            SEE IT.
            <br />
            <span>FEEL IT.</span>
            <br />
            KEEP IT.
          </h2>
          <p>
            Every event has its own rhythm. We build the visual story around
            the atmosphere, details and moments that make it yours.
          </p>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div>
            <div className="section-label">02 / SERVICES</div>
            <h2>Made for your moments.</h2>
          </div>
          <p>
            Choose one service or combine several into a custom package.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <div className={`service-icon icon-${service.icon}`}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section how-section">
        <div className="section-label">03 / HOW IT WORKS</div>
        <div className="section-heading simple-heading">
          <h2>Simple from start to finish.</h2>
          <p>Four clear steps. No complicated booking system.</p>
        </div>

        <div className="how-grid">
          <article className="how-card">
            <div className="how-art">
              <span className="calendar-art">01</span>
            </div>
            <span className="how-number">01</span>
            <h3>Choose your date</h3>
            <p>Select the preferred event date and tell us what you need.</p>
          </article>

          <article className="how-card">
            <div className="how-art">
              <span className="package-art">+</span>
              <i />
              <i />
            </div>
            <span className="how-number">02</span>
            <h3>Select your package</h3>
            <p>Pick a ready package or build your own custom combination.</p>
          </article>

          <article className="how-card">
            <div className="how-art">
              <span className="phone-art">☎</span>
              <i />
            </div>
            <span className="how-number">03</span>
            <h3>Call the team</h3>
            <p>Your booking summary is prepared for a direct phone discussion.</p>
          </article>

          <article className="how-card">
            <div className="how-art">
              <span className="check-art">✓</span>
              <i />
              <i />
            </div>
            <span className="how-number">04</span>
            <h3>Confirm the details</h3>
            <p>Availability, final scope and pricing are confirmed together.</p>
          </article>
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <div className="section-heading">
          <div>
            <div className="section-label">04 / PORTFOLIO</div>
            <h2>Visual stories.</h2>
          </div>
          <p>
            A clean visual showcase for your photography, films and creative
            work.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioCards.map((item, index) => (
            <article className={`portfolio-card portfolio-${index}`} key={item.title}>
              <VisualArt type={item.visual} />
              <div className="portfolio-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section packages-section" id="booking">
        <div className="section-label">05 / PACKAGES</div>

        <div className="booking-top">
          <div>
            <h2>Start with a package.</h2>
            <p>
              Choose your preferred date first, then select the package that
              fits your event.
            </p>
          </div>

          <div className="date-box">
            <label htmlFor="package-date">Preferred event date</label>
            <input
              id="package-date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        <div className="package-grid">
          {packages.map((pkg) => (
            <article
              className={`package-card ${
                pkg.name === "Premium" ? "featured-package" : ""
              }`}
              key={pkg.name}
            >
              <span className="package-label">{pkg.label}</span>
              <h3>{pkg.name}</h3>
              <div className="package-price">{formatPrice(pkg.price)}</div>

              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className="package-button"
                onClick={() => callWithSummary(pkg.name, pkg.price)}
              >
                Book Now →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="custom-section" id="custom-package">
        <div className="custom-header">
          <div>
            <div className="section-label">06 / CUSTOM PACKAGE</div>
            <h2>Build it your way.</h2>
            <p>
              Start from ₹4,999 and add only the services you actually need.
            </p>
          </div>

          <div className="custom-total">
            <span>Estimated total</span>
            <strong>{formatPrice(customTotal)}</strong>
          </div>
        </div>

        <div className="custom-date-row">
          <label htmlFor="custom-date">Preferred event date</label>
          <input
            id="custom-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="custom-builder">
          <div className="builder-options">
            {packageSections.map((section) => (
              <div className="builder-section" key={section.title}>
                <div className="builder-section-title">
                  <span>{section.title}</span>
                  <small>
                    {section.items.length} options
                  </small>
                </div>

                <div className="option-grid">
                  {section.items.map(([id, name, price]) => {
                    const selected = selectedOptions.includes(id);

                    return (
                      <button
                        className={`option-card ${selected ? "selected" : ""}`}
                        key={id}
                        onClick={() => toggleOption(id)}
                      >
                        <span className="option-check">
                          {selected ? "✓" : "+"}
                        </span>

                        <span className="option-info">
                          <strong>{name}</strong>
                          <small>{formatPrice(price)}</small>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <aside className="builder-summary">
            <div className="summary-sticky">
              <span className="summary-label">YOUR SELECTION</span>
              <h3>Custom Package</h3>

              <div className="summary-base">
                <span>Base package</span>
                <strong>₹4,999</strong>
              </div>

              <div className="summary-selected">
                {selectedOptions.length === 0 ? (
                  <p>Select options to build your package.</p>
                ) : (
                  allOptions
                    .filter((item) => selectedOptions.includes(item.id))
                    .map((item) => (
                      <div key={item.id}>
                        <span>{item.name}</span>
                        <strong>{formatPrice(item.price)}</strong>
                      </div>
                    ))
                )}
              </div>

              <div className="summary-total">
                <span>Total estimate</span>
                <strong>{formatPrice(customTotal)}</strong>
              </div>

              <button className="custom-call" onClick={handleCustomCall}>
                Call About This Package ↗
              </button>

              <small className="summary-note">
                Nothing is saved on the website. Your selected details are
                prepared temporarily for the phone conversation.
              </small>
            </div>
          </aside>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-label">07 / FAQ</div>

        <div className="faq-layout">
          <div>
            <h2>
              Questions,
              <br />
              answered.
            </h2>
            <p>
              Everything you need to know before contacting AYUSH VIDEOGRAPHY.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <button
                className={`faq-item ${openFaq === index ? "open" : ""}`}
                key={faq.q}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <div>
                  <span>0{index + 1}</span>
                  <strong>{faq.q}</strong>
                </div>
                <i>{openFaq === index ? "−" : "+"}</i>

                {openFaq === index && <p>{faq.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-visual">
          <VisualArt type="camera" />
        </div>

        <div className="contact-content">
          <span className="section-label">08 / CONTACT</span>
          <h2>
            Let's make
            <br />
            <span>something memorable.</span>
          </h2>

          <p>
            Tell us your date, event and coverage requirements. We will discuss
            availability and the right package with you.
          </p>

          <div className="contact-actions">
            <a className="primary-button" href={PHONE_LINK}>
              Call {PHONE} <span>↗</span>
            </a>

            <a
              className="secondary-button"
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Open Location
            </a>
          </div>

          <div className="contact-details">
            <div>
              <span>LOCATION</span>
              <strong>SH 70, Sirdalla, Bihar 805127</strong>
            </div>

            <div>
              <span>PHONE</span>
              <strong>{PHONE}</strong>
            </div>

            <div>
              <span>SERVICE AREA</span>
              <strong>Nawada • Gaya • Bihar</strong>
            </div>
          </div>

          <div className="social-links">
            <span>SOCIAL</span>

            <a href={socialLinks.instagram}>Instagram</a>
            <a href={socialLinks.facebook}>Facebook</a>
            <a href={socialLinks.youtube}>YouTube</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark">A</span>
          <div>
            <strong>AYUSH VIDEOGRAPHY</strong>
            <small>Your Moments. Our Focus.</small>
          </div>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#custom-package">Custom</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-copy">
          © 2025 AYUSH VIDEOGRAPHY. All rights reserved.
          <br />
          Prices are estimates and final availability/pricing is confirmed
          directly.
        </div>
      </footer>

      {callMessage && (
        <div className="call-notice">
          <span>✓</span>
          {callMessage}
          <button onClick={() => setCallMessage("")}>×</button>
        </div>
      )}

      <a className="mobile-call" href={PHONE_LINK}>
        Call AYUSH VIDEOGRAPHY
      </a>
    </main>
  );
}

export default App;