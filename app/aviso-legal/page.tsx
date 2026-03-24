import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Rentabilismo.",
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <section className="section bg-r-cream">
      <div className="container-prose">
        <h1 className="font-display text-display-lg text-r-dark">Aviso Legal</h1>
        <p className="mt-6 text-r-muted">
          {/* TODO: completar con datos legales reales del titular */}
          Contenido pendiente de revisión legal. Próximamente disponible.
        </p>
      </div>
    </section>
  );
}
