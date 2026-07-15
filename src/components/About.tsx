import { useTranslations } from "next-intl";
import Section from "./Section";

export default function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" title={t("title")}>
      <p className="max-w-2xl leading-relaxed text-neutral-400">{t("text")}</p>
      <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
        <div>
          <dt className="text-neutral-500">{t("birthDate")}</dt>
          <dd className="text-neutral-300">{t("birthPlace")}</dd>
        </div>
        <div>
          <dt className="text-neutral-500">📍</dt>
          <dd className="text-neutral-300">{t("location")}</dd>
        </div>
      </dl>
    </Section>
  );
}
