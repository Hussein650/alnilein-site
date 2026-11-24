import { useEffect, useRef, useState } from "react";
import { Check, Smartphone, Home, Search, ShoppingBag, User } from "lucide-react";

const bars = [38, 56, 44, 70, 52, 86, 64];
const tiles = ["bg-sun/80", "bg-brand-soft", "bg-brand-soft", "bg-sun/50"];

export default function HeroVisual() {
  const box = useRef(null);
  const [s, setS] = useState(1);

  useEffect(() => {
    if (!box.current) return;
    const ro = new ResizeObserver(([e]) => setS(Math.min(1, e.contentRect.width / 560)));
    ro.observe(box.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* نسخة الشاشات الأكبر: تتصغر تلقائياً حسب العرض */}
      <div ref={box} dir="ltr" className="relative mx-auto w-full max-w-[560px]" style={{ height: 470 * s }}>
        <div className="absolute left-0 top-0 h-[470px] w-[560px] origin-top-left" style={{ transform: `scale(${s})` }}>
          <div className="absolute inset-x-10 top-10 h-[380px] rounded-full bg-sun/20 blur-3xl" />

          {/* browser */}
          <div className="float absolute left-0 top-10 w-[400px] overflow-hidden rounded-2xl bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,.5)]">
            <div className="flex items-center gap-1.5 bg-[#eef2ff] px-4 py-3">
              <i className="size-2.5 rounded-full bg-red-400" /><i className="size-2.5 rounded-full bg-sun" /><i className="size-2.5 rounded-full bg-green-400" />
              <span className="ms-3 h-5 flex-1 rounded-full bg-white" />
            </div>
            <div className="flex h-[250px]">
              <div className="flex w-14 flex-col items-center gap-3 bg-brand py-4">
                {[0, 1, 2, 3].map(i => <span key={i} className={`size-7 rounded-lg ${i === 0 ? "bg-sun" : "bg-white/25"}`} />)}
              </div>
              <div className="flex-1 p-4">
                <div className="mb-3 h-3 w-24 rounded bg-ink/80" />
                <div className="grid grid-cols-3 gap-2">
                  {["bg-brand-soft", "bg-sun/70", "bg-brand-soft"].map((c, i) => (
                    <div key={i} className={`h-14 rounded-xl p-2 ${c}`}><div className="h-2 w-8 rounded bg-ink/30" /><div className="mt-2 h-3 w-12 rounded bg-ink/70" /></div>
                  ))}
                </div>
                <div className="mt-4 flex h-24 items-end gap-2">
                  {bars.map((h, i) => <span key={i} className="bar flex-1 rounded-t-md bg-brand" style={{ height: `${h}%`, opacity: 0.45 + i * 0.09, "--d": `${0.5 + i * 0.08}s` }} />)}
                </div>
              </div>
            </div>
          </div>

          {/* phone */}
          <div className="float absolute bottom-0 right-2 h-[380px] w-[190px] rounded-[2.4rem] border-[7px] border-[#0a1233] bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,.6)]" style={{ "--d": "-2.5s" }}>
            <div className="mx-auto mt-2 h-4 w-16 rounded-full bg-[#0a1233]" />
            <div className="px-3 pt-3">
              <div className="h-16 rounded-2xl bg-gradient-to-br from-brand to-[#3b5bff] p-3"><div className="h-2 w-14 rounded bg-white/70" /><div className="mt-2 h-3 w-20 rounded bg-sun" /></div>
              <div className="mt-3 flex items-center gap-2 rounded-full bg-brand-soft px-3 py-2"><Search size={13} className="text-brand" /><span className="h-2 w-14 rounded bg-ink/20" /></div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {tiles.map((c, i) => (
                  <div key={i} className="rounded-xl border border-brand/10 p-1.5"><div className={`h-14 rounded-lg ${c}`} /><div className="mt-1.5 h-2 w-12 rounded bg-ink/60" /><div className="mt-1 h-2 w-8 rounded bg-brand/60" /></div>
                ))}
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-around rounded-b-[2rem] border-t bg-white py-3 text-mute"><Home size={18} className="text-brand" /><ShoppingBag size={18} /><User size={18} /></div>
          </div>

          {/* chips */}
          <div className="float absolute right-0 top-2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl" style={{ "--d": "-4s" }}>
            <span className="grid size-9 place-items-center rounded-full bg-green-500 text-white"><Check size={18} /></span>
            <span dir="rtl" className="text-sm font-bold text-ink">طلب جديد وصل</span>
          </div>
          <div className="float absolute bottom-16 left-6 flex items-center gap-2 rounded-2xl bg-sun px-4 py-3 font-extrabold text-ink shadow-2xl" style={{ "--d": "-1s" }}>
            <Smartphone size={18} />Flutter
          </div>
        </div>
      </div>
    </>
  );
}