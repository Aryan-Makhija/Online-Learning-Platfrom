import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Provider from "./Provider";
import { SidebarProvider } from "@/components/ui/sidebar";







const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduAI",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider>

      {/* <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html> */}

      <html lang="en" className="scroll-smooth">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         
      
            <Provider>

              {children}
            </Provider>

    

        </body>
      </html>

    </ClerkProvider>

  );
}
