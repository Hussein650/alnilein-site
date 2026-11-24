import { useReveal } from "@/lib/helpers";
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}s` }}>{children}</div>;
}
