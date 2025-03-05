import { Urbanist} from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});



export const metadata = {
  title: "Apu Ahmed",
  description: "A modern webdeveloper portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased bg-[#0a212b]`}
      >
        {children}
      </body>
    </html>
  );
}
