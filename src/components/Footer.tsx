import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 py-8">
      <div className="mx-auto max-w-5xl px-6 text-sm text-neutral-500">
        © {year} Vidal Djona Fopa — {t("rights")}
      </div>
    </footer>
  );
}
