export function AuroraBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div
        className="animate-aurora absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.62 0.28 295 / 0.55), transparent 70%)" }}
      />
      <div
        className="animate-aurora absolute top-20 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.66 0.26 350 / 0.45), transparent 70%)", animationDelay: "-6s" }}
      />
      <div
        className="animate-aurora absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.6 0.22 260 / 0.4), transparent 70%)", animationDelay: "-12s" }}
      />
    </div>
  );
}
