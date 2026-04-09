import React, { useEffect, useMemo, useRef, useState } from "react";

function SliderCard({ item, onOpen }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const update = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  };

  const handlePointerDown = (e) => {
    setIsDragging(false);
    update(e);
  };

  const handlePointerMove = (e) => {
    if (e.buttons === 1) {
      setIsDragging(true);
      update(e);
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) {
      onOpen(item);
    }
  };

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#98BEDC]/35 bg-gradient-to-br from-[#274a78] to-[#325B94] shadow-[0_20px_50px_rgba(50,91,148,0.14)] transition hover:-translate-y-1">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#183963] px-4 py-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#CFE3F1]">
            Before &amp; After
          </p>
          <h3 className="mt-1 text-sm font-black text-white md:text-base">{item.title}</h3>
        </div>
        <div className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#325B94]">
          Drag
        </div>
      </div>

      <div
  className="relative aspect-[4/3] cursor-ew-resize overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
  onPointerDown={handlePointerDown}
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerUp}
>
        <img
          src={item.after}
          alt={`${item.title} after`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div style={{ width: `${position}%` }} className="absolute inset-y-0 left-0 overflow-hidden">
          <img
            src={item.before}
            alt={`${item.title} before`}
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="absolute inset-y-0 w-[3px] bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]"
          style={{ left: `${position}%` }}
        />

        <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#325B94] shadow-lg">
          Before
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-[#98BEDC] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#325B94] shadow-lg">
          After
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="group hover-lift rounded-[1.5rem] border border-[#98BEDC]/40 bg-white p-6 shadow-[0_12px_30px_rgba(50,91,148,0.10)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(50,91,148,0.12)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#98BEDC,#325B94)] shadow-[0_0_18px_rgba(152,190,220,0.55)] transition group-hover:shadow-[0_0_28px_rgba(152,190,220,0.85)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-lg font-black tracking-tight text-[#103985] md:text-xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#496487]">{service.desc}</p>
    </div>
  );
}

function ReviewCard({ text, name }) {
  return (
    <div className="hover-lift-sm rounded-[1.25rem] border border-[#98BEDC]/40 bg-white p-5 shadow-[0_10px_25px_rgba(50,91,148,0.10)]">
      
      {/* Stars */}
      <div className="text-[#fbbc04] text-base tracking-wide">★★★★★</div>

      {/* Review Text */}
      <p className="mt-3 text-[15px] leading-8 text-[#2b4267] italic">
        “{text}”
      </p>

      {/* Name + Location */}
      <p className="mt-4 text-sm font-bold text-[#103985]">
        — {name}
      </p>

    </div>
  );
}

function ProcessCard({ step, title, desc }) {
  return (
    <div className="hover-lift-sm rounded-[1.25rem] border border-[#98BEDC]/40 bg-white p-5 shadow-[0_8px_20px_rgba(50,91,148,0.08)]">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#103985] text-sm font-black text-white">
        {step}
      </div>
      <h3 className="mt-4 text-lg font-black text-[#103985]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[#496487]">{desc}</p>
    </div>
  );
}

function CompareRow({ left, right }) {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-[#98BEDC]/20 bg-white">
      <div className="border-r border-[#98BEDC]/20 px-4 py-3 text-sm font-black text-[#103985]">{left}</div>
      <div className="px-4 py-3 text-sm font-black text-[#496487]">{right}</div>
    </div>
  );
}

function CostCalculator() {
  const [size, setSize] = useState("medium");
  const [upgrade, setUpgrade] = useState("standard");

  const ranges = {
    small: { standard: [2060, 3560], withGrainFill: [2660, 4680] },
    medium: { standard: [3560, 5340], withGrainFill: [4680, 7020] },
    large: { standard: [5340, 7260], withGrainFill: [7020, 9340] },
  };

  const [low, high] = ranges[size][upgrade];

  return (
    <div className="mt-8 rounded-[1.5rem] border border-[#98BEDC]/20 bg-[#f8fbff] p-6">
      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#325B94]">Instant Cost Calculator</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-black text-[#103985]">
          Kitchen Size
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="mt-2 w-full rounded-xl border border-[#98BEDC]/30 bg-white px-4 py-3 text-sm font-medium text-[#103985] outline-none"
          >
            <option value="small">Small Kitchen (10–20 doors & 5-8 drawers)</option>
<option value="medium">Medium Kitchen (20–30 doors & 8-12 drawers)</option>
<option value="large">Large Kitchen (30+ doors & 12+ drawers)</option>
          </select>
        </label>

        <label className="block text-sm font-black text-[#103985]">
          Finish Level
          <select
            value={upgrade}
            onChange={(e) => setUpgrade(e.target.value)}
            className="mt-2 w-full rounded-xl border border-[#98BEDC]/30 bg-white px-4 py-3 text-sm font-medium text-[#103985] outline-none"
          >
            <option value="standard">Premium Refinishing</option>
            <option value="withGrainFill"> Premium Refinishing with Oak Grain filling</option>
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-[1.25rem] bg-white px-5 py-5 shadow-[0_10px_24px_rgba(50,91,148,0.05)]">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#325B94]">Estimated Range</p>
        <p className="mt-2 text-3xl font-black text-[#103985]">${low.toLocaleString()} – ${high.toLocaleString()}</p>
        <p className="mt-3 text-sm leading-7 text-[#496487]">
          This is a ballpark estimate based on kitchen size and finish level. Final pricing depends on layout, door count, condition, and upgrades.
        </p>
      </div>
    </div>
  );
}

export default function PaintPalsWebsite() {
  const quoteConversionLabel = "";
  const formSubmitConversionLabel = "JgMwCLKukY0cEIP2uJZD";
  const jobberContainerId = "0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea-2068401";
  const jobberScriptRef = useRef(null);
const adsId = "AW-18032245507";
const ga4Id = "G-0WHMKY5P18";
const [hasTrackedFormSubmit, setHasTrackedFormSubmit] = useState(false);
const [jobberLoaded, setJobberLoaded] = useState(false);
const [quoteInView, setQuoteInView] = useState(false);
const [quoteFocused, setQuoteFocused] = useState(false);
const [activeSlide, setActiveSlide] = useState(null);

  useEffect(() => {
    document.title = "Paint Pals | Cabinet Refinishing";

    const addHeadLink = (rel, href, crossOrigin = false) => {
    if (document.head.querySelector(`link[rel="${rel}"][href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    if (crossOrigin) link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  };

  addHeadLink("preconnect", "https://clienthub.getjobber.com", true);
  addHeadLink("preconnect", "https://d3ey4dbjkt2f6s.cloudfront.net", true);
  addHeadLink("dns-prefetch", "https://clienthub.getjobber.com");
  addHeadLink("dns-prefetch", "https://d3ey4dbjkt2f6s.cloudfront.net");

    if (!window.gtag) {
      const script1 = document.createElement("script");
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());

  // GA4
  gtag('config', '${ga4Id}');

  // Google Ads
  gtag('config', '${adsId}');
`;
document.head.appendChild(script2);
    }
  }, [adsId, ga4Id]);

  useEffect(() => {
  let lastHeight = 0;
  let hasFired = false;

  const handleMessage = (event) => {
    if (event.origin !== "https://clienthub.getjobber.com") return;

  

    if (typeof event.data === "string" && event.data.includes("px")) {
      const height = parseInt(event.data.replace("px", ""), 10);

      if (!jobberLoaded) setJobberLoaded(true);

      if (!hasFired && height > 800 && lastHeight < 600) {
        hasFired = true;

        // GA4 event
        window.gtag('event', 'generate_lead', {
          event_category: 'Jobber Form',
          event_label: 'Work Request Submitted'
        });

        // Google Ads conversion
        window.gtag('event', 'conversion', {
          send_to: 'AW-18032245507/ohZbCOz8mJAcEIP2uJZD',
          value: 60.0,
          currency: 'USD'
        });

      
      }

      lastHeight = height;
    }
  };

  window.addEventListener("message", handleMessage);

  return () => {
    window.removeEventListener("message", handleMessage);
  };
}, [jobberLoaded]);

  useEffect(() => {
  const formTarget = document.getElementById(jobberContainerId);
  if (!formTarget) return;

  let lastScrollY = window.scrollY;

  const updateQuoteVisibility = () => {
    const rect = formTarget.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const scrollingDown = window.scrollY > lastScrollY;

    const formTop = rect.top;
    const formBottom = rect.bottom;

    let inView;

    if (scrollingDown) {
      // Hide later, once user is really entering the Jobber form
      inView =
        formTop < viewportHeight * 0.55 &&
        formBottom > viewportHeight * 0.25;
    } else {
      // Reappear as soon as the Jobber form is mostly cleared
      inView =
        formTop < viewportHeight * 0.85 &&
        formBottom > viewportHeight * 0.05;
    }

    setQuoteInView(inView);
    lastScrollY = window.scrollY;
  };

  updateQuoteVisibility();

  window.addEventListener("scroll", updateQuoteVisibility, { passive: true });
  window.addEventListener("resize", updateQuoteVisibility);

  return () => {
    window.removeEventListener("scroll", updateQuoteVisibility);
    window.removeEventListener("resize", updateQuoteVisibility);
  };
}, [jobberContainerId]);

  useEffect(() => {
    if (document.querySelector(`[data-jobber]`)) return;

    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.async = true;
    script.setAttribute("clienthub_id", jobberContainerId);
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea/public/work_request/embedded_work_request_form?form_id=2068401"
    );
    script.setAttribute("data-jobber", "true");
    document.body.appendChild(script);
    jobberScriptRef.current = script;
  }, [jobberContainerId]);

  const sendGtagEvent = (eventName, params = {}) => {
    if (!window.gtag) return;
    window.gtag("event", eventName, params);
  };

  const trackQuoteClick = () => {
    sendGtagEvent("quote_button_click", {
      event_category: "engagement",
      event_label: "quote_cta",
    });

    if (quoteConversionLabel) {
      sendGtagEvent("conversion", { send_to: `${adsId}/${quoteConversionLabel}` });
    }
  };

  const trackPortalClick = () => {
    sendGtagEvent("client_portal_click", {
      event_category: "engagement",
      event_label: "client_portal",
    });
  };

  const trackFormSubmit = () => {
    if (hasTrackedFormSubmit) return;

    sendGtagEvent("jobber_form_submit", {
      event_category: "lead",
      event_label: "jobber_embed",
    });

    if (formSubmitConversionLabel) {
  sendGtagEvent("conversion", {
    send_to: `${adsId}/${formSubmitConversionLabel}`,
    value: 1.0,
    currency: "USD",
  });

      window.gtag("event", "generate_lead");
      
}

    setHasTrackedFormSubmit(true);
  };

  useEffect(() => {
    const container = document.getElementById(jobberContainerId);
    if (!container) return;

    const checkForSuccessState = () => {
      const text = (container.textContent || "").toLowerCase();
      if (
        text.includes("thank you") ||
        text.includes("request received") ||
        text.includes("submission received") ||
        text.includes("success")
      ) {
        trackFormSubmit();
      }
    };

    const observer = new MutationObserver(() => {
      checkForSuccessState();
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    const handleClick = (e) => {
  const target = e.target;

  if (
    target.tagName === "BUTTON" ||
    target.innerText?.toLowerCase().includes("submit")
  ) {
    setTimeout(() => {
      trackFormSubmit();
    }, 2000);
  }
};

container.addEventListener("click", handleClick);

    const handleMessage = (event) => {
      try {
        const raw = typeof event.data === "string" ? event.data : JSON.stringify(event.data);
        const data = (raw || "").toLowerCase();
        if (data.includes("jobber") && (data.includes("submit") || data.includes("success") || data.includes("thank"))) {
          trackFormSubmit();
        }
      } catch (err) {
        // ignore non-serializable postMessage payloads
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
  observer.disconnect();
  container.removeEventListener("click", handleClick);
      window.removeEventListener("message", handleMessage);
};
  }, [jobberContainerId, hasTrackedFormSubmit]);

  const beforeAfterPairs = useMemo(
    () => [
      { title: "Boring Stain to Daring Blue", before: "/Before 1.jpg", after: "/After 1.jpeg" },
      { title: "Old and Outdated to Bright and Airy", before: "/Before 2.jpg", after: "/After 2.jpeg" },
      { title: "From Light to the Dark Side", before: "/Before 3.jpeg", after: "/After 3.png" },
      { title: "Damaged and Worn to Factory New", before: "/Before 4.jpg", after: "/After 7.png" },
    ],
    []
  );

  const services = [
    {
      title: "Cabinet Refinishing",
      desc: "Transform existing cabinets with a factory-style finish that saves thousands versus replacing them.",
    },
    {
      title: "Cabinet Refacing",
      desc: "Update doors and drawer fronts while keeping your existing layout for a fresh, modern look.",
    },
    {
      title: "Cabinet Upgrades",
      desc: "Improve your kitchen with new hardware, soft-close options, and upgraded details that change the feel of the space.",
    },
  ];

  const reviews = [
  {
    text: "Paint Pals refinished our cabinets in just 4 days and saved us about $12,000 compared to replacing. The finish looks completely factory-new — you’d never know they were the same cabinets.",
    name: "Mike T., Rancho Cucamonga",
  },
  {
    text: "The process was insanely clean and fast. They protected everything and the final finish looks like it came straight from a showroom.",
    name: "Sarah L., Riverside",
  },
  {
    text: "We were quoted over $20k for new cabinets. Paint Pals gave us the exact look we wanted for a fraction of the cost. Couldn’t be happier.",
    name: "Daniel R., Ontario",
  },
];

  const areas = [
    "Fontana",
    "Rancho Cucamonga",
    "Riverside",
    "Jurupa Valley",
    "Ontario",
    "Upland",
    "Corona",
    "Chino Hills",
    "Norco",
    "Murrieta",
    "Temecula",
    "San Bernardino",
    "Lake Elsinore",
    "Irvine",
    "Tustin",
    "Lake Forest",
    "and more...",
  ];

  return (
    <div className="min-h-screen bg-[#f4f8fc] text-black">
      <div className="bg-[radial-gradient(circle_at_top_left,rgba(152,190,220,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(50,91,148,0.12),transparent_24%)]">
        <header className="sticky top-0 z-40 border-b border-[#98BEDC]/20 bg-white/85 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <img src="/logo.png" className="h-20 md:h-28 lg:h-32 w-auto" alt="Paint Pals" />
            <div className="flex items-center gap-3">
              <a
                href="#quote"
                onClick={(e) => {
  e.preventDefault();
  trackQuoteClick(e);

  const isMobile = window.innerWidth < 768;
  const quoteCard = document.getElementById("quote");

  if (quoteCard) {
    const cardTop = quoteCard.getBoundingClientRect().top + window.pageYOffset;

    const y = isMobile
      ? cardTop + 190
      : cardTop - 24;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }

  setTimeout(() => {
    setQuoteFocused(true);
  }, 350);

  setTimeout(() => {
    setQuoteFocused(false);
  }, 1500);
}}
                className="hover-lift hidden rounded-xl bg-[#325B94] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(50,91,148,0.25)] transition-all duration-200 hover:scale-[1.03] md:inline-flex"
              >
                Get Free Quote
              </a>
              <a
  href="https://clienthub.getjobber.com/client_hubs/0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea/login/new?source=share_login"
  target="_blank"
  onClick={trackPortalClick}
  rel="noopener noreferrer"
  className="inline-flex items-center rounded-xl border border-[#98BEDC]/60 bg-white px-5 py-3 text-sm font-semibold text-[#325B94] shadow-[0_6px_14px_rgba(50,91,148,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(50,91,148,0.14)]"
>
  Client Portal
</a>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-4 py-6 md:py-8">
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-[2rem] border border-[#98BEDC]/40 bg-white px-6 py-6 text-sm font-black text-[#103985] shadow-[0_14px_40px_rgba(50,91,148,0.08)]">
            <div>⭐ 5-Star Rated</div>
            <div>✔ Licensed &amp; Insured</div>
            <div>✔ Hundreds of Cabinets Completed</div>
            <div>✔ Free Estimates</div>
            <div>✔ Local SoCal Specialists</div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-[#98BEDC]/30 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#325B94] shadow-[0_4px_12px_rgba(50,91,148,0.08)]">
                Premium 2K Imported Cabinet Finishes
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-[#103985] md:text-6xl">
                Transform Your Cabinets. Save Thousands.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#496487]">
                Cabinet refinishing, cabinet painting, and cabinet refacing in Southern California that gives your kitchen a brand-new look without the high cost of cabinet replacement.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                <a
  href="#quote"
  onClick={trackQuoteClick}
  className="hover-lift inline-flex items-center justify-center rounded-2xl bg-[#325B94] px-7 py-4 text-base font-bold text-white shadow-[0_20px_50px_rgba(50,91,148,0.22)] transition-all duration-200 hover:scale-[1.02]"
>
  Get Free Quote
</a>
                <div className="inline-flex items-center justify-center rounded-2xl border border-[#98BEDC]/30 bg-white px-5 py-3 text-sm font-semibold text-[#103985] shadow-[0_6px_14px_rgba(50,91,148,0.08)]">
                  ✔ Factory-style, ultra-durable finish
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#98BEDC]/30 bg-gradient-to-br from-[#17345f] via-[#274a78] to-[#325B94] p-3 md:p-4 text-white shadow-[0_26px_60px_rgba(50,91,148,0.24)] max-w-[420px] md:max-w-[460px] mx-auto">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 pt-0 pb-0 px-4 md:pt-0 md:pb-1 md:px-5 backdrop-blur-sm overflow-visible">
          <div className="flex justify-center mt-0 md:mt-1 mb-0">
  <img
    src="/Logo2.png"
    className="w-[125%] md:w-[140%] max-w-[480px] md:max-w-[560px] h-auto object-contain"
    style={{ filter: "drop-shadow(0 15px 40px rgba(152,190,220,0.45))" }}
    alt="Paint Pals Logo"
  />
</div>
                <div className="mt-2 md:mt-3 grid gap-2">
                  {[
                    "Save thousands vs replacement",
                    "Custom cabinet colors",
                    "Highest quality materials and finishes",
                    "Fast, clean transformations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

        <section className="mx-auto max-w-6xl px-4 py-14">
  <div className="flex flex-col gap-5">
    
    <div className="inline-flex w-fit items-center justify-center gap-3 rounded-xl border border-[#98BEDC]/40 bg-white px-5 py-3 shadow-[0_8px_20px_rgba(50,91,148,0.08)]">
      <span className="text-[#fbbc04] text-lg">★★★★★</span>
      <span className="text-sm font-black text-[#103985]">
        5★ Rated on Google
      </span>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {reviews.map((r, i) => (
        <ReviewCard key={i} text={r.text} name={r.name} />
      ))}
    </div>

    <div className="hover-lift-sm h-fit rounded-xl border border-[#98BEDC]/40 bg-white p-3 shadow-[0_8px_20px_rgba(50,91,148,0.08)]">
      <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#325B94]">
        Thumbtack Reviews
      </div>
      <div className="mt-2 rounded-lg border border-[#98BEDC]/40 bg-[#f7fbff] p-3">
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
    </div>

  </div>
</section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#325B94]">Visual Proof</p>
            <h2 className="mt-2 text-3xl font-black text-[#103985] md:text-4xl">
              Before &amp; After Cabinet Transformations
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
  {beforeAfterPairs.map((item) => (
    <SliderCard key={item.title} item={item} onOpen={setActiveSlide} />
  ))}
</div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-[2rem] bg-[#103985] px-6 py-8 text-white shadow-[0_24px_60px_rgba(50,91,148,0.22)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CFE3F1]">Services</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Cabinet Services That Actually Move the Needle
              </h2>
            </div>
            <p className="max-w-xl text-white/80">
              Focused, high-value services built to give kitchens a dramatic upgrade without full replacement costs.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#325B94]">Our Process</p>
            <h2 className="mt-2 text-3xl font-black text-[#103985] md:text-4xl">
              How Paint Pals Refinishes Cabinets
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ProcessCard
            step="1"
            title="Clean & Prep"
            desc="We protect your space, degrease surfaces, and prep cabinets for adhesion and durability."
          />
          <ProcessCard
            step="2"
            title="Sand & Repair"
            desc="We smooth surfaces, handle minor repairs, and get everything ready for a high-end finish."
          />
          <ProcessCard
            step="3"
            title="Prime & Spray"
            desc="We apply professional primer and premium 2K coatings for a factory-style result."
          />
          <ProcessCard
            step="4"
            title="Reinstall & Detail"
            desc="We reinstall doors and hardware, then review the project for a clean final look."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-[#98BEDC]/40 bg-gradient-to-br from-[#274a78] to-[#325B94] p-8 text-white shadow-[0_20px_55px_rgba(50,91,148,0.20)]">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#CFE3F1]">Why It Works</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">One of the Best Value Upgrades You Can Make</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/85">
            Cabinet refinishing gives your kitchen a brand-new look without the high cost of replacement. It is one of the fastest, highest-impact ways to transform your home.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#98BEDC]/40 bg-white p-8 shadow-[0_18px_50px_rgba(50,91,148,0.08)]">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#325B94]">Refinish vs Replace</p>
          <h2 className="mt-3 text-3xl font-black text-[#103985] md:text-4xl">The Smarter Cabinet Upgrade</h2>
          <div className="mt-6 space-y-3">
            <CompareRow left="Save thousands compared to replacement" right="Full replacement usually costs 5 to 10 times more" />
            <CompareRow left="Custom colors and factory-style finishes" right="Stock replacement options are often limited" />
            <CompareRow left="Faster turnaround" right="Full remodels can drag on for weeks" />
            <CompareRow left="Less mess and disruption" right="Replacement often means more demo and downtime" />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(152,190,220,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(50,91,148,0.10),transparent_40%)]" />
        <div className="hover-lift rounded-[2rem] border border-[#98BEDC]/40 bg-white p-8 shadow-[0_20px_50px_rgba(50,91,148,0.14)]">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#325B94]">Pricing</p>
          <h2 className="mt-2 text-3xl font-black text-[#103985] md:text-4xl">How Much Does Cabinet Refinishing Cost?</h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#496487]">
            Most cabinet refinishing projects range between <span className="font-black text-[#103985]">$2,000 – $8,000</span> depending on kitchen size, layout, and finish level. Refinishing typically saves homeowners <span className="font-black text-[#103985]">60–70% compared to full cabinet replacement</span>.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Lower cost than replacing cabinets",
              "Faster turnaround time",
              "Custom color options",
              "Factory-style 2K finishes",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#98BEDC]/20 bg-[#f8fbff] px-4 py-3 text-sm font-black text-[#103985]"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <CostCalculator />
        </div>
      </section>

    

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-[2rem] border border-[#98BEDC]/40 bg-white p-8 shadow-[0_12px_30px_rgba(50,91,148,0.10)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#325B94]">Areas We Serve</p>
              <h2 className="mt-2 text-3xl font-black text-[#103985] md:text-4xl">
                Cabinet Refinishing Across Southern California
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#496487]">
              Serving homeowners in Riverside County, San Bernadino County, & Orange County.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-full border border-[#98BEDC]/40 bg-[#f8fbff] px-4 py-3 text-sm font-black text-[#103985]"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-[2rem] border border-[#98BEDC]/40 bg-white p-8 shadow-[0_12px_30px_rgba(50,91,148,0.10)]">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#325B94]">Common Questions</p>
          <h2 className="mt-3 text-3xl font-black text-[#103985] md:text-4xl">FAQ</h2>
          <div className="mt-6 grid gap-4 text-sm text-[#496487] md:grid-cols-2">
            <div className="hover-lift-sm rounded-xl border border-[#98BEDC]/30 bg-[#f8fbff] p-4">
              <p className="font-black text-[#103985]">Is cabinet refinishing cheaper than replacing?</p>
              <p className="mt-2">Yes — most homeowners save thousands compared to full cabinet replacement while still getting a completely updated look.</p>
            </div>
            <div className="hover-lift-sm rounded-xl border border-[#98BEDC]/30 bg-[#f8fbff] p-4">
              <p className="font-black text-[#103985]">How long does cabinet refinishing take?</p>
              <p className="mt-2">Most projects are completed in just a few days, much faster than a full remodel.</p>
            </div>
            <div className="hover-lift-sm rounded-xl border border-[#98BEDC]/30 bg-[#f8fbff] p-4">
              <p className="font-black text-[#103985]">Can I choose any color?</p>
              <p className="mt-2">Yes — refinishing allows for custom colors and modern finishes not available with most stock cabinets.</p>
            </div>
            <div className="hover-lift-sm rounded-xl border border-[#98BEDC]/30 bg-[#f8fbff] p-4">
              <p className="font-black text-[#103985]">Are the finishes durable?</p>
              <p className="mt-2">We use professional-grade coatings designed for cabinets that are built to last and resist wear.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="relative mx-auto max-w-6xl px-4 py-14">
  <div className="grid items-start gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">


          <div className="rounded-[2rem] bg-gradient-to-br from-[#17345f] via-[#274a78] to-[#325B94] p-8 text-white shadow-[0_24px_60px_rgba(50,91,148,0.20)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CFE3F1]">Free Estimate</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Get Pricing, Timeline, and Next Steps</h2>
            <p className="mt-5 leading-8 text-white/85">
              Fill out the form and we’ll contact you with pricing and details.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Free Estimates",
                "Save Thousands vs Replacing",
                "Factory-Style 2K Finishes",
                "Fast Turnaround",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div>
  <div
    id="quote"
    className={`jobber-shell scroll-mt-16 md:scroll-mt-24 hover-lift w-full flex justify-center overflow-hidden rounded-[2rem] border border-[#98BEDC]/40 bg-white shadow-[0_20px_55px_rgba(50,91,148,0.10)] transition-all duration-500 ease-out ${
      quoteFocused
        ? "ring-4 ring-[#98BEDC]/60 shadow-[0_0_40px_rgba(50,91,148,0.25)] scale-[1.01] -translate-y-1"
        : "scale-100 translate-y-0"
    }`}
  >
    <div className="border-b border-[#98BEDC]/20 px-4 py-3 text-sm font-black uppercase tracking-[0.2em] text-[#325B94]">
      Quote Request Form
    </div>

    <div className="relative min-h-[720px] w-full">
      {!jobberLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-b-[2rem] bg-white overflow-hidden transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EAF3FF] via-white to-[#EAF3FF] animate-pulse opacity-70"></div>

          <div className="relative z-10 flex flex-col items-center gap-5">
            <div className="relative">
              <div className="h-12 w-12 rounded-full border-4 border-[#98BEDC]/30 border-t-[#325B94] animate-spin"></div>
              <div className="absolute inset-0 rounded-full blur-md bg-[#325B94]/20"></div>
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold text-[#325B94] tracking-wide">
                Preparing your quote form...
              </p>
              <p className="text-xs text-[#496487]/80 mt-1">
                This usually takes just a second.
              </p>
            </div>

            <div className="w-[85%] max-w-md space-y-3 mt-2">
              <div className="h-10 rounded-lg bg-[#E6EEF8] animate-pulse"></div>
              <div className="h-10 rounded-lg bg-[#E6EEF8] animate-pulse"></div>
              <div className="h-10 rounded-lg bg-[#E6EEF8] animate-pulse"></div>
              <div className="h-10 rounded-lg bg-[#E6EEF8] animate-pulse"></div>
              <div className="h-12 rounded-xl bg-[#325B94]/20 animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 w-full md:flex md:justify-center">
        <div id={jobberContainerId} className="w-full md:max-w-[520px] md:px-0"></div>
      </div>
    </div>
  </div>
            </div>
    </div>

      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <div className="rounded-[2rem] bg-[#103985] px-8 py-10 text-center text-white shadow-[0_22px_55px_rgba(50,91,148,0.20)]">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#CFE3F1]">Ready to Upgrade Your Kitchen?</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Get a Premium Cabinet Transformation Without the Cost of Replacement
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-black text-white/85">
            <span>✔ Free Estimates</span>
            <span>✔ Fast Turnaround</span>
            <span>✔ Factory-Style Finish</span>
          </div>
          <a
  href="#quote"
  onClick={(e) => {
    e.preventDefault();
    trackQuoteClick(e);

    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => {
      setQuoteFocused(true);
    }, 350);

    setTimeout(() => {
      setQuoteFocused(false);
    }, 1500);
  }}
  className="hover-lift mt-8 inline-flex rounded-2xl bg-[#325B94] px-7 py-4 text-base font-bold text-white shadow-[0_20px_50px_rgba(50,91,148,0.22)] transition-all duration-200 hover:scale-[1.02]"
>
  Get Free Quote
</a>
        </div>
      </section>

      <footer className="border-t border-[#98BEDC]/25 bg-[#0f2747] text-white">
  <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
    <div>
      <img src="/logo.png" className="h-16 w-auto md:h-20" alt="Paint Pals" />
      <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
        Premium cabinet refinishing, cabinet painting, and cabinet refacing in Southern California with factory-style finishes and fast, clean transformations.
      </p>
    </div>

    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CFE3F1]">
        Services
      </p>
      <div className="mt-4 grid gap-3 text-sm text-white/80">
        <a href="#quote" onClick={trackQuoteClick} className="transition hover:text-white">
          Cabinet Refinishing
        </a>
        <a href="#quote" onClick={trackQuoteClick} className="transition hover:text-white">
          Cabinet Painting
        </a>
        <a href="#quote" onClick={trackQuoteClick} className="transition hover:text-white">
          Cabinet Refacing
        </a>
        <a href="#quote" onClick={trackQuoteClick} className="transition hover:text-white">
          Cabinet Upgrades
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

        <a
  href="mailto:Taylor@paint-pals.com"
  className="transition hover:text-white"
>
  Taylor@paint-pals.com
</a>
        
        <a
          href="https://clienthub.getjobber.com/client_hubs/0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea/login/new?source=share_login"
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackPortalClick}
          className="transition hover:text-white"
        >
          Client Portal
        </a>
        <p>Serving Riverside, San Bernardino, and Orange County</p>
        <a
          href="#quote"
          onClick={trackQuoteClick}
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

{activeSlide && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
    onClick={() => setActiveSlide(null)}
  >
    <div
      className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#0f2747] shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setActiveSlide(null)}
        className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-[#103985] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition hover:scale-[1.05]"
        aria-label="Close full screen image"
      >
        ×
      </button>

      <div className="border-b border-white/10 bg-[#183963] px-6 py-4 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CFE3F1]">
          Before &amp; After
        </p>
        <h3 className="mt-1 text-lg font-bold tracking-tight md:text-xl">
          {activeSlide.title}
        </h3>
      </div>

      <div className="grid gap-0 md:grid-cols-2">
        <div className="relative">
          <img
            src={activeSlide.before}
            alt={`${activeSlide.title} before`}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#325B94] shadow-lg">
            Before
          </div>
        </div>

        <div className="relative">
          <img
            src={activeSlide.after}
            alt={`${activeSlide.title} after`}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute right-4 top-4 rounded-full bg-[#98BEDC] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#325B94] shadow-lg">
            After
          </div>
        </div>
      </div>
    </div>
  </div>
)}
      
      <a
        href="tel:+18402175750"
        onClick={() =>
          window.gtag &&
          window.gtag("event", "phone_call_click", {
            event_category: "lead",
            event_label: "floating_call",
          })
        }
        className={`fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#103985] to-[#325B94] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(50,91,148,0.28)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(50,91,148,0.34)] ${
  quoteInView
    ? "opacity-0 scale-90 translate-y-2 pointer-events-none md:opacity-100 md:scale-100 md:translate-y-0 md:pointer-events-auto"
    : "opacity-100 scale-100 translate-y-0"
}`}
      >
        <span className="text-lg">📞</span>
        Call Now
      </a>

      <a
        href="#quote"
        onClick={trackQuoteClick}
        className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-[#98BEDC]/50 bg-white/92 px-6 py-3 text-sm font-semibold text-[#103985] shadow-[0_14px_32px_rgba(50,91,148,0.18)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(50,91,148,0.24)] ${
  quoteInView
    ? "opacity-0 scale-90 translate-y-2 pointer-events-none md:opacity-100 md:scale-100 md:translate-y-0 md:pointer-events-auto"
    : "opacity-100 scale-100 translate-y-0"
}`}
      >
        Get Quote
        <span className="text-lg">→</span>
      </a>

    <style jsx global>{`
  #${jobberContainerId} {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }

  #${jobberContainerId} > * {
    width: 100% !important;
    max-width: 100% !important;
  }

  #${jobberContainerId} iframe {
    width: 100% !important;
    max-width: 100% !important;
    min-height: 900px !important;
    border: 0 !important;
    display: block !important;
  }

  .jobber-shell {
    display: flex !important;
    justify-content: center !important;
  }
@keyframes floaty {
  0% { transform: translateY(-50%) translateY(0px); }
  50% { transform: translateY(-50%) translateY(-8px); }
  100% { transform: translateY(-50%) translateY(0px); }
}

.floaty {
  animation: floaty 4s ease-in-out infinite;
}

/* Hover Lift System */
.hover-lift {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(50, 91, 148, 0.18);
}

/* Subtle version (for smaller cards) */
.hover-lift-sm {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-lift-sm:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 26px rgba(50, 91, 148, 0.14);
}
  
`}</style>

      {/* Floating mascots */}
<img
  src="/chip_fixed.png"
  alt="Chip thumbs up"
  className="pointer-events-none fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:block w-[220px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)] floaty"
  draggable={false}
/>

<img
  src="/dill_fixed.png"
  alt="Dill thumbs up"
  className="pointer-events-none fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:block w-[220px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)] floaty"
  draggable={false}
/>
      
    </div>
  );
}
