"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  de: "DE",
  en: "EN",
  fr: "FR",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div className="flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/60 p-1">
      {routing.locales.map((cur) => (
        <button
          key={cur}
          onClick={() =>
            router.replace(
              // @ts-expect-error -- static pathname, params are for dynamic routes
              { pathname, params },
              { locale: cur },
            )
          }
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
            cur === locale
              ? "bg-amber-500 text-neutral-950"
              : "text-neutral-400 hover:text-neutral-100"
          }`}
          aria-current={cur === locale}
        >
          {labels[cur]}
        </button>
      ))}
    </div>
  );
}
