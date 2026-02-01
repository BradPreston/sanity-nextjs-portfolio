import Button from "../ui/button"
import Heading from "../ui/heading"
import { PortableText } from "@portabletext/react";
import Checklist from "../ui/checklist"
import { Section } from "@/sanity/types"
import PortfolioCard, { PortfolioExpanded } from "../ui/portfolioCard";

// Extended type to include expanded portfolio references from GROQ queries
type ExpandedPortfolioWithKey = { _key: string } & PortfolioExpanded;
type SectionContent = NonNullable<Section['content']>[number] | ExpandedPortfolioWithKey;

export default function SectionBlock({ title, content }: { title: string, content: SectionContent[] | null | undefined }) {
  return (
    <div className="flex justify-between">
      <Heading variant="h2">{title}</Heading>
      <div className="flex flex-col gap-4 max-w-[450px] w-full">
        {content?.map((block) => {
          switch (block._type) {
            case "button":
              return <Button key={block._key} label={block.label ?? ""} url={block.url ?? ""} variant={block.variant ?? "primary"} newTab={block.newTab ?? false} />
            case "checklist":
              return <Checklist key={block._key} checklist={block} />
            case "portfolio":
              return <PortfolioCard key={block._key} portfolio={block as PortfolioExpanded} />
            default:
              return <PortableText key={block._key} value={block} />;
          }
        })}
      </div>
    </div>
  )
}