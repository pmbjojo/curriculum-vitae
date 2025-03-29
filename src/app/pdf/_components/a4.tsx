import { ComponentProps } from "react";

export function A4(props: ComponentProps<"div">) {
  return (
    <div
      className="font-cv w-[210mm] h-[297mm] box-border mx-auto bg-white overflow-hidden flex flex-col text-black print:m-0 print:w-screen print:rounded-none print:shadow-none rounded-md shadow-lg"
      {...props}
    >
      {props.children}
    </div>
  );
}
