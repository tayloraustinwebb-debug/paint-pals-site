import Head from "next/head";

const services = [
  {
    title: "Shiplap Fireplaces",
    text: "Custom fireplace surrounds, shiplap walls, trim details, and clean finish work.",
    icon: FireplaceIcon,
  },
  {
    title: "Accent Walls",
    text: "Board and batten, wainscoting, feature walls, paneling, and modern trim designs.",
    icon: WallIcon,
  },
  {
    title: "Built-Ins & Storage",
    text: "Custom shelving, storage details, entertainment walls, and functional upgrades.",
    icon: ShelfIcon,
  },
  {
    title: "Crown & Base Molding",
    text: "Clean molding installs that add a finished, high-end look to your home.",
    icon: CrownIcon,
  },
  {
    title: "Interior Door Upgrades",
    text: "Door trim, casing, refinishing prep, and detail upgrades for a cleaner interior.",
    icon: DoorIcon,
  },
  {
    title: "Paint-Ready Finish Work",
    text: "Carpentry built with the final finish in mind for a smooth, professional result.",
    icon: BrushIcon,
  },
];

export default function CarpentryPage() {
  return (
    <>
      <Head>
        <title>Custom Carpentry in Southern California | Paint Pals</title>
        <meta
          name="description"
          content="Custom carpentry, shiplap fireplaces, accent walls, built-ins, trim work, and finish carpentry by Paint Pals."
        />
      </Head>

      <main className="carpentry-page">
        <header className="top-nav">
          <a href="/" className="brand">
            <span className="brand-mark">▰</span>
            <span>
              <strong>Paint Pals</strong>
              <small>RENO COMPANY INC.</small>
            </span>
          </a>

          <nav>
            <a href="/">Cabinet Refinishing</a>
            <a className="active" href="/carpentry">Carpentry</a>
            <a href="https://clienthub.getjobber.com/" target="_blank" rel="noreferrer">
              Client Portal
            </a>
          </nav>

          <a className="nav-cta" href="/#quote">Get Free Quote</a>
        </header>

        <section className="hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Custom Finish Carpentry</p>
            <h1>Carpentry Upgrades That Make Your Home Look Custom Built</h1>
            <p className="hero-text">
              From shiplap fireplaces and accent walls to trim, built-ins,
              molding, and custom wood details — Paint Pals helps homeowners
              create clean, high-end spaces with a finished look.
            </p>
            <a className="white-button" href="/#quote">
              <CalendarIcon /> Get Free Carpentry Quote
            </a>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <p className="eyebrow blue">Carpentry Services</p>
            <h2>Interior Carpentry &<br />Custom Home Features</h2>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div className="service-card" key={service.title}>
                    <Icon />
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="why-left">
            <p className="eyebrow blue">Why Paint Pals</p>
            <h2>Built Clean.<br />Finished Right.</h2>
            <p>
              We focus on clean lines, proper prep, tight details, and a final
              finish that looks intentional — not like a rushed handyman job.
            </p>
          </div>

          <div className="why-right">
            {[
              "Shiplap and fireplace builds",
              "Accent walls and wall treatments",
              "Trim, molding, casing, and detail work",
              "Paint-ready carpentry",
              "Cabinet-adjacent upgrades and custom features",
            ].map((item) => (
              <div className="check-row" key={item}>
                <span>✓</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="bottom-cta">
          <div className="cta-icon">
            <ToolsIcon />
          </div>

          <div>
            <h2>Ready to Upgrade Your Home?</h2>
            <p>Get a free quote for custom carpentry, trim, shiplap, or built-in work.</p>
            <a className="white-button small" href="/#quote">
              <CalendarIcon /> Get Free Quote
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">Paint Pals</div>
              <p>Cabinet refinishing, painting, and custom carpentry services in Southern California.</p>
            </div>

            <div>
              <h4>Services</h4>
              <a href="/">Cabinet Refinishing</a>
              <a href="/">Cabinet Painting</a>
              <a href="/">Cabinet Refacing</a>
              <a href="/carpentry">Carpentry</a>
              <a href="/carpentry">Shiplap Fireplaces</a>
              <a href="/carpentry">Accent Walls</a>
            </div>

            <div>
              <h4>Quick Links</h4>
              <a href="/#quote">Get Free Quote</a>
              <a href="/#process">Our Process</a>
              <a href="/#gallery">Before & After</a>
              <a href="/#reviews">Reviews</a>
              <a href="/#faq">FAQ</a>
            </div>

            <div>
              <h4>Service Area</h4>
              <p>Serving Southern California</p>
              <p>San Bernardino County</p>
              <p>Riverside County</p>
              <p>Los Angeles County</p>
              <p>Orange County</p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2025 Paint Pals Reno Company Inc. All rights reserved.</span>
            <span>License #1024092</span>
          </div>
        </footer>
      </main>

      <style jsx>{`
        .carpentry-page {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #0f172a;
          background: #fff;
        }

        .top-nav {
          height: 86px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          background: white;
          box-shadow: 0 2px 18px rgba(15, 23, 42, 0.08);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #0b55b5;
        }

        .brand-mark {
          font-size: 28px;
          transform: rotate(-25deg);
          display: inline-block;
        }

        .brand strong {
          display: block;
          font-size: 28px;
          line-height: 1;
        }

        .brand small {
          display: block;
          font-size: 11px;
          letter-spacing: 2px;
          color: #325b94;
          margin-top: 4px;
        }

        nav {
          display: flex;
          gap: 46px;
          align-items: center;
        }

        nav a {
          color: #111827;
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          padding: 34px 0;
          position: relative;
        }

        nav a.active {
          color: #0057b8;
        }

        nav a.active::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -1px;
          transform: translateX(-50%);
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-bottom: 7px solid #0057b8;
        }

        .nav-cta {
          background: #0057b8;
          color: white;
          text-decoration: none;
          padding: 16px 31px;
          border-radius: 6px;
          font-weight: 800;
          box-shadow: 0 8px 18px rgba(0, 87, 184, 0.22);
        }

        .hero {
          position: relative;
          min-height: 575px;
          background-image: url("/carpentry-hero.jpg");
          background-size: cover;
          background-position: center right;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 36, 75, 0.97) 0%,
            rgba(0, 48, 97, 0.92) 24%,
            rgba(0, 48, 97, 0.66) 43%,
            rgba(0, 48, 97, 0.18) 66%,
            rgba(0, 48, 97, 0.02) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 640px;
          max-width: 90%;
          padding: 88px 0 80px 7%;
          color: white;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: 15px;
          font-weight: 900;
          color: #1bb4ff;
          margin: 0 0 22px;
        }

        .eyebrow.blue {
          color: #0057b8;
        }

        h1 {
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1.08;
          letter-spacing: -0.045em;
          margin: 0;
          font-weight: 950;
        }

        .hero-text {
          font-size: 21px;
          line-height: 1.45;
          margin: 28px 0 30px;
          font-weight: 600;
          color: rgba(255,255,255,0.94);
        }

        .white-button {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          background: white;
          color: #003b7a;
          text-decoration: none;
          padding: 18px 28px;
          border-radius: 7px;
          font-size: 18px;
          font-weight: 900;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
        }

        .white-button.small {
          font-size: 16px;
          padding: 15px 26px;
          margin-top: 18px;
        }

        .container {
          width: 86%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-section {
          padding: 55px 0 55px;
          background: #fff;
        }

        .services-section h2,
        .why-section h2,
        .bottom-cta h2 {
          font-size: clamp(34px, 4vw, 46px);
          line-height: 1.08;
          letter-spacing: -0.04em;
          margin: 0;
          font-weight: 950;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 28px;
        }

        .service-card {
          min-height: 135px;
          border: 1px solid #d9dee7;
          border-radius: 8px;
          padding: 28px 26px;
          display: grid;
          grid-template-columns: 64px 1fr;
          align-items: center;
          gap: 22px;
          background: white;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.035);
        }

        .service-card h3 {
          margin: 0 0 9px;
          font-size: 18px;
          font-weight: 950;
        }

        .service-card p {
          margin: 0;
          font-size: 15px;
          line-height: 1.38;
          color: #111827;
        }

        .why-section {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }

        .why-left {
          padding: 68px 7%;
          background: white;
        }

        .why-left p:last-child {
          font-size: 18px;
          line-height: 1.48;
          color: #1f2937;
          max-width: 520px;
          margin-top: 25px;
        }

        .why-right {
          background: linear-gradient(135deg, #e8f5ff, #f7fbff);
          padding: 65px 8%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 22px;
        }

        .check-row {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 18px;
        }

        .check-row span {
          width: 25px;
          height: 25px;
          background: #0057b8;
          color: white;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 14px;
          flex: 0 0 auto;
        }

        .bottom-cta {
          background:
            linear-gradient(90deg, rgba(0, 69, 148, 0.96), rgba(0, 87, 184, 0.92)),
            url("/carpentry-hero.jpg");
          background-size: cover;
          background-position: center;
          color: white;
          padding: 45px 7%;
          display: grid;
          grid-template-columns: 230px 1fr;
          align-items: center;
          gap: 42px;
        }

        .cta-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid rgba(255,255,255,0.45);
          min-height: 120px;
        }

        .bottom-cta p {
          font-size: 18px;
          margin: 12px 0 0;
          color: #eef6ff;
        }

        .footer {
          background: linear-gradient(135deg, #002d4f, #003b66);
          color: white;
          padding: 36px 7% 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 52px;
        }

        .footer-brand {
          font-size: 30px;
          font-weight: 950;
          margin-bottom: 20px;
        }

        .footer h4 {
          text-transform: uppercase;
          font-size: 12px;
          margin: 0 0 18px;
        }

        .footer a,
        .footer p {
          display: block;
          color: white;
          text-decoration: none;
          font-size: 15px;
          margin: 0 0 10px;
          line-height: 1.4;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.2);
          margin-top: 35px;
          padding-top: 18px;
          font-size: 13px;
        }

        .icon-line {
          width: 58px;
          height: 58px;
          stroke: #0057b8;
          stroke-width: 2.4;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .button-icon {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          stroke-width: 2.2;
          fill: none;
        }

        .tools-icon {
          width: 78px;
          height: 78px;
          stroke: white;
          stroke-width: 2.2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @media (max-width: 900px) {
          .top-nav {
            height: auto;
            padding: 18px 5%;
            gap: 18px;
            flex-wrap: wrap;
          }

          nav {
            order: 3;
            width: 100%;
            justify-content: center;
            gap: 22px;
            flex-wrap: wrap;
          }

          nav a {
            padding: 8px 0;
          }

          .hero {
            min-height: 610px;
            background-position: center;
          }

          .hero-overlay {
            background: linear-gradient(90deg, rgba(0,36,75,0.96), rgba(0,48,97,0.78));
          }

          .hero-content {
            padding: 70px 5%;
          }

          .service-grid {
            grid-template-columns: 1fr;
          }

          .why-section {
            grid-template-columns: 1fr;
          }

          .bottom-cta {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .cta-icon {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.45);
            padding-bottom: 24px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 10px;
          }

          .service-card svg {
  width: 58px;
  height: 58px;
  fill: none !important;
  stroke: #0057b8 !important;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}

.service-card svg path,
.service-card svg rect,
.service-card svg line,
.service-card svg polyline,
.service-card svg circle {
  fill: none !important;
  stroke: #0057b8 !important;
}
        }
      `}</style>
    </>
  );
}

function CalendarIcon() {
  return (
    <svg className="button-icon" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function FireplaceIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M12 50h40M16 50V26h32v24M10 26h44M18 20h28" />
      <path d="M27 45c-3-5 2-8 2-12 5 4 8 7 8 12" />
      <path d="M24 45h16" />
    </svg>
  );
}

function WallIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M14 12h36v40H14zM23 12v40M32 12v40M41 12v40" />
    </svg>
  );
}

function ShelfIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M18 10h28v44H18zM18 23h28M18 36h28M18 49h28" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M12 18h40M16 23h32M20 28h24M24 28v22M20 50h24" />
      <path d="M24 34h16" />
    </svg>
  );
}

function DoorIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M20 10h28v44H20zM27 17h14v30H27zM39 32h2" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M40 12l12 12-24 24-12-12z" />
      <path d="M16 36l-5 5c-2 2-2 5 0 7s5 2 7 0l5-5" />
      <path d="M36 16l12 12" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg className="tools-icon" viewBox="0 0 64 64">
      <path d="M20 12l32 32-8 8-32-32z" />
      <path d="M44 12l8 8-32 32-8-8z" />
      <path d="M16 16l-6-6M48 16l6-6" />
    </svg>
  );
}
