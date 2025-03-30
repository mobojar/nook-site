import "./styles/globals.css";
import Script from "next/script";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/Navbar";

export const metadata = {
  title: "nook - Find peace in your nook",
  description: "A science-based well-being solution to help you navigate life and work with confidence and peace.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}

