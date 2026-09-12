import "./App.css";

function App() {
  return (
    <div className="site">

      {/* ================= INTRO ================= */}
      <div className="intro-screen">
        <div className="intro-logo-camera">
          <div className="intro-lens">
            <div className="intro-lens-core"></div>
          </div>
        </div>

        <h2>AYUSH</h2>
        <p>VIDEOGRAPHY</p>
      </div>


      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <a href="#home" className="brand">
          <div className="brand-camera">
            <span></span>
          </div>

          <div>
            <strong>AYUSH</strong>
            <small>VIDEOGRAPHY</small>
          </div>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#showcase">Our Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#booking" className="nav-button">
          BOOK A SHOOT
        </a>

      </nav>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-background">
          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>
          <div className="grid-background"></div>
        </div>

        <div className="cinema-frame">

          <div className="frame-corner frame-tl"></div>
          <div className="frame-corner frame-tr"></div>
          <div className="frame-corner frame-bl"></div>
          <div className="frame-corner frame-br"></div>

          <div className="recording">
            <span></span> RECORDING
          </div>

          <div className="camera-settings">
            4K &nbsp; | &nbsp; 24FPS &nbsp; | &nbsp; CINEMATIC
          </div>

          <div className="hero-content">

            <div className="hero-camera">
              <div className="camera-top"></div>
              <div className="camera-box">
                <div className="camera-lens">
                  <div></div>
                </div>
              </div>
            </div>

            <p className="eyebrow">
              WEDDING • EVENTS • CINEMATIC FILMS
            </p>

            <h1>
              AYUSH
              <span>VIDEOGRAPHY</span>
            </h1>

            <div className="gold-line"></div>

            <h3>
              YOUR MOMENTS.
              <b> OUR FOCUS.</b>
            </h3>

            <p className="hero-description">
              We capture weddings, pre-weddings, birthdays and special
              events with a creative cinematic approach.
            </p>

            <div className="hero-buttons">
              <a href="#booking" className="gold-button">
                BOOK YOUR SHOOT <span>→</span>
              </a>

              <a href="#showcase" className="outline-button">
                VIEW OUR WORK
              </a>
            </div>

          </div>

        </div>

        <div className="scroll-indicator">
          <span>↓</span> SCROLL TO EXPLORE
        </div>

      </section>


      {/* ================= QUICK INFO ================= */}
      <section className="quick-info">

        <div>
          <strong>06+</strong>
          <span>CREATIVE SERVICES</span>
        </div>

        <div>
          <strong>4K</strong>
          <span>CINEMATIC QUALITY</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>FOCUS ON MOMENTS</span>
        </div>

        <div>
          <strong>BIHAR</strong>
          <span>BASED IN NAWADA</span>
        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about" id="about">

        <div className="about-graphic">

          <div className="graphic-ring ring-one"></div>
          <div className="graphic-ring ring-two"></div>
          <div className="graphic-ring ring-three"></div>

          <div className="graphic-camera">
            <div className="graphic-camera-lens"></div>
          </div>

          <div className="graphic-label">
            <span>AYUSH</span>
            <b>VISUAL STORIES</b>
          </div>

        </div>

        <div className="about-content">

          <p className="section-label">ABOUT US</p>

          <h2>
            WE DON'T JUST
            <br />
            <em>RECORD.</em>
            <br />
            WE TELL STORIES.
          </h2>

          <p>
            AYUSH VIDEOGRAPHY is a creative videography service based
            in Nawada, Bihar. We focus on turning important occasions
            into memorable cinematic stories.
          </p>

          <p>
            From the emotions of a wedding to the energy of a birthday
            celebration, our goal is to capture the details and moments
            that make your event special.
          </p>

          <div className="about-points">
            <span>✓ Cinematic Storytelling</span>
            <span>✓ Creative Camera Work</span>
            <span>✓ Professional Editing</span>
            <span>✓ Event-Focused Coverage</span>
          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="services" id="services">

        <div className="section-heading">
          <p className="section-label">WHAT WE OFFER</p>
          <h2>OUR SERVICES</h2>
          <p>
            Professional coverage designed for your special moments.
          </p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <span className="service-number">01</span>
            <div className="service-icon">♢</div>
            <h3>Wedding Shoot</h3>
            <p>
              Capture the emotions, traditions, celebrations and
              unforgettable moments of your wedding day.
            </p>
            <a href="#booking">BOOK SERVICE →</a>
          </div>

          <div className="service-card">
            <span className="service-number">02</span>
            <div className="service-icon">♡</div>
            <h3>Pre-Wedding</h3>
            <p>
              Creative cinematic coverage designed around your
              story and special connection.
            </p>
            <a href="#booking">BOOK SERVICE →</a>
          </div>

          <div className="service-card">
            <span className="service-number">03</span>
            <div className="service-icon">✦</div>
            <h3>Birthday Party</h3>
            <p>
              Preserve the excitement, smiles, decorations and
              memorable highlights of your celebration.
            </p>
            <a href="#booking">BOOK SERVICE →</a>
          </div>

          <div className="service-card">
            <span className="service-number">04</span>
            <div className="service-icon">▣</div>
            <h3>Event Coverage</h3>
            <p>
              Professional video coverage for functions,
              celebrations and important events.
            </p>
            <a href="#booking">BOOK SERVICE →</a>
          </div>

          <div className="service-card">
            <span className="service-number">05</span>
            <div className="service-icon">⌁</div>
            <h3>Drone Shoot</h3>
            <p>
              Aerial perspectives that add scale, movement and
              cinematic impact to your event film.
            </p>
            <a href="#booking">BOOK SERVICE →</a>
          </div>

          <div className="service-card">
            <span className="service-number">06</span>
            <div className="service-icon">▶</div>
            <h3>Editing & Cinematic Video</h3>
            <p>
              Creative editing, music, transitions and cinematic
              storytelling for your final video.
            </p>
            <a href="#booking">BOOK SERVICE →</a>
          </div>

        </div>

      </section>


      {/* ================= SHOWCASE ================= */}
      <section className="showcase" id="showcase">

        <div className="showcase-heading">

          <div>
            <p className="section-label">SELECTED WORK</p>

            <h2>
              OUR
              <br />
              <em>SHOWCASE.</em>
            </h2>
          </div>

          <p>
            A graphic preview of our visual style.
            Real project photographs can be added here later.
          </p>

        </div>


        <div className="showcase-grid">

          {/* CARD 1 */}
          <div className="showcase-card showcase-one">

            <div className="image-placeholder">

              <div className="wedding-symbol">
                ♢
              </div>

              <div className="light-ray"></div>

              <span className="fake-image-label">
                CINEMATIC FRAME
              </span>

            </div>

            <div className="showcase-caption">
              <span>01 / WEDDING</span>
              <h3>THE CELEBRATION</h3>
            </div>

          </div>


          {/* CARD 2 */}
          <div className="showcase-card showcase-two">

            <div className="image-placeholder">

              <div className="lens-art">
                <div></div>
              </div>

              <span className="fake-image-label">
                VISUAL STORY
              </span>

            </div>

            <div className="showcase-caption">
              <span>02 / PRE-WEDDING</span>
              <h3>THE STORY</h3>
            </div>

          </div>


          {/* CARD 3 */}
          <div className="showcase-card showcase-three">

            <div className="image-placeholder">

              <div className="drone-art">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="fake-image-label">
                AERIAL CINEMA
              </span>

            </div>

            <div className="showcase-caption">
              <span>03 / DRONE</span>
              <h3>FROM ABOVE</h3>
            </div>

          </div>

        </div>

        <div className="showcase-bottom">
          <span>AYUSH VIDEOGRAPHY</span>
          <p>CREATIVE • CINEMATIC • TIMELESS</p>
        </div>

      </section>


      {/* ================= PROCESS ================= */}
      <section className="process">

        <p className="section-label">HOW WE WORK</p>

        <h2>
          FROM CAMERA
          <br />
          TO <em>MEMORY.</em>
        </h2>

        <div className="process-grid">

          <div>
            <span>01</span>
            <div className="process-icon">◉</div>
            <h3>CAPTURE</h3>
            <p>
              We focus on the moments that matter.
            </p>
          </div>

          <div>
            <span>02</span>
            <div className="process-icon">✦</div>
            <h3>EDIT</h3>
            <p>
              We shape footage into a beautiful story.
            </p>
          </div>

          <div>
            <span>03</span>
            <div className="process-icon">▶</div>
            <h3>DELIVER</h3>
            <p>
              Your memories become cinematic films.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">

        <div className="contact-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            LET'S TALK
            <br />
            ABOUT YOUR <em>EVENT.</em>
          </h2>
        </div>

        <div className="contact-grid">

          <div className="contact-card">
            <span>PHONE</span>
            <h3>8434034498</h3>
            <a href="tel:8434034498">
              CALL NOW →
            </a>
          </div>

          <div className="contact-card">
            <span>LOCATION</span>
            <h3>Nawada, Bihar</h3>
            <p>
              Sirdala Road,
              <br />
              Nawada, Bihar, India
            </p>
          </div>

          <div className="contact-card">
            <span>BOOKING</span>
            <h3>Available for Events</h3>
            <p>
              Wedding • Pre-Wedding • Birthday • Events
            </p>
          </div>

        </div>

      </section>


      {/* ================= BOOKING ================= */}
      <section className="booking" id="booking">

        <div className="booking-lens">
          <div></div>
        </div>

        <p className="section-label">BOOK YOUR DATE</p>

        <h2>
          YOUR MOMENTS.
          <br />
          <em>OUR FOCUS.</em>
        </h2>

        <p className="booking-subtitle">
          Booking karne ke liye sampark kare
        </p>

        <a href="tel:8434034498" className="big-phone">
          ☎ &nbsp; 8434034498
        </a>

        <p className="booking-location">
          Sirdala Road, Nawada, Bihar
        </p>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-brand">

          <div className="brand-camera">
            <span></span>
          </div>

          <div>
            <strong>AYUSH</strong>
            <small>VIDEOGRAPHY</small>
          </div>

        </div>

        <p>
          YOUR MOMENTS. OUR FOCUS.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#showcase">Showcase</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-line"></div>

        <small>
          © 2026 AYUSH VIDEOGRAPHY • SIRDALA ROAD, NAWADA, BIHAR
        </small>

      </footer>

    </div>
  );
}

export default App;