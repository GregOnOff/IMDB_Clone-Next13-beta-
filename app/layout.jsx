import "./globals.css";

export const metadata = {
  title: "IMDB Clone",
  description: "My new Next-App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Logo</h1>
        {children}
      </body>
    </html>
  );
}
