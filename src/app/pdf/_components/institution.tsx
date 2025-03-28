export function Institution({
  institution,
  city,
}: {
  institution: string;
  city: string;
}) {
  return (
    <div className="italic text-gray-800 text-[0.7rem]">
      {institution}, {city}
    </div>
  );
}
