import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * @remarks
 * - Should be the root element of a Page to control printing and layout.
 * - The component applies specific styles to ensure the container has the
 *  correct dimensions and appearance for A4 paper page during print.
 */
export function A4({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "font-cv mx-auto box-border flex h-[297mm] w-[210mm] flex-shrink-0 flex-col overflow-hidden bg-white text-black md:my-10 md:rounded-md md:shadow-2xl print:mx-0 print:my-0 print:w-screen print:rounded-none print:p-4 print:shadow-none",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}
