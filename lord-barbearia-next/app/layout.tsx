import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lord Barbearia - Tradição e Estilo em Cada Corte",
  description: "Barbearia premium em Campo Grande - MS. Cortes, barba e cuidados masculinos com qualidade e tradição.",
  authors: [{ name: "Lord Barbearia" }],
  openGraph: {
    title: "Lord Barbearia",
    description: "Tradição e estilo em cada corte. Campo Grande - MS.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
