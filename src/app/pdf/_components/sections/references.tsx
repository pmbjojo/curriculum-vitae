import { meta } from "@/data";
import { Section } from "../section";
import Link from "next/link";
import { Fragment } from "react";

export function References({ className }: { className?: string }) {
  return (
    <Section title="Références" className={className}>
      <table>
        <tbody>
          {meta.references.map((r) => (
            <Fragment key={r.name}>
              <tr>
                <td className="font-bold pr-3">{r.name}</td>
                <td>
                  {r.position} ({r.company})
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Link href={`mailto:${r.email}`}>{r.email}</Link>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
