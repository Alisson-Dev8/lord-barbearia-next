import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-medium">Erro 404</p>
      <h1 className="font-display text-7xl tracking-wider mb-4">PÁGINA NÃO ENCONTRADA</h1>
      <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
      <Link
        href="/"
        className="bg-gold text-accent-foreground px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] hover:opacity-80 transition-opacity rounded-md"
      >
        Voltar ao Início
      </Link>
    </div>
  );
}
