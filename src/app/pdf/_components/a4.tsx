import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

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
        "font-cv w-[210mm] h-[297mm] box-border mx-auto bg-white overflow-hidden flex flex-col text-black print:mx-0 print:my-0 print:p-4 print:w-screen print:rounded-none print:shadow-none md:my-10 md:rounded-md md:shadow-2xl",
        className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}
