import { ArrowUpLeft, Globe, ShoppingCart, Workflow, Smartphone, Bot, Search, PencilRuler, Code2, PackageCheck, Phone, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import HeroVisual from "@/components/HeroVisual";

const Go = ({ light, label = "ابدأ مشروعك", className = "" }) => (
  <a
    href="#contact"
    className={cn(
      buttonVariants(),
      "h-14 rounded-full pe-2 ps-7 text-base font-bold",
      light ? "bg-sun text-ink hover:bg-sun/90" : "bg-brand text-white hover:bg-brand-deep",
      className
    )}
  >
    {label}
    <span className={`grid size-10 place-items-center rounded-full ${light ? "bg-ink text-sun" : "bg-sun text-ink"}`}>
      <ArrowUpLeft size={20} />
    </span>
  </a>
);

const steps = [[Search, "نفهم احتياجك", "نتعرف على مشروعك والمشكلة التي تريد حلها."], [PencilRuler, "نحدد الحل", "ندرس المتطلبات ونضع تصوراً مناسباً وواضحاً."], [Code2, "نصمم ونطوّر", "نصمم الواجهات ونبرمج الحل بأحدث التقنيات."], [PackageCheck, "نختبر ونسلّم", "نراجع كل وظيفة، ثم نسلّمك مشروعاً جاهزاً للتشغيل."]];
const cards = [
  [Globe, "عميلك لا يجد خدماتك بسهولة؟", "موقع سريع وواضح يعرض نشاطك وخدماتك، فيصل إليك العميل المناسب.", "أحتاج موقعاً"],
  [ShoppingCart, "منتجاتك لا تصل إلى عملائك؟", "متجر إلكتروني بدفع وتوصيل وإدارة طلبات، يبيع لك على مدار الساعة.", "أحتاج متجراً"],
  [Workflow, "عملك يستنزف وقتك؟ أو نظامك لم يعد كافياً؟", "نبني لك نظاماً جديداً، أو نطوّر القائم ونضيف إليه ما ينقصه.", "أحتاج نظاماً"],
  [Bot, "تريد الاستفادة من الذكاء الاصطناعي؟", "أدوات ذكية تختصر المهام المتكررة وتحسّن خدمة عملائك.", "حلول الذكاء الاصطناعي"],
];

function Card({ c: [I, q, a, l], i }) {
  return (
    <Reveal delay={i * 0.08} className="h-full">
      <a href="#contact" className="group flex h-full flex-col rounded-[1.75rem] border border-brand/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-[0_24px_50px_-24px_rgba(22,53,201,.5)]">
        <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white"><I size={26} /></span>
        <h3 className="mt-6 text-xl font-extrabold leading-snug">{q}</h3>
        <p className="mt-2 flex-1 leading-8 text-mute">{a}</p>
        <span className="mt-6 flex items-center gap-2 font-bold text-brand">{l}<ArrowUpLeft size={18} className="transition group-hover:-translate-x-1 group-hover:-translate-y-1" /></span>
      </a>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip">
      {/* Hero */}
      <section className="grid-bg relative pb-20 pt-32 text-white lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="rise inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm"><Smartphone size={16} className="text-sun" />نبني مواقع الويب وتطبيقات الموبايل بفلاتر</p>
            <h1 className="rise mt-6 font-display text-5xl font-black leading-[1.3] sm:text-7xl" style={{ "--d": ".1s" }}>كن من رواد التحول الرقمي في السودان</h1>
            <p className="rise mt-6 max-w-lg text-lg leading-9 text-white/75" style={{ "--d": ".25s" }}>نحوّل فكرتك إلى موقع أو نظام أو تطبيق موبايل جاهز للتشغيل، يخدم عملاءك ويساعد عملك على النمو.</p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ "--d": ".4s" }}>
              <Go light />
              <a
                href="#solutions"
                className={cn(buttonVariants({ variant: "outline" }), "h-14 rounded-full border-white/30 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white")}
              >
                استكشف حلولنا
              </a>
            </div>
            <p className="rise mt-5 text-sm text-white/60" style={{ "--d": ".55s" }}>لا تحتاج إلى معرفة التفاصيل التقنية. أخبرنا بما تريد وسنجد لك الحل.</p>
          </div>
          <div className="rise" style={{ "--d": ".3s" }}><HeroVisual /></div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
        <Reveal><h2 className="max-w-2xl font-display text-4xl font-black leading-[1.35] sm:text-5xl">ما الذي تريد تغييره في طريقة عملك؟</h2>
          <p className="mt-4 max-w-xl leading-8 text-mute">اختر ما يشبه حالتك، ونحن نبدأ من هناك.</p></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <a href="#contact" className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#1635c9,#07103a)] p-8 text-white">
              <Smartphone className="absolute -start-6 -top-6 size-72 -rotate-12 text-white/10 transition duration-500 group-hover:rotate-0" strokeWidth={1} />
              <span className="mb-4 w-fit rounded-full bg-sun px-3 py-1 text-sm font-bold text-ink">تخصصنا</span>
              <h3 className="font-display text-3xl font-black leading-snug">لديك فكرة تريد تحويلها إلى تطبيق؟</h3>
              <p className="mt-3 max-w-md leading-8 text-white/75">نبني مواقع وتطبيقات أندرويد وiOS  : تجربة سلسة، وتكلفة أقل، ووقت تسليم أقصر.</p>
              <span className="mt-6 flex items-center gap-2 font-bold text-sun">لدي فكرة تطبيق<ArrowUpLeft size={18} className="transition group-hover:-translate-x-1 group-hover:-translate-y-1" /></span>
            </a>
          </Reveal>
          {cards.map((c, i) => <Card key={c[1]} c={c} i={i + 1} />)}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-3 scroll-mt-16 rounded-[2.5rem] bg-ink px-5 py-24 text-white sm:mx-6">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="font-display text-4xl font-black sm:text-5xl">من احتياجك إلى الحل المناسب</h2>
            <p className="mt-4 text-white/65">أربع خطوات واضحة تنقلك من الفكرة إلى منتج يعمل.</p></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {steps.map(([I, t, d], i) => (
              <Reveal key={t} delay={i * 0.12}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
                  <span className="absolute -top-3 end-4 font-display text-8xl font-black text-white/5">{i + 1}</span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-sun text-ink"><I size={22} /></span>
                  <h3 className="mt-5 text-xl font-extrabold">{t}</h3>
                  <p className="mt-2 leading-8 text-white/65">{d}</p>
                </div>
              </Reveal>))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="mx-auto grid grid-cols-1 max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl font-black leading-[1.4] sm:text-5xl">النيلين للبرمجيات، <span className="text-brand">شريكك في تطوير أعمالك</span></h2>
          <p className="mt-5 leading-9 text-mute">نصمم ونطوّر حلولاً برمجية تساعد الأفراد والشركات والمؤسسات على الاستفادة من التقنية. نجمع بين تصميم الواجهات والتطوير البرمجي، ونبدأ دائماً بفهم احتياجك قبل تحديد الحل.</p>
          <p className="mt-4 border-s-4 border-sun ps-4 font-semibold leading-9 text-brand">الحل الناجح ليس الأكثر تعقيداً، بل الأكثر قدرة على معالجة مشكلة حقيقية وتقديم تجربة واضحة وقابلة للتطوير.</p>
          <div className="mt-8"><Go /></div>
        </Reveal>
        <div className="">
        <Reveal delay={0.15}>
          <div dir="ltr" className="overflow-hidden rounded-3xl bg-[#0a1233] shadow-[0_40px_80px_-30px_rgba(10,18,51,.7)]">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-5 py-3"><i className="size-2.5 rounded-full bg-red-400" /><i className="size-2.5 rounded-full bg-sun" /><i className="size-2.5 rounded-full bg-green-400" /><span className="ms-3 text-xs text-white/50">main.dart</span></div>
            <pre className="overflow-x-auto p-6 font-mono text-[11px] md:text-[13px] leading-7 text-white/80"><code>{`class AlnileinApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Your idea',
      home: const `}<span className="text-sun">{"YourBusiness"}</span>{`(),
    );
  }
}`}</code></pre>
          </div>
        </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto grid max-w-6xl scroll-mt-16 gap-10 px-5 pb-24 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <h2 className="font-display text-4xl font-black leading-[1.35] sm:text-5xl">لديك فكرة أو مشكلة تريد حلها؟</h2>
          <p className="mt-5 leading-9 text-mute">سواء كنت تبدأ مشروعاً جديداً أو تريد تطوير عملك الحالي، شاركنا فكرتك أو التحدي الذي تواجهه، وسنرد عليك بالخطوة المناسبة.</p>
          <div className="mt-8 space-y-3">
            <a href="https://wa.me/249112304780" className="flex items-center gap-3 font-semibold hover:text-brand"><span className="grid size-11 place-items-center rounded-full bg-green-500 text-white"><MessageCircle size={20} /></span><span dir="ltr">+249 112304780</span></a>
            <a href="tel:+249112304780" className="flex items-center gap-3 font-semibold hover:text-brand"><span className="grid size-11 place-items-center rounded-full bg-brand text-white"><Phone size={20} /></span>اتصل بنا مباشرة</a>
          </div>
        </Reveal>
        <Reveal delay={0.1}><ContactForm /></Reveal>
      </section>
    </main>
  );
}
