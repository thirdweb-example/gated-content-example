"use client";

import { ThirdwebProvider } from "thirdweb/react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider>
          <div
            style={{
              minHeight: "100vh",
              display: "grid",
              placeContent: "center",
            }}
          >
            {children}
          </div>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
