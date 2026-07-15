import { useTranslations } from "next-intl";
import Section from "./Section";

type Item = {
  name: string;
  role: string;
  company: string;
  phone?: string;
  email?: string;
};

export default function References() {
  const t = useTranslations("references");
  const items = t.raw("items") as Item[];
  const note = t("note");

  return (
    <Section id="references" title={t("title")}>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5"
          >
            <h3 className="font-semibold text-neutral-100">{item.name}</h3>
            <p className="text-sm text-neutral-400">
              {item.role} · {item.company}
            </p>
            <div className="mt-2 space-y-1 text-sm">
              {item.phone && (
                <p>
                  <a href={`tel:${item.phone.replace(/\s/g, "")}`} className="text-amber-400 hover:underline">
                    {item.phone}
                  </a>
                </p>
              )}
              {item.email && (
                <p>
                  <a href={`mailto:${item.email}`} className="text-amber-400 hover:underline">
                    {item.email}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {note && <p className="mt-6 text-sm text-neutral-500">{note}</p>}
    </Section>
  );
}
