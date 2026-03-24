import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section bg-r-cream">
      <div className="container-prose text-center">
        <p className="label-tag mb-4">Error 404</p>
        <h1 className="font-display text-display-lg text-r-dark">
          Esta página no existe
        </h1>
        <p className="mt-4 text-r-muted">
          La URL que buscas no está disponible. Puede que haya cambiado o que
          nunca haya existido.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/" variant="primary">Volver al inicio</Button>
          <Button href="/empieza-aqui" variant="secondary">Empieza aquí</Button>
        </div>
      </div>
    </section>
  );
}
