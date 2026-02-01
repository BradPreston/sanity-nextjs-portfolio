import { Checklist } from "@/sanity/types";
import { CheckCircleIcon as OutlineCheckCircle } from "@heroicons/react/24/outline";
import { CheckCircleIcon as SolidCheckCircle  } from "@heroicons/react/24/solid";

export default function Checklist({ checklist }: { checklist: Checklist }) {
  if (!checklist.items) return null;
  return (
    <div className="grid grid-cols-3 gap-2">
      {checklist.items.map((item) => <ChecklistItem key={item._key} item={item} />)}
    </div>
  )
}

type ChecklistItem = NonNullable<Checklist['items']>[number]

function ChecklistItem({ item }: { item: ChecklistItem }) {
  return (
    <div className="flex items-center gap-2">
      {item.proficiency === "Proficient" ? (
        <SolidCheckCircle className="size-6 text-primary" />
      ) : (
        <OutlineCheckCircle className="size-6 text-primary" />
      )}
      <p className="text-sm font-medium">{item.title}</p>
    </div>
  )
}