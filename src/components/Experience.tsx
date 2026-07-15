import { useTranslations } from "next-intl";
import Section from "./Section";

type Item = {
  period: string;
  role: string;
  company: string;
  description: string;
  context?: string;
};

export default function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as Item[];

  return (
    <Section id="experience" title={t("title")}>
      <ol className="relative space-y-10 border-l border-neutral-800 pl-6">
        {items.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-neutral-950 bg-amber-500" />
            <p className="text-xs font-medium uppercase tracking-wide text-amber-500">
              {item.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-neutral-100">{item.role}</h3>
            <p className="text-sm text-neutral-400">{item.company}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
              {item.description}
            </p>
            {item.context && (
              <p className="mt-1 max-w-2xl text-xs italic text-neutral-600">{item.context}</p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
