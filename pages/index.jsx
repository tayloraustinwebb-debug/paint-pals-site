import React, { useEffect, useMemo, useRef, useState } from "react";

function SliderCard({ item }) {
  const [position, setPosition] = useState(50);

  const update = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-[#325B94]/30 bg-[#1f3b63]">
      <div className="px-4 py-3 border-b border-[#325B94]/30 text-white font-bold text-sm">
        {item.title}
      </div>

      <div
        className="relative aspect-[4/3] cursor-ew-resize"
        onPointerDown={update}
        onPointerMove={(e) => e.buttons === 1 && update(e)}
      >
        <img src={item.after} className="absolute inset-0 w-full h-full object-cover" />

        <div style={{ width: `${position}%` }} className="absolute inset-y-0 left-0 overflow-hidden">
          <img src={item.before} className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-0 bottom-0 w-[2px] bg-white" style={{ left: `${position}%` }} />
      </div>
    </div>
  );
}

export default function PaintPalsWebsite() {
  const jobberContainerId = "0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea-2068401";
  const jobberScriptRef = useRef(null);
  const adsId = "AW-18032245507";

  useEffect(() => {
    document.title = "Paint Pals | Cabinet Refinishing";

    // Google Ads Tag (gtag)
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
  }, []);

  useEffect(() => {
    if (document.querySelector(`[data-jobber]`)) return;

    const script = document.createElement("script");
    script.src =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.async = true;
    script.setAttribute("clienthub_id", jobberContainerId);
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea/public/work_request/embedded_work_request_form?form_id=2068401"
    );
    script.setAttribute("data-jobber", "true");
    document.body.appendChild(script);

    jobberScriptRef.current = script;
  }, []);

  const beforeAfterPairs = useMemo(
    () => [
      { title: "Modern White Upgrade", before: "/Before 1.jpg", after: "/After 1.jpeg" },
      { title: "Dark to Light Transformation", before: "/Before 2.jpg", after: "/After 2.jpeg" },
    ],
    []
  );

  const services = [
    "Cabinet Refinishing",
    "Cabinet Refacing",
    "Cabinet Upgrades",
  ];

  const reviews = [
    "Paint Pals completely transformed our kitchen. Looks brand new for a fraction of the cost.",
    "Super clean process and the finish looks factory perfect. Highly recommend.",
    "Saved us thousands vs replacing cabinets. Amazing results.",
  ];

  return (
    <div className="bg-[#0b1426] text-white min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        <img src="/logo.png" className="h-12" />
        <a
          href="https://clienthub.getjobber.com/client_hubs/0ed9bce6-d2ca-4eb6-a2b2-30bc7eee3cea/login/new?source=share_login"
          target="_blank"
          className="text-sm font-bold text-[#98BEDC]"
        >
          Client Portal
        </a>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          Refinish Your Cabinets. Save Thousands.
        </h1>

        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Cabinet refinishing, refacing, and upgrades that give your kitchen a
          brand-new look without the cost of replacement.
        </p>

        <div className="mt-8">
          <a href="#quote" className="bg-[#98BEDC] text-[#325B94] px-6 py-3 rounded-xl font-bold">
            Get Free Quote
          </a>
          <p className="mt-6 text-sm text-[#98BEDC] font-bold">
            ✔ We use premium 2K coatings for a factory-style, ultra-durable finish
          </p>
        </div>
      </section>

      {/* REVIEWS + THUMBTACK */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">

          <div className="grid gap-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#274a78] p-4 rounded-xl text-sm">
                ⭐⭐⭐⭐⭐
                <p className="mt-2">{r}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-xl">
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
      </section>

      {/* BEFORE AFTER */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Before & After</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {beforeAfterPairs.map((item) => (
            <SliderCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s} className="bg-[#274a78] p-6 rounded-2xl font-bold">
              ✓ {s}
            </div>
          ))}
        </div>
      </section>
      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Common Questions</h2>

        <div className="space-y-4 text-sm text-white/80">
          <div>
            <p className="font-bold text-white">Is cabinet refinishing cheaper than replacing?</p>
            <p>Yes — most homeowners save thousands compared to full cabinet replacement while still getting a completely updated look.</p>
          </div>

          <div>
            <p className="font-bold text-white">How long does cabinet refinishing take?</p>
            <p>Most projects are completed in just a few days, much faster than a full remodel.</p>
          </div>

          <div>
            <p className="font-bold text-white">Can I choose any color?</p>
            <p>Yes — refinishing allows for custom colors and modern finishes not available with most stock cabinets.</p>
          </div>

          <div>
            <p className="font-bold text-white">Are the finishes durable?</p>
            <p>We use professional-grade coatings designed for cabinets that are built to last and resist wear.</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold">Get Your Free Estimate</h2>
            <p className="mt-4 text-white/80">
              Fill out the form and we’ll contact you with pricing and details.
            </p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden">
            <div id={jobberContainerId}></div>
          </div>
        </div>
      </section>

    </div>
  );
}
