const catalogues = [
  {
    title: "Industrial & Commercial Refrigeration",
    pdf: "https://xnacgp3gcfjnlu1g.public.blob.vercel-storage.com/catalogues/industrial-and-commercial-refrigeration.pdf"
  },
  {
    title: "Process Controllers & Automation",
    pdf: "https://xnacgp3gcfjnlu1g.public.blob.vercel-storage.com/catalogues/process-controllers-and-automation.pdf"
  },
  {
    title: "Castle Ammonia Valves",
    pdf: "https://xnacgp3gcfjnlu1g.public.blob.vercel-storage.com/catalogues/castle-ammonia-valves.pdf"
  }
];

export default function Catalogues() {
  return (
    <main style={{ padding: "40px", color: "white" }}>
      <h1>Product Catalogues</h1>

      {catalogues.map((item, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <h2>{item.title}</h2>

          <a href={item.pdf} target="_blank">
            <button>View</button>
          </a>

          <a href={item.pdf} download>
            <button>Download</button>
          </a>

          <a href={item.pdf} target="_blank">
            <button>Preview</button>
          </a>
        </div>
      ))}
    </main>
  );
}
