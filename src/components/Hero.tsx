import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-amber-500/60 bg-neutral-900 sm:h-40 sm:w-40">
          <Image
            src="/profile.svg"
            alt="Vidal Djona Fopa"
            fill
            sizes="160px"
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-amber-500">
            {t("greeting")}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-50 sm:text-5xl">
            {t("name")}
          </h1>
          <p className="mt-3 text-lg text-neutral-300">{t("role")}</p>
          <p className="mt-4 max-w-xl text-neutral-400">{t("tagline")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href="#contact"
              className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-400"
            >
              {t("ctaContact")}
            </a>
            <a
              href="/cv.pdf"
              download
              className="rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-amber-500 hover:text-amber-400"
            >
              {t("ctaCv")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
