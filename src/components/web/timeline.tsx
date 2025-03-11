import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface TimelineItemProps {
  title: string;
  organization: { name: string; url?: string };
  location?: string;
  period: string;
  children: React.ReactNode;
}

export function AnimatedTimelineItem({
  title,
  organization,
  location,
  period,
  children,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative"
      //   initial={{ opacity: 0, x: -50 }}
      //   whileInView={{ opacity: 1, x: 0 }}
      //   viewport={{ once: true, margin: "-100px" }}
      //   transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="absolute -left-[34px] top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-4 border-background bg-primary"
        // initial={{ scale: 0 }}
        // whileInView={{ scale: 1 }}
        // viewport={{ once: true, margin: "-100px" }}
        // transition={{
        //   type: "spring",
        //   stiffness: 300,
        //   damping: 15,
        //   delay: index * 0.1 + 0.2,
        // }}
      />

      <motion.div className="rounded-lg border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="mb-3">
          <h4 className="text-xl font-bold">{title}</h4>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Building className="h-4 w-4" />
              {organization.url ? (
                <Button
                  asChild
                  variant="link"
                  className="text-muted-foreground px-0"
                >
                  <Link href={organization.url} target="_blank">
                    {organization.name}
                  </Link>
                </Button>
              ) : (
                <span>{organization.name}</span>
              )}
            </div>

            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            )}

            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{period}</span>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground">{children}</div>
      </motion.div>
    </motion.div>
  );
}
