"use client";

import { useState, useEffect } from "react";

const catalogues = [
  {
    id: "refrigeration",
    title: "Industrial & Commercial Refrigeration",
    description:
      "Controllers, panels, monitoring systems, and solutions for cold rooms, refrigeration systems, and industrial cooling applications.",
    pdf: "https://xnacgp3gcfjnlu1g.public.blob.vercel-storage.com/catalogues/Industrial%20And%20Commercial%20Refrigeration.pdf",
    image: "/images/refrigeration.jpg"
  },
  {
    id: "automation",
    title: "Process Controllers & Automation",
    description:
      "A consolidated catalogue of process controllers, automation products, HMIs, PLC solutions, and industrial control devices.",
    pdf: "https://xnacgp3gcfjnlu1g.public.blob.vercel-storage.com/catalogues/process-controllers-and-automation.pdf",
    image: "/images/process.jpg"
  },
  {
    id: "castle",
    title: "Castle Ammonia Valves",
    description:
      "Product catalogue covering Castle ammonia valves and related solutions for industrial refrigeration and ammonia-based systems.",
    pdf: "https://xnacgp3gcfjnlu1g.public.blob.vercel-storage.com/catalogues/castle-ammonia-valves.pdf",
    image: "/images/castle.jpg"
  }
];

export default function CataloguesPage() {
  const [openPreview, setOpenPreview] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 900);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(110,110,110,0.18), transparent 25%), linear-gradient(135deg, #030303 0%, #0f0f10 45%, #19191b 100%)",
        color: "white",
        padding: isMobile ? "20px 14px 36px" : "32px 24px 48px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <section
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "28px",
            padding: isMobile ? "20px 18px 24px" : "28px 32px 36px",
            marginBottom: "24px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              gap: "16px",
              marginBottom: "24px",
              flexWrap: "wrap"
            }}
          >
            <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
              <img
                src="/images/subzero-logo.png"
                alt="Sub Zero"
                style={{ height: isMobile ? "32px" : "42px", objectFit: "contain" }}
              />
              <img
                src="/images/castle-logo.png"
                alt="Castle"
                style={{ height: isMobile ? "32px" : "42px", objectFit: "contain" }}
              />
            </div>

            <img
              src="/images/pvr-logo.png"
              alt="PVR Controls"
              style={{ height: isMobile ? "32px" : "42px", objectFit: "contain" }}
            />
          </div>

          <div
            style={{
              display: "inline-block",
              padding: isMobile ? "7px 12px" : "8px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.65)",
              fontSize: isMobile ? "11px" : "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}
          >
            Product Library
          </div>

          <h1
            style={{
              fontSize: isMobile ? "38px" : "52px",
              lineHeight: 1.08,
              margin: 0,
              maxWidth: "900px"
            }}
          >
            Explore all catalogues from one clean, premium single-page experience.
          </h1>
        </section>

        <div style={{ display: "grid", gap: "24px" }}>
          {catalogues.map((item) => {
            const expanded = openPreview === item.id;

            return (
              <section
                key={item.id}
                style={{
                  overflow: "hidden",
                  borderRadius: "28px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.35)"
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "minmax(420px, 520px) 1fr",
                    alignItems: "stretch"
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      minHeight: isMobile ? "500px" : "420px",
                      overflow: "hidden"
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.5
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(135deg, rgba(70,70,70,0.62), rgba(0,0,0,0.88))"
                      }}
                    />

                    <div
                      style={{
                        position: "relative",
                        height: "100%",
                        padding: isMobile ? "20px" : "26px 30px"
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          width: "fit-content",
                          padding: isMobile ? "8px 14px" : "10px 18px",
                          borderRadius: "999px",
                          border: "1px solid rgba(255,255,255,0.12)",
                          background: "rgba(255,255,255,0.08)",
                          fontSize: isMobile ? "12px" : "13px",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.85)"
                        }}
                      >
                        Catalogue
                      </div>

                      <div
                        style={{
                          position: "absolute",
                          left: isMobile ? "20px" : "30px",
                          right: isMobile ? "20px" : "30px",
                          bottom: isMobile ? "90px" : "72px",
                          maxWidth: isMobile ? "300px" : "360px"
                        }}
                      >
                        <div
                          style={{
                            fontSize: isMobile ? "12px" : "14px",
                            color: "rgba(255,255,255,0.75)",
                            marginBottom: "8px"
                          }}
                        >
                          PDF brochure / product catalogue
                        </div>

                        <h2
                          style={{
                            fontSize: isMobile ? "17px" : "22px",
                            lineHeight: 1.18,
                            margin: 0,
                            wordBreak: "break-word"
                          }}
                        >
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: isMobile ? "20px" : "30px" }}>
                    <p
                      style={{
                        fontSize: isMobile ? "15px" : "16px",
                        lineHeight: 1.8,
                        color: "rgba(255,255,255,0.68)",
                        maxWidth: "760px",
                        marginTop: 0
                      }}
                    >
                      {item.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "12px",
                        marginTop: "22px",
                        flexDirection: isMobile ? "column" : "row"
                      }}
                    >
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          style={{
                            width: isMobile ? "100%" : "auto",
                            borderRadius: "14px",
                            padding: "14px 18px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "rgba(255,255,255,0.10)",
                            color: "white",
                            fontSize: "14px",
                            cursor: "pointer"
                          }}
                        >
                          View Catalogue
                        </button>
                      </a>

                      <a href={item.pdf} download style={{ textDecoration: "none" }}>
                        <button
                          style={{
                            width: isMobile ? "100%" : "auto",
                            borderRadius: "14px",
                            padding: "14px 18px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "rgba(0,0,0,0.42)",
                            color: "white",
                            fontSize: "14px",
                            cursor: "pointer"
                          }}
                        >
                          Download PDF
                        </button>
                      </a>

                      <button
                        onClick={() =>
                          setOpenPreview((current) => (current === item.id ? null : item.id))
                        }
                        style={{
                          width: isMobile ? "100%" : "auto",
                          borderRadius: "14px",
                          padding: "14px 18px",
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "transparent",
                          color: "rgba(255,255,255,0.92)",
                          fontSize: "14px",
                          cursor: "pointer"
                        }}
                      >
                        {expanded ? "Hide Preview" : "Preview on Page"}
                      </button>
                    </div>

                    {expanded ? (
                      <div
                        style={{
                          marginTop: "24px",
                          overflow: "hidden",
                          borderRadius: "22px",
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(0,0,0,0.3)"
                        }}
                      >
                        <iframe
                          src={`${item.pdf}#view=FitH`}
                          title={item.title}
                          style={{
                            width: "100%",
                            height: isMobile ? "55vh" : "70vh",
                            border: "none",
                            background: "white"
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
