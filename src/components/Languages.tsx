import { useTranslations } from "next-intl";

type Item = {
  name: string;
  level: string;
};

export default function Languages() {
  const t = useTranslations("languages");
  const items = t.raw("items") as Item[];

  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">
        {t("title")}
      </h3>
      <ul className="flex flex-wrap gap-6">
        {items.map((item) => (
          <li key={item.name} className="text-sm text-neutral-300">
            <span className="font-medium text-neutral-100">{item.name}</span>{" "}
            <span className="text-neutral-500">— {item.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
