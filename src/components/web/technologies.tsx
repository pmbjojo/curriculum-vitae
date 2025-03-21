export function Technologies({ technologies }: { technologies: string[] }) {
  return (
    <p className="text-sm font-medium">
      Technologies: {technologies.join(", ")}
    </p>
  );
}
