import { Inter } from "next/font/google";
import { AppProvider } from "@/context/store";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "../style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bismillah Keterima Magang",
  description: "Ideas Page by RakasyainZ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon1.png" type="image/png" sizes="any" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
          xintegrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className={inter.className}>
        <AppProvider>
          <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
