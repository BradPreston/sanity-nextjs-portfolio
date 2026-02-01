import { urlFor } from "@/sanity/lib/image";
import { Portfolio, Tag } from "@/sanity/types";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import TagComponent from "./tag";

// Portfolio with dereferenced tags (as returned by GROQ queries with tags[]->)
export type PortfolioExpanded = Omit<Portfolio, 'tags'> & {
  tags?: Array<Tag & { _key: string }>;
};

export default function PortfolioCard({ portfolio }: { portfolio: PortfolioExpanded }) {
  return (
    <div className="flex gap-2">
      <div className="max-w-24">
        <PortfolioImage image={portfolio.image} title={portfolio.title} />
      </div>
      <div className="w-full flex flex-col gap-2.5">
        <Link href={portfolio.slug?.source || ""}>
          <h3 className="text-lg font-medium leading-none">{portfolio.title}</h3>
        </Link>
        <p className="text-sm">{portfolio.excerpt}</p>
        <div className="flex gap-4">
          <a className="flex gap-2 items-center" target="_blank" href={portfolio.websiteUrl}>Website <FaExternalLinkAlt /></a>
          <a className="flex gap-2 items-center" target="_blank" href={portfolio.githubUrl}>GitHub <FaGithub /></a>
        </div>
        <div className="flex gap-2">
          {portfolio.tags?.map(tag => <TagComponent key={tag._id} tag={tag} />)}
        </div>
      </div>
    </div>
  )
}

function PortfolioImage({ image, title }: { image: Portfolio['image'], title?: string }) {
  if (!image) return null;

  const dimensions = {
    width: 390,
    height: 180
  }

  const imageUrl = urlFor(image).width(dimensions.width).height(dimensions.height).url();

  return (
    <Image 
      src={imageUrl}
      alt={title || 'Portfolio thumbnail'}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}