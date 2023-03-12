import "./globals.css";
import Header from "./Components/Header";
import Providers from "./Providers";

export const metadata = {
  title: "IMDB Clone",
  description: "My new Next-App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          {/* Searchbox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
