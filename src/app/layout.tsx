import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanstackQueryProvider from "@/providers/tanstack";
import 'leaflet/dist/leaflet.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanstackQueryProvider>
      <html lang="en">
        <body>
          <Toaster position="bottom-right" toastOptions={{className: 'Toaster'}} />
          {children}
        </body>
      </html>
    </TanstackQueryProvider>
  );
}
