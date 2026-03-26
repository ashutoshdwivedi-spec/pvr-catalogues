export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "linear-gradient(135deg, #050505, #111111, #1b1b1b)",
          color: "white",
          fontFamily: "Arial, sans-serif"
        }}
      >
        {children}
      </body>
    </html>
  );
}
