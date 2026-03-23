import React, { useEffect, useMemo, useState } from "react";

function SliderCard({ item, stagger = false }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX, rect) => {
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  };

  const handlePointerDown = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDragging(true);
    updatePosition(e.clientX, rect);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    updatePosition(e.clientX, rect);
  };

  const handlePointerUp = () => setDragging(false);

  return (
    <div className={stagger ? "lg:-mt-6" : ""}>
      <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.34)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#CFE3F1]">Before &amp; After</p>
            <h3 className="mt-1 text-base font-black text-white">{item.title}</h3>
          </div>
          <div className="rounded-full border border-[#98BEDC] bg-[#CFE3F1] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#325B94]">
            Drag
          </div>
        </div>

        <div
          className="relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden select-none touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <img
            src={item.after}
            alt={`${item.title} after`}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
            <img
              src={item.before}
              alt={`${item.title} before`}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 w-[3px] bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          />

          <div
            className="pointer-events-none absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#98BEDC] text-[10px] font-black uppercase tracking-[0.12em] text-[#325B94] shadow-xl"
            style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
          >
            ⇄
          </div>

          <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#325B94] shadow-lg">
            Before
          </div>
          <div className="absolute right-3 top-3 rounded-full bg-[#98BEDC] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#325B94] shadow-lg">
            After
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaintPalsWebsite() {
  const phone = "(840) 217-5750";
  const adsId = "AW-18032245507";

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__paintPalsGtagLoaded) return;

    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${adsId}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = window.gtag || gtag;
      gtag('js', new Date());
      gtag('config', '${adsId}');
    `;
    document.head.appendChild(script2);
    window.__paintPalsGtagLoaded = true;
  }, [adsId]);

  const trackQuote = () => {
    if (window.gtag) {
      window.gtag("event", "conversion", { send_to: `${AW-18032245507}/quote` });
    }
  };

  const trackCall = () => {
    if (window.gtag) {
      window.gtag("event", "conversion", { send_to: `${AW-18032245507}/call` });
    }
  };

  const beforeAfterPairs = useMemo(
    () => [
      {
        title: "Rancho Cucaumonga Cabinet Refinishing - Warm Wood to Soft Gray Blue",
        before: "/Before 1.jpg",
        after: "/After 1.jpeg",
      },
      {
        title: "Riverside County Kitchen Update - Old Stain to a Unique Yellow ",
        before: "/Before 2.jpg",
        after: "/After 2.jpeg",
      },
      {
        title: "San Bernadino County Cabinet Refresh - Light to Dark",
        before: "/Before 3.jpeg",
        after: "/After 3.jpeg",
      },
      {
        title: "Fontana Refinishing - Old and Dated to a Bright Modern White ",
        before: "/Before 4.JPG",
        after: "/After 7.jpg",
      },
    ],
    []
  );

  const services = [
    "Cabinet Refinishing",
    "Cabinet Painting",
    "Interior Painting",
    "Exterior Painting",
    "Residential Painting",
    "Commercial Painting",
  ];

  const areas = [
    "Fontana",
    "Rancho Cucamonga",
    "Ontario",
    "Upland",
    "Riverside",
    "Corona",
    "Eastvale",
    "Inland Empire",
    "Lake Elsinore",
    "San Bernardino",
    "Jurupa Valley",
    "Norco",
  ];

  const faqs = [
    {
      q: "Is cabinet refinishing cheaper than replacing cabinets?",
      a: "Yes. Cabinet refinishing is usually far more affordable than full cabinet replacement while still giving your kitchen a dramatic visual upgrade.",
    },
    {
      q: "Can I pick custom cabinet colors?",
      a: "Yes. Refinishing gives you far more flexibility than most stock cabinet options, so you can choose a finish that fits your home and style.",
    },
    {
      q: "How long does cabinet refinishing take?",
      a: "Most projects are much faster than a full replacement and are often completed in days instead of weeks.",
    },
    {
      q: "Do you offer free estimates?",
      a: "Yes. Paint Pals offers fast, no-pressure quotes for cabinet refinishing, cabinet painting, interior painting, exterior painting, and commercial painting projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#325B94] text-white">
<header className="sticky top-0 z-40 border-b border-white/10 bg-[#103985]/90 backdrop-blur">
  <div className="relative mx-auto flex max-w-7xl min-h-[72px] items-center justify-end px-4 py-3 md:px-6 md:py-4">
    <a href="#top" className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center">
      <img
        src="/logo.png"
        alt="Paint Pals logo"
        className="h-12 w-auto drop-shadow-[0_0_35px_rgba(152,190,220,0.9)] md:h-16"
      />
    </a>

    <nav className="hidden items-center gap-6 md:flex">
      <a href="#before-after" className="text-sm font-black text-[#E6F0F8] hover:text-white">
        Before &amp; After
      </a>
      <a href="#services" className="text-sm font-black text-[#E6F0F8] hover:text-white">
        Services
      </a>
      <a href="#areas" className="text-sm font-black text-[#E6F0F8] hover:text-white">
        Areas
      </a>
      <a
        href="#quote"
        onClick={trackQuote}
        className="rounded-2xl bg-[#98BEDC] px-5 py-3 text-sm font-black text-[#325B94] shadow-[0_0_0_4px_rgba(189,238,255,0.15),0_16px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5"
      >
        Get Free Quote
      </a>
    </nav>
  </div>
</header>

      <main id="top">
        <a
          href="tel:18402175750"
          onClick={trackCall}
          className="fixed bottom-5 left-5 z-50 rounded-full bg-[#98BEDC] px-5 py-3 text-sm font-black text-[#325B94] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
        >
          📞 Call Now
        </a>
        <a
          href="#quote"
          onClick={trackQuote}
          className="fixed bottom-5 right-5 z-50 rounded-full bg-white px-5 py-3 text-sm font-black text-[#325B94] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
        >
          Get Quote →
        </a>

        <section className="relative overflow-hidden px-4 pb-14 pt-10 md:px-6 md:pb-20 md:pt-14">
          <div className="absolute left-[-5rem] top-0 h-72 w-72 rounded-full bg-[#98BEDC]/20 blur-3xl" />
          <div className="absolute right-[-4rem] top-24 h-80 w-80 rounded-full bg-[#CFE3F1]/15 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#98BEDC] to-transparent opacity-70" />

          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#98BEDC]/45 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.26em] text-[#CFE3F1] shadow-[0_0_0_4px_rgba(189,238,255,0.08)]">
                ⚠️ Limited Availability This Month • Cabinet Refinishing Specialists
              </div>

              <div className="mt-4 inline-flex items-center rounded-full border border-[#98BEDC]/45 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#CFE3F1] shadow-[0_0_0_4px_rgba(189,238,255,0.08)]">
                Cabinet Refinishing • Interior • Exterior • Commercial
              </div>

              <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-[0_26px_70px_rgba(0,0,0,0.26)] backdrop-blur-sm md:p-6">
                <img
                  src="/logo.png"
                  alt="Paint Pals logo large"
                  className="mx-auto mb-6 w-full max-w-[420px] drop-shadow-[0_0_35px_rgba(152,190,220,0.9)]"
                />

                <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                  Save Thousands By Refinishing Your Cabinets Instead of Replacing Them
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E6F0F8]">
                  Paint Pals specializes in cabinet refinishing, cabinet painting, interior painting, exterior painting, and commercial painting across Southern California with a cleaner process, premium finishes, and eye-catching transformations.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#quote"
                    onClick={trackQuote}
                    className="rounded-2xl bg-[#98BEDC] px-6 py-4 text-center text-base font-black text-[#325B94] shadow-[0_0_0_4px_rgba(189,238,255,0.14),0_18px_40px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5"
                  >
                    Get Free Estimate
                  </a>
                  <a
                    href="tel:18402175750"
                    onClick={trackCall}
                    className="rounded-2xl border-2 border-[#98BEDC] bg-white/10 px-6 py-4 text-center text-base font-black text-white shadow-[0_0_0_4px_rgba(189,238,255,0.08)] transition hover:-translate-y-0.5"
                  >
                    Call {phone}
                  </a>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    "Save thousands vs cabinet replacement",
                    "Factory-style cabinet finishes",
                    "Custom colors for a modern look",
                    "Less mess and less disruption",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#274a78]/80 p-4 text-sm font-black text-[#E6F0F8] shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full bg-white px-4 py-2 text-xs font-black text-[#325B94] shadow">
                  ⭐ 5.0 Google
                </div>
                <div className="rounded-full bg-white px-4 py-2 text-xs font-black text-[#325B94] shadow">
                  Top Rated on Thumbtack
                </div>
              </div>  
                <div className="mt-4 rounded-xl bg-white p-3 shadow">
  <div
    dangerouslySetInnerHTML={{
      __html: `
      <div class="widget" id="tt-review-widget-star">
        <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg" style="height:20px;margin-bottom:4px;" />
        <a target="_blank" href="https://www.thumbtack.com/ca/fontana/kitchen-cabinet-painters/paint-pals/service/558939376023232529" style="font-weight:bold;color:#325B94;text-decoration:none;">
          <div>Paint Pals</div>
        </a>
        <div style="display:flex;align-items:center;gap:4px;">
          <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
          <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
          <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
          <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
          <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
          <span style="margin-left:6px;font-weight:bold;color:#325B94;">40 reviews</span>
        </div>
      </div>
      `,
    }}
  />
</div>
            

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_22px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                <div className="rounded-[1.7rem] bg-gradient-to-br from-[#274a78] via-[#325B94] to-[#98BEDC] p-8 text-white">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#DFF5FF]">
                    Why Homeowners Choose Paint Pals
                  </p>
                  <h2 className="mt-3 text-3xl font-black leading-tight">
                    A Smarter Alternative to Cabinet Replacement
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[#F3FBFF]">
                    Get a dramatic kitchen upgrade without the cost, demolition, and downtime of full cabinet replacement.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      "Lower cost",
                      "Custom colors",
                      "Faster turnaround",
                      "Like-new visual impact",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-black backdrop-blur-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#98BEDC]">Built to Pop</p>
                  <p className="mt-3 text-2xl font-black tracking-tight text-white">
                    Dark blue background, logo colors, brighter contrast
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#E6F0F8]">
                    This version leans into your darker logo palette so the page feels more branded and more eye-catching.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#98BEDC]">Real Project Photos</p>
                  <p className="mt-3 text-2xl font-black tracking-tight text-white">
                    Before &amp; after sliders built for visual selling
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#E6F0F8]">
                    The project cards below are designed to show transformation fast and hold attention from Google Ads visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-10 mb-6 px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#98BEDC]/40 bg-white px-6 py-5 text-center text-[#325B94] shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
            <p className="text-sm font-black uppercase tracking-[0.2em]">Ready to transform your kitchen?</p>
            <a
              href="#quote"
              onClick={trackQuote}
              className="mt-3 inline-block rounded-xl bg-[#98BEDC] px-6 py-3 text-sm font-black shadow"
            >
              Get My Free Quote →
            </a>
          </div>
        </section>

        <section id="before-after" className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#98BEDC]">
              Before &amp; After Cabinet Refinishing
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Real Paint Pals cabinet transformations
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#E6F0F8]">
              These project sliders show the value of cabinet refinishing fast, from dated wood tones to bright whites, bold dark finishes, and custom color makeovers.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {beforeAfterPairs.map((item, idx) => (
              <SliderCard key={item.title} item={item} stagger={idx % 2 === 0} />
            ))}
          </div>
        </section>

        <section id="services" className="bg-[#274a78] px-4 py-16 md:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#98BEDC]">
                Painting &amp; Refinishing Services
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                SEO-ready service sections built around what customers search for
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#E6F0F8]">
                This page is written around cabinet refinishing, cabinet painting, interior painting, exterior painting, residential painting, and commercial painting so it is stronger for both SEO and Google Ads relevance.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition hover:-translate-y-1"
                >
                  <div className="mb-5 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,#98BEDC,#325B94)] shadow-[0_10px_22px_rgba(0,0,0,0.22)]" />
                  <h3 className="text-xl font-black tracking-tight text-white">{service}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#E6F0F8]">
                    Professional {service.toLowerCase()} built around cleaner prep, better communication, and high-impact finished results.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-6 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#274a78] via-[#325B94] to-[#98BEDC] p-8 text-white shadow-[0_25px_65px_rgba(0,0,0,0.28)] md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#E6FAFF]">
                Why Replace When You Can Refinish?
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Bigger visual payoff. Less cost. Less disruption.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#F4FDFF]">
                Cabinet refinishing is one of the strongest value-driven services you can market because homeowners instantly understand the savings and the visual transformation.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Refinishing costs less than replacing cabinets",
                  "Custom finishes make kitchens feel brand new",
                  "Ideal for dated oak, dark stain, and worn finishes",
                  "Strong anchor offer for Google Ads and SEO",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-black backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_18px_55px_rgba(0,0,0,0.24)] md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#98BEDC]">FAQ Highlights</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                Answering the questions that stop people from booking
              </h2>
              <div className="mt-8 space-y-4">
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-2xl border border-white/10 bg-[#274a78]/70 p-4 text-sm font-black text-[#E6F0F8]"
                  >
                    <p className="text-white">{item.q}</p>
                    <p className="mt-2 font-medium text-[#E6F0F8]">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="areas" className="bg-[#274a78] px-4 py-16 md:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_18px_55px_rgba(0,0,0,0.24)] md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#98BEDC]">Service Areas</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                Built to rank better for local cabinet refinishing and painting searches
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#E6F0F8]">
                This section helps target local intent searches like cabinet refinishing in Fontana, cabinet painting in Rancho Cucamonga, interior painters in Riverside, and more.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-full border border-[#98BEDC]/45 bg-[#325B94] px-4 py-3 text-sm font-black text-[#E6F8FF] shadow-[0_0_0_4px_rgba(189,238,255,0.08)]"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="px-4 py-16 md:px-6 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#274a78] via-[#325B94] to-[#98BEDC] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#E6FAFF]">Free Estimate</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Get your free cabinet refinishing or painting quote
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#F3FDFF]">
                Put your Jobber request form here so leads go straight into your workflow. This should stay the main conversion point on the page.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Best fields: name, phone, email, city, service, project details",
                  "Strong CTA: Get My Free Quote",
                  "One form near top for ads, one here for long-scroll visitors",
                  "Connect GA4 tracking on the site side for stronger reporting",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-black backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

<div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.24)] md:p-8">
  <div className="flex min-h-[420px] items-center justify-center rounded-[1.5rem] border-2 border-dashed border-[#98BEDC]/55 bg-[#274a78]/70 p-10 text-center shadow-inner">
    <div>
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[#98BEDC]">
        Jobber Form Embed Area
      </p>
      <p className="mt-3 text-base leading-8 text-[#E6F0F8]">
        Replace this box with your embedded Jobber request form or quote form widget.
      </p>
    </div>
  </div>
</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#103985]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[#E6F0F8] md:px-6 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © 2026 Paint Pals • Cabinet Refinishing • Cabinet Painting • Interior Painting • Exterior Painting • Commercial Painting
          </p>
          <div className="flex gap-5">
            <a href="#before-after" className="font-black text-[#CFE3F1] hover:text-white">
              Before &amp; After
            </a>
            <a href="#quote" onClick={trackQuote} className="font-black text-[#CFE3F1] hover:text-white">
              Free Quote
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
