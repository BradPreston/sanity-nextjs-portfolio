import { Tag } from "@/sanity/types";

export default function Tag({ tag }: { tag: Tag }) {
  return (
    <span className="text-secondary bg-secondary/15 px-3 py-1 text-xs rounded-full">{tag.name}</span>
  )
}