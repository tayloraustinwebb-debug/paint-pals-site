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

  <header className="sticky top-0 z-40 border-b border-[#98BEDC]/20 bg-white/85 backdrop-blur-xl">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
    <a href="/">
      <img src="/logo.png" className="h-20 md:h-28 lg:h-32 w-auto" alt="Paint Pals" />
    </a>

    <div className="flex items-center gap-3">
      <a
        href="/"
        className="hidden rounded-xl border border-[#98BEDC]/60 bg-white px-5 py-3 text-sm font-semibold text-[#325B94] shadow-[0_6px_14px_rgba(50,91,148,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(50,91,148,0.14)] md:inline-flex"
      >
        Cabinet Refinishing
      </a>

      <a
        href="/carpentry"
        className="hidden rounded-xl bg-[#325B94] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(50,91,148,0.25)] transition-all duration-200 hover:scale-[1.03] md:inline-flex"
      >
        Carpentry
      </a>

      <a
        href="/#quote"
        className="hidden rounded-xl bg-[#325B94] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(50,91,148,0.25)] transition-all duration-200 hover:scale-[1.03] md:inline-flex"
      >
        Get Free Quote
      </a>

      <a
        href="https://clienthub.getjobber.com/client_hubs/0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea/login/new?source=share_login"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-xl border border-[#98BEDC]/60 bg-white px-5 py-3 text-sm font-semibold text-[#325B94] shadow-[0_6px_14px_rgba(50,91,148,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(50,91,148,0.14)]"
      >
        Client Portal
      </a>
    </div>
  </div>
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

       <footer className="border-t border-[#98BEDC]/25 bg-[#0f2747] text-white">
  <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
    <div>
      <img src="/logo.png" className="h-16 w-auto md:h-20" alt="Paint Pals" />
      <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
        Premium cabinet refinishing, cabinet painting, cabinet refacing, and custom carpentry services in Southern California. Factory-Style finshes and fast clean transformations.
      </p>
    </div>

    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CFE3F1]">
        Services
      </p>
      <div className="mt-4 grid gap-3 text-sm text-white/80">
        <a href="/" className="transition hover:text-white">
          Cabinet Refinishing
        </a>
        <a href="/" className="transition hover:text-white">
          Cabinet Painting
        </a>
        <a href="/" className="transition hover:text-white">
          Cabinet Refacing
        </a>
        <a href="/carpentry" className="transition hover:text-white">
          Carpentry
        </a>
        <a href="/carpentry" className="transition hover:text-white">
          Shiplap Fireplaces
        </a>
        <a href="/carpentry" className="transition hover:text-white">
          Accent Walls
        </a>
      </div>
    </div>

    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CFE3F1]">
        Contact
      </p>
      <div className="mt-4 grid gap-3 text-sm text-white/80">
        <a href="tel:+18402175750" className="transition hover:text-white">
          (840) 217-5750
        </a>

        <a href="mailto:Taylor@paint-pals.com" className="transition hover:text-white">
          Taylor@paint-pals.com
        </a>

        <a
          href="https://clienthub.getjobber.com/client_hubs/0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea/login/new?source=share_login"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          Client Portal
        </a>

        <p>Serving Riverside, San Bernardino, and Orange County</p>

        <a
          href="/#quote"
          className="inline-flex w-fit rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition hover:bg-white/15"
        >
          Get Free Quote
        </a>
      </div>
    </div>
  </div>

  <div className="border-t border-white/10">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Paint Pals. All rights reserved.</p>
      <div className="flex flex-wrap gap-3">
        <span>Licensed &amp; Insured</span>
        <span>•</span>
        <span>Serving Southern California</span>
      </div>
    </div>
  </div>
</footer>
    

      <style jsx>{`
        .carpentry-page {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #0f172a;
          background: #fff;
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
  display: flex;
  align-items: center;
  gap: 22px;
  background: white;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.035);
  overflow: visible;
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


        :global(.icon-line) {
  display: block !important;
  width: 58px !important;
  height: 58px !important;
  min-width: 58px !important;
  flex: 0 0 58px !important;
  fill: none !important;
  stroke: #0057b8 !important;
  color: #0057b8 !important;
  stroke-width: 2.4 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}

:global(.icon-line path),
:global(.icon-line rect),
:global(.icon-line line),
:global(.icon-line polyline),
:global(.icon-line circle) {
  fill: none !important;
  stroke: #0057b8 !important;
  stroke-width: 2.4 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}

        .button-icon {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          stroke-width: 2.2;
          fill: none;
        }

      :global(.tools-icon) {
  width: 82px !important;
  height: 82px !important;
  stroke: white !important;
  fill: none !important;
  stroke-width: 2.4 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}

:global(.tools-icon path) {
  stroke: white !important;
  fill: none !important;
}

:global(.icon-line) {
  width: 58px !important;
  height: 58px !important;
  stroke: #0057b8 !important;
  fill: none !important;
  stroke-width: 2.4 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}

:global(.icon-line path) {
  stroke: #0057b8 !important;
  fill: none !important;
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
      <path d="M12 48h40" />
      <path d="M17 48V25h30v23" />
      <path d="M14 25h36" />
      <path d="M20 19h24" />
      <path d="M27 43c-2-6 3-8 3-13 6 5 9 8 7 13" />
      <path d="M25 43h15" />
    </svg>
  );
}

function WallIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M15 12h34v40H15z" />
      <path d="M24 12v40" />
      <path d="M32 12v40" />
      <path d="M40 12v40" />
    </svg>
  );
}

function ShelfIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M20 10h24v44H20z" />
      <path d="M20 24h24" />
      <path d="M20 38h24" />
      <path d="M20 52h24" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M13 19h38" />
      <path d="M17 25h30" />
      <path d="M21 31h22" />
      <path d="M25 31v20" />
      <path d="M21 51h24" />
    </svg>
  );
}

function DoorIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M20 10h26v44H20z" />
      <path d="M28 18h11v28H28z" />
      <path d="M38 32h2" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg className="icon-line" viewBox="0 0 64 64" fill="none">
      <path d="M39 12l13 13-25 25-13-13z" />
      <path d="M17 39l-5 5c-3 3-3 7 0 10s7 3 10 0l5-5" />
      <path d="M35 16l13 13" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg className="tools-icon" viewBox="0 0 64 64" fill="none">
      <path d="M23 10l31 31-8 8-31-31z" />
      <path d="M44 10l10 10-32 32-10-10z" />
      <path d="M17 14l-7-7" />
      <path d="M50 14l7-7" />
    </svg>
  );
}
