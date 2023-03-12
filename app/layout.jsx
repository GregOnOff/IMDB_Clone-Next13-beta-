import "./globals.css";
import Header from "./Components/Header";

export const metadata = {
  title: "IMDB Clone",
  description: "My new Next-App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {/* Navbar */}
        {/* Searchbox */}
        {children}
      </body>
    </html>
  );
}
