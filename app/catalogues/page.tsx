"use client";

import { useState } from "react";

const catalogues = [
  {
    title: "Industrial & Commercial Refrigeration",
    pdf: "PASTE_PDF_LINK_HERE_1"
  },
  {
    title: "Process Controllers & Automation",
    pdf: "PASTE_PDF_LINK_HERE_2"
  },
  {
    title: "Castle Ammonia Valves",
    pdf: "PASTE_PDF_LINK_HERE_3"
  }
];

export default function Catalogues() {
  const [active, setActive] = useState(null);

  return (
    <main style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>
        Product Catalogues
      </h1>

      {catalogues.map((cat, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
            background: "#111"
          }}
        >
          <h2>{cat.title}</h2>

          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <a href={cat.pdf} target="_blank">
              <button>View</button>
            </a>

            <a href={cat.pdf} download>
              <button>Download</button>
            </a>

            <button onClick={() => setActive(active === index ? null : index)}>
              {active === index ? "Hide Preview" : "Preview"}
            </button>
          </div>

          {active === index && (
            <iframe
              src={cat.pdf}
              style={{
                width: "100%",
                height: "600px",
                marginTop: "20px",
                borderRadius: "10px"
              }}
            />
          )}
        </div>
      ))}
    </main>
  );
}
