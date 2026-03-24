import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Rentabilismo.",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <section className="section bg-r-cream">
      <div className="container-prose">
        <h1 className="font-display text-display-lg text-r-dark">Política de Privacidad</h1>
        <p className="mt-6 text-r-muted">
          {/* TODO: completar con política de privacidad real */}
          Contenido pendiente de revisión legal. Próximamente disponible.
        </p>
      </div>
    </section>
  );
}
