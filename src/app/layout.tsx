import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flicker">
        {children}
        <div className="film-overlay" />
      </body>
    </html>
  );
}