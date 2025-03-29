import { ComponentProps } from "react";

export function A4(props: ComponentProps<"div">) {
  return (
    <div
      className="font-cv w-[210mm] h-[297mm] bg-white overflow-hidden flex flex-col text-black print:m-0 print:w-screen print:rounded-none print:shadow-none"
      {...props}
    >
      {props.children}
    </div>
  );
}
