import { Metadata } from "next";

export const metadata:Metadata={
  //название нашей странички в браузере
  title:"nEW NEXT JS",
  description:"jjherjgnrjnh"
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}