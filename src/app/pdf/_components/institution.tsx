import { TAddress } from "@/schemas/utils";

export function Institution({ address }: { address: TAddress }) {
  return (
    <div className="italic text-gray-800 text-[0.7rem]">
      {address.institution}, {address.city}
      {address.country !== "France" && ` (${address.country})`}
    </div>
  );
}
