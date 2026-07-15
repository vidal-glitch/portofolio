import { useTranslations } from "next-intl";
import Section from "./Section";

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3.5 py-1.5 text-sm text-neutral-300">
      {label}
    </span>
  );
}

export default function Skills() {
  const t = useTranslations("skills");
  const soft = t.raw("soft.items") as string[];
  const technical = t.raw("technical.items") as string[];

  return (
    <Section id="skills" title={t("title")}>
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">
            {t("technical.title")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technical.map((item) => (
              <Pill key={item} label={item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">
            {t("soft.title")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {soft.map((item) => (
              <Pill key={item} label={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
