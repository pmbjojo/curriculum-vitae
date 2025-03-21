import { ElementType } from "react";

export type IconButtonProps = {
  Icon: ElementType;
  children: string;
};

export function IconSpan({ Icon, children }: IconButtonProps) {
  return (
    <>
      <Icon className="mr-2 h-4 w-4 transition-transform group-hover:scale-125 group-hover:rotate-12" />
      <span className="relative">{children}</span>
    </>
  );
}
