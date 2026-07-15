import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "./Section";

type Item = {
  period: string;
  degree: string;
  institution: string;
  image?: string;
  video?: string;
};

const IMAGE_DIMENSIONS: Record<string, [number, number]> = {
  "/certificates/caterpillar.png": [1188, 918],
  "/photos/onshape-setup.jpg": [3310, 3072],
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
            className={`rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 ${
              item.image || item.video ? "sm:col-span-2" : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-wide text-amber-500">
              {item.period}
            </p>
            <h3 className="mt-1 font-semibold text-neutral-100">{item.degree}</h3>
            <p className="text-sm text-neutral-400">{item.institution}</p>
            {item.image && (
              <Image
                src={item.image}
                alt={item.degree}
                width={IMAGE_DIMENSIONS[item.image]?.[0] ?? 1200}
                height={IMAGE_DIMENSIONS[item.image]?.[1] ?? 900}
                className="mt-4 h-auto w-full max-w-xl rounded-lg border border-neutral-800"
              />
            )}
            {item.video && (
              <video
                src={item.video}
                controls
                playsInline
                preload="metadata"
                className="mt-4 h-auto w-full max-w-xl rounded-lg border border-neutral-800"
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
