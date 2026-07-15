import { useTranslations } from "next-intl";
import Section from "./Section";

const EMAIL = "djonafopavidal@gmail.com";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <Section id="contact" title={t("title")}>
      <p className="max-w-xl text-neutral-400">{t("text")}</p>
      <div className="mt-6 flex flex-col gap-2 text-sm">
        <p>
          <span className="text-neutral-500">{t("emailLabel")}: </span>
          <a href={`mailto:${EMAIL}`} className="text-amber-400 hover:underline">
            {EMAIL}
          </a>
        </p>
        <p>
          <span className="text-neutral-500">{t("locationLabel")}: </span>
          <span className="text-neutral-300">{t("location")}</span>
        </p>
      </div>
    </Section>
  );
}
