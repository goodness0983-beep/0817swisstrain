import Link from "next/link";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/timeline", label: "時間軸" },
  { href: "/articles", label: "文章" },
  { href: "/about", label: "關於本站" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/60 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
        >
          <span
            aria-hidden
            className="flex h-6 w-6 items-center justify-center rounded-full bg-rail text-[11px] font-mono font-bold text-paper"
          >
            瑞
          </span>
          瑞士鐵路史
        </Link>
        <nav aria-label="主導覽">
          <ul className="flex items-center gap-1 font-mono text-[13px] tracking-wide">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded px-3 py-2 text-ink/80 transition-colors hover:text-rail"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="h-[3px] w-full bg-gradient-to-r from-rail via-rail to-slate" />
    </header>
  );
}
