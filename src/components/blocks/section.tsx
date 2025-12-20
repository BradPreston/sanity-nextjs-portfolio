import Button from "../ui/button"
import Heading from "../ui/heading"
import { PortableText } from "@portabletext/react";
import Checklist from "../ui/checklist"
import { Section } from "@/sanity/types"

export default function Section({ title, content }: { title: string, content: Section['content'] }) {
  return (
    <div className="flex justify-between">
      <Heading variant="h2">{title}</Heading>
      <div className="flex flex-col gap-4 max-w-[450px]">
        {content?.map((block) => {
          switch (block._type) {
            case "button":
              return <Button key={block._key} label={block.label ?? ""} url={block.url ?? ""} variant={block.variant ?? "primary"} newTab={block.newTab ?? false} />
            case "checklist":
              return <Checklist key={block._key} checklist={block} />
            default:
              return <PortableText key={block._key} value={block} />;
          }
        })}
      </div>
    </div>
  )
}