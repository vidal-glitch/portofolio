export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-neutral-900 py-16 first:border-t-0">
      <div className="mx-auto max-w-5xl px-6">
        {title && (
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-neutral-100">
            <span className="text-amber-500">#</span> {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
