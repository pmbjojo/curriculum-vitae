import { Loader2 } from "lucide-react";

export function Loading() {
  return (
    <div className="flex items-center justify-center h-full text-3xl">
      <Loader2 className="animate-spin mr-3 size-10"></Loader2>
      <p>Chargement</p>
    </div>
  );
}
