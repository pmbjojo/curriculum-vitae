import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { resume } from "@/data";
import { Skill, SkillMeta, SoftSkillMeta } from "@/schemas/skill";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const skills: Skill[] = [
  "React",
  "Next.js",
  "TypeScript",
  ".NET",
  "Tailwind CSS",
  "Linux",
  "HTML",
  "C#",
  "Blazor",
  "Git",
  "CSS",
];

export default function SkillsSection() {
  return (
    <section className="flex flex-col items-center gap-10 px-4">
      <Carousel
        className="container px-4"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="pb-1">
          {skills.map((skill) => (
            <CarouselItem
              key={skill}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Link
                href={SkillMeta[skill].url ?? ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="shadow-none select-none hover:shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center gap-3">
                    <Image
                      src={SkillMeta[skill].icon}
                      alt={skill}
                      className="size-16"
                    />
                    <h4 className="text-center font-medium">{skill}</h4>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid h-full grid-cols-2 gap-5 lg:grid-cols-4">
        {resume.softSkills.map((s) => {
          const Icon = SoftSkillMeta[s.name].icon;
          return (
            <Popover key={s.name}>
              <PopoverTrigger>
                <Card className="cursor-pointer flex-row p-3">
                  <Icon />
                  <span>{s.name}</span>
                </Card>
              </PopoverTrigger>
              <PopoverContent>{s.description}</PopoverContent>
            </Popover>
          );
        })}
      </div>
    </section>
  );
}
