import React, { useEffect, useMemo, useRef, useState } from "react";

function SliderCard({ item }) {
  const [position, setPosition] = useState(50);

  const update = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  };

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#98BEDC]/35 bg-gradient-to-br from-[#274a78] to-[#325B94] shadow-[0_24px_60px_rgba(10,20,40,0.18)] transition hover:-translate-y-1">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#183963] px-4 py-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#CFE3F1]">Before &amp; After</p>
          <h3 className="mt-1 text-sm font-black text-white md:text-base">{item.title}</h3>
        </div>
        <div className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#325B94]">
          Drag
        </div>
      </div>

      <div
        className="relative aspect-[4/3] cursor-ew-resize"
        onPointerDown={update}
        onPointerMove={(e) => e.buttons === 1 && update(e)}
      >
        <img src={item.after} alt={`${item.title} after`} className="absolute inset-0 h-full w-full object-cover" />

        <div style={{ width: `${position}%` }} className="absolute inset-y-0 left-0 overflow-hidden">
          <img src={item.before} alt={`${item.title} before`} className="h-full w-full object-cover" />
        </div>

        <div className="absolute inset-y-0 w-[3px] bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]" style={{ left: `${position}%` }} />

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
    <div className="group rounded-[1.5rem] border border-[#98BEDC]/25 bg-white p-6 shadow-[0_18px_50px_rgba(10,20,40,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(10,20,40,0.12)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#98BEDC,#325B94)] shadow-[0_0_18px_rgba(152,190,220,0.55)] transition group-hover:shadow-[0_0_28px_rgba(152,190,220,0.85)]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-lg font-black tracking-tight text-[#103985] md:text-xl">{service}</h3>
    </div>
  );
}

function ReviewCard({ children }) {
  return (
    <div className="rounded-[1.25rem] border border-[#98BEDC]/25 bg-white p-5 shadow-[0_14px_40px_rgba(10,20,40,0.08)]">
      <div className="text-[#fbbc04] text-sm">★★★★★</div>
      <p className="mt-3 text-sm leading-7 text-[#2b4267]">{children}</p>
    </div>
  );
}

export default function PaintPalsWebsite() {
  const quoteConversionLabel = "";
  const formSubmitConversionLabel = "";
  const jobberContainerId = "0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea-2068401";
  const jobberScriptRef = useRef(null);
  const adsId = "AW-18032245507";
  const [hasTrackedFormSubmit, setHasTrackedFormSubmit] = useState(false);

  useEffect(() => {
    document.title = "Paint Pals | Cabinet Refinishing";

    if (!window.gtag) {
      const script1 = document.createElement("script");
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${adsId}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${adsId}');
      `;
      document.head.appendChild(script2);
    }
  }, [adsId]);

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
      window.removeEventListener("message", handleMessage);
    };
  }, [jobberContainerId, hasTrackedFormSubmit]);

  const beforeAfterPairs = useMemo(
    () => [
      { title: "Modern White Upgrade", before: "/Before 1.jpg", after: "/After 1.jpeg" },
      { title: "Dark to Light Transformation", before: "/Before 2.jpg", after: "/After 2.jpeg" },
      { title: "Warm Wood to Bright White", before: "/Before 3.jpeg", after: "/After 3.jpeg" },
    { title: "Outdated Oak to Modern Finish", before: "/Before 4.JPG", after: "/After 7.jpg" },
    ],
    []
  );

  const services = ["Cabinet Refinishing", "Cabinet Refacing", "Cabinet Upgrades"];

  const reviews = [
    "Paint Pals completely transformed our kitchen. Looks brand new for a fraction of the cost.",
    "Super clean process and the finish looks factory perfect. Highly recommend.",
    "Saved us thousands vs replacing cabinets. Amazing results.",
  ];

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
      sendGtagEvent("conversion", { send_to: `${adsId}/${formSubmitConversionLabel}` });
    }

    setHasTrackedFormSubmit(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f8fc] text-black">
      <div className="bg-[radial-gradient(circle_at_top_left,rgba(152,190,220,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(50,91,148,0.12),transparent_24%)]">
        <header className="border-b border-[#98BEDC]/20 bg-white/85 backdrop-blur-xl sticky top-0 z-40">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <img src="/logo.png" className="h-16 md:h-20" alt="Paint Pals" />
            <div className="flex items-center gap-3">
              <a href="#quote" onClick={trackQuoteClick} className="hidden md:inline-flex rounded-xl bg-[#98BEDC] px-5 py-3 text-sm font-black text-[#325B94] shadow-[0_12px_28px_rgba(50,91,148,0.18)]">
                Get Free Quote
              </a>
              <a
                href="https://clienthub.getjobber.com/client_hubs/0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea/login/new?source=share_login"
                target="_blank"
                onClick={trackPortalClick}
                rel="noreferrer"
                className="text-sm font-black text-[#325B94]"
              >
                Client Portal
              </a>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-[#98BEDC]/40 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#325B94] shadow-sm">
                Premium 2K Factory-Style Cabinet Finishes
              </div>
              <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight text-[#103985] md:text-6xl">
                Refinish Your Cabinets. Save Thousands.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#496487]">
                Cabinet refinishing, refacing, and upgrades that give your kitchen a brand-new look without the cost of replacement.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#quote" onClick={trackQuoteClick} className="inline-flex items-center justify-center rounded-2xl bg-[#98BEDC] px-6 py-4 text-base font-black text-[#325B94] shadow-[0_18px_38px_rgba(50,91,148,0.18)] transition hover:-translate-y-0.5">
                  Get Free Quote
                </a>
                <div className="inline-flex items-center justify-center rounded-2xl border border-[#98BEDC]/40 bg-white px-6 py-4 text-sm font-black text-[#103985] shadow-sm">
                  ✔ Factory-style, ultra-durable finish
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#98BEDC]/30 bg-gradient-to-br from-[#17345f] via-[#274a78] to-[#325B94] p-6 text-white shadow-[0_26px_60px_rgba(15,34,64,0.24)]">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <img src="/logo.png" className="mx-auto h-40 w-auto md:h-56" alt="Paint Pals Logo" />
                <div className="mt-5 grid gap-3">
                  {[
                    "Save thousands vs replacement",
                    "Custom cabinet colors",
                    "Factory-style 2K finishes",
                    "Fast, clean transformations",
                  ].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white">
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
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <ReviewCard key={i}>{r}</ReviewCard>
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-[#98BEDC]/25 bg-white p-5 shadow-[0_16px_40px_rgba(10,20,40,0.08)]">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#325B94]">Thumbtack Reviews</div>
            <div className="mt-3 rounded-xl border border-[#98BEDC]/25 bg-[#f7fbff] p-4">
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
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#325B94]">Visual Proof</p>
            <h2 className="mt-2 text-3xl font-black text-[#103985] md:text-4xl">Before & After Cabinet Transformations</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {beforeAfterPairs.map((item) => (
            <SliderCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-[2rem] bg-[#103985] px-6 py-8 text-white shadow-[0_24px_60px_rgba(15,34,64,0.22)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#CFE3F1]">Services</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Cabinet Services That Actually Move the Needle</h2>
            </div>
            <p className="max-w-xl text-white/80">Focused, high-value services built to give kitchens a dramatic upgrade without full replacement costs.</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-[#98BEDC]/25 bg-gradient-to-br from-[#274a78] to-[#325B94] p-8 text-white shadow-[0_20px_55px_rgba(15,34,64,0.20)]">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#CFE3F1]">Why It Works</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">One of the Best Value Upgrades You Can Make</h2>
          <p className="mt-4 max-w-2xl text-white/85 leading-8">
            Cabinet refinishing gives your kitchen a brand-new look without the high cost of replacement. It is one of the fastest, highest-impact ways to transform your home.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#98BEDC]/25 bg-white p-8 shadow-[0_18px_50px_rgba(10,20,40,0.08)]">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#325B94]">Common Questions</p>
          <h2 className="mt-3 text-3xl font-black text-[#103985] md:text-4xl">FAQ</h2>
          <div className="mt-6 space-y-4 text-sm text-[#496487]">
            <div className="rounded-xl border border-[#98BEDC]/20 bg-[#f8fbff] p-4">
              <p className="font-black text-[#103985]">Is cabinet refinishing cheaper than replacing?</p>
              <p className="mt-2">Yes — most homeowners save thousands compared to full cabinet replacement while still getting a completely updated look.</p>
            </div>
            <div className="rounded-xl border border-[#98BEDC]/20 bg-[#f8fbff] p-4">
              <p className="font-black text-[#103985]">How long does cabinet refinishing take?</p>
              <p className="mt-2">Most projects are completed in just a few days, much faster than a full remodel.</p>
            </div>
            <div className="rounded-xl border border-[#98BEDC]/20 bg-[#f8fbff] p-4">
              <p className="font-black text-[#103985]">Can I choose any color?</p>
              <p className="mt-2">Yes — refinishing allows for custom colors and modern finishes not available with most stock cabinets.</p>
            </div>
            <div className="rounded-xl border border-[#98BEDC]/20 bg-[#f8fbff] p-4">
              <p className="font-black text-[#103985]">Are the finishes durable?</p>
              <p className="mt-2">We use professional-grade coatings designed for cabinets that are built to last and resist wear.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid items-start gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#17345f] via-[#274a78] to-[#325B94] p-8 text-white shadow-[0_24px_60px_rgba(15,34,64,0.20)]">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#CFE3F1]">Free Estimate</p>
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

          <div className="jobber-shell w-full overflow-hidden rounded-[2rem] border border-[#98BEDC]/25 bg-white shadow-[0_20px_55px_rgba(10,20,40,0.10)]">
            <div className="border-b border-[#98BEDC]/20 px-5 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#325B94]">
              Quote Request Form
            </div>
            <div id={jobberContainerId}></div>
          </div>
        </div>
      </section>

      <style jsx global>{`
  #${jobberContainerId} {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }

  #${jobberContainerId} > div {
    width: 100% !important;
    max-width: 720px !important; /* controls centered width */
  }

  #${jobberContainerId} iframe {
    width: 100% !important;
    max-width: 720px !important;
    border: 0 !important;
    display: block !important;
  }
`}</style>
    </div>
  );
}
