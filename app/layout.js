import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { ThemeProvider } from "./store/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio || Sachin Gour",
  description: "Sachin Gour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} dark:bg-darkTheme overflow-x-hidden bg-white antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="wrapper dark:bg-darkTheme">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
