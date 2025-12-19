import { cn } from "@/lib/utils/cn";
import Link from "next/link";

  type ButtonProps = {
  label: string;
  url: string;
  variant: "primary" | "outline";
  newTab: boolean;
}

export default function Button({ label, url, variant, newTab }: ButtonProps) {
  return (
    <Link href={url} target={newTab ? "_blank" : "_self"} className={cn("inline-flex items-center justify-center py-1 px-5 transition-colors border-2 border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full hover:bg-primary-hover hover:text-primary", variant === "primary" && "bg-primary text-dark", variant === "outline" && "bg-dark text-primary")}>
      {label}
    </Link>
  )
}