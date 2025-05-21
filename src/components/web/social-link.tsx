import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SocialIcon, TSocial } from "@/schemas/social";

export function SocialLink({ name, link }: TSocial) {
  const Icon = SocialIcon[name];
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link
            key={name}
            href={link}
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="relative group">
              <Icon className="h-5 w-5 transition-transform group-hover:scale-110"></Icon>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
              <span className="sr-only">{name}</span>
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="bottom">{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
