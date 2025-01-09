import { ReactNode } from "react";

export default function RootLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body>
    {/* Layout UI */}
    {/* Place children where you want to render a page or nested layout */}
    <main>{children}</main>
    </body>
    </html>
  );
}