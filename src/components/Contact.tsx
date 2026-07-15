import { useTranslations } from "next-intl";
import Section from "./Section";

const EMAIL = "djonafopavidal@gmail.com";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <Section id="contact" title={t("title")}>
      <p className="max-w-xl text-base text-neutral-400">{t("text")}</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="min-w-[220px] flex-1 rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {t("emailLabel")}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-1 block text-lg font-medium text-amber-400 hover:underline"
          >
            {EMAIL}
          </a>
        </div>
        <div className="min-w-[220px] flex-1 rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {t("locationLabel")}
          </p>
          <p className="mt-1 text-lg font-medium text-neutral-100">{t("location")}</p>
        </div>
      </div>
    </Section>
  );
}
