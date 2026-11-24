import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WHATSAPP } from "@/lib/helpers";

export const SERVICES = ["موقع إلكتروني", "متجر إلكتروني", "تطبيق موبايل (Flutter)", "نظام إدارة أعمال", "حلول الذكاء الاصطناعي", "لست متأكداً، أحتاج استشارة"];
const schema = z.object({
  name: z.string().min(2, "اكتب اسمك (حرفان على الأقل)"),
  service: z.enum(SERVICES, { message: "اختر الخدمة التي تحتاجها" }),
  idea: z.string().min(10, "اشرح فكرتك بجملة أو جملتين على الأقل"),
});

export default function ContactForm() {
  const { register, control, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema), defaultValues: { service: SERVICES[0] } });
  const onSubmit = (v) => {
    const text = `مرحباً النيلين للبرمجيات،\nالاسم: ${v.name}\nالخدمة: ${v.service}\nالفكرة: ${v.idea}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };
  const err = (m) => m && <p role="alert" className="mt-1.5 text-sm text-red-600">{m}</p>;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-3xl border border-brand/10 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(22,53,201,.35)] sm:p-9" noValidate>
      <div><Label htmlFor="name" className="mb-2 block font-semibold">الاسم</Label><Input id="name" placeholder="اكتب اسمك" className="h-12 bg-brand-soft/40" {...register("name")} />{err(errors.name?.message)}</div>
      <div>
        <Label className="mb-2 block font-semibold">ما الخدمة التي تحتاجها؟</Label>
        <Controller control={control} name="service" render={({ field }) => (
          <Select dir="rtl" value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="h-12 w-full bg-brand-soft/40"><SelectValue /></SelectTrigger>
            <SelectContent>{SERVICES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>)} />
        {err(errors.service?.message)}
      </div>
      <div><Label htmlFor="idea" className="mb-2 block font-semibold">أخبرنا عن فكرتك</Label><Textarea id="idea" rows={5} placeholder="ما طبيعة مشروعك؟ ما المشكلة التي تريد حلها؟ لا تقلق من التفاصيل التقنية، سنساعدك." className="bg-brand-soft/40" {...register("idea")} />{err(errors.idea?.message)}</div>
      <Button type="submit" disabled={isSubmitting} className="h-14 rounded-full bg-brand pe-2 ps-6 text-base hover:bg-brand-deep">
        أرسل الطلب عبر واتساب <span className="grid size-10 place-items-center rounded-full bg-sun text-ink"><ArrowUpLeft /></span>
      </Button>
      <p className="text-sm text-mute">سيُفتح واتساب برسالة جاهزة تتضمن بياناتك، راجعها ثم أرسلها لنا. نرد عادةً خلال يوم عمل.</p>
    </form>
  );
}
