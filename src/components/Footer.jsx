import { Phone, Mail, MessageCircle } from "lucide-react";

const Facebook = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.3-1.6 1.7-1.6H17V3.9c-.3 0-1.3-.1-2.4-.1-2.5 0-4.1 1.5-4.1 4.2v2.5H7.7v3.3h2.8V22h3z" />
  </svg>
);

const contact = [
  [Phone, "+249993553610", "tel:+249993553610"],
  [Mail, "info@Alnileinsoftware.com", "mailto:info@Alnileinsoftware.com"],
  [Facebook, "ALNILEINSOFTWARE", "#"],
  [MessageCircle, "+249993553610", "https://wa.me/249993553610"],
];
const links = [["الرئيسية", "#top"], ["حلولنا", "#solutions"], ["كيف نعمل", "#process"], ["تواصل معنا", "#contact"]];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-black text-white">النيلين للبرمجيات</p>
          <p className="mt-1 text-sm font-semibold">ALNILEIN SOFTWAER</p>
          <p className="mt-4 max-w-sm leading-8 text-white/70">نبني مواقع ويب وتطبيقات موبايل بفلاتر، وننقل أعمالك من الفكرة إلى منتج رقمي يعمل بثقة.</p>
        </div>
        <div>
          <h3 className="mb-4 font-bold">روابط الموقع</h3>
          <ul className="space-y-2 text-white/70">
            {links.map(([t, h]) => <li key={h}><a href={h} className="hover:text-sun">{t}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">تواصل معنا</h3>
          <ul className="space-y-3">
            {contact.map(([I, t, h]) => (
              <li key={t + h}>
                <a href={h} className="flex items-center gap-3 text-white/70 hover:text-sun" dir="ltr"><I size={18} className="text-sun" />{t}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-sm text-white/70">© 2026 ALNILEIN SOFTWARE. جميع الحقوق محفوظة.</p>
    </footer>
  );
}