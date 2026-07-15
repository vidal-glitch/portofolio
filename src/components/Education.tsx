import { useTranslations } from "next-intl";
import MediaThumb from "./MediaThumb";
import Section from "./Section";

type Item = {
  period: string;
  degree: string;
  institution: string;
  image?: string;
  video?: string;
};

export default function Education() {
  const t = useTranslations("education");
  const items = t.raw("items") as Item[];

  return (
    <Section id="education" title={t("title")}>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-amber-500">
              {item.period}
            </p>
            <h3 className="mt-1 font-semibold text-neutral-100">{item.degree}</h3>
            <p className="text-sm text-neutral-400">{item.institution}</p>
            {(item.image || item.video) && (
              <div className="mt-4 flex flex-wrap gap-3">
                {item.image && (
                  <MediaThumb type="image" src={item.image} alt={item.degree} />
                )}
                {item.video && (
                  <MediaThumb type="video" src={item.video} alt={item.degree} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
