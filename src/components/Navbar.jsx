import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpLeft, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";const links = [["الرئيسية", "#top"], ["حلولنا", "#solutions"], ["كيف نعمل", "#process"], ["تواصل معنا", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(scrollY > 10); f(); addEventListener("scroll", f); return () => removeEventListener("scroll", f); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/90 text-ink backdrop-blur border-b border-brand/10" : "bg-transparent text-white"}`}>
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Link to="/" className="leading-tight">
          <span className="block font-display text-xl font-black">النيلين للبرمجيات</span>
          <span className="block text-[11px] font-semibold tracking-wide opacity-80">ALNILEIN SOFTWAER</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map(([t, h]) => <a key={h} href={h} className="text-sm font-medium opacity-80 transition hover:opacity-100">{t}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={cn(buttonVariants(), "hidden h-10 rounded-full bg-sun pe-2 ps-5 text-ink hover:bg-sun/90 sm:inline-flex")}
          >
            ابدأ مشروعك
            <span className="grid size-7 place-items-center rounded-full bg-ink text-sun">
              <ArrowUpLeft size={16} />
            </span>
          </a>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="القائمة">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav className="flex flex-col gap-1 border-t bg-white px-5 py-3 md:hidden">
        {links.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 font-medium">{t}</a>)}
      </nav>}
    </header>
  );
}
