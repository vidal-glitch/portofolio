import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

const sections = ["about", "experience", "education", "skills", "references", "contact"] as const;

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="shrink-0 font-semibold tracking-tight text-neutral-100">
          Vidal Djona Fopa
        </a>
        <nav className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto text-sm text-neutral-400">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="shrink-0 whitespace-nowrap transition-colors hover:text-amber-400"
            >
              {t(section)}
            </a>
          ))}
        </nav>
        <div className="shrink-0">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
