"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="fr-FR">
      <body>
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Oups, quelque chose s&apos;est mal passé !
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Désolé, une erreur inattendue s&apos;est produite. Veuillez
              réessayer ultérieurement.
            </p>
            <div className="mt-6">
              <Button onClick={() => reset()}>Réessayer</Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
