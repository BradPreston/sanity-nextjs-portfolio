import { PageQueryResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Button from "../ui/button";
import Heading from "../ui/heading";

type HeroProps = Extract<
  NonNullable<NonNullable<PageQueryResult>["content"]>[number],
  { _type: "hero" }
>;

export default function Hero({ title, description, image, buttons }: HeroProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2 max-w-[400px]">
        <Heading variant="h1">{title}</Heading>
        <p className="text-base text-light">{description}</p>
        <div className="flex items-center gap-3 pt-3">
          {buttons?.map((button) => (
            <Button key={button._key} label={button.label ?? ""} url={button.url ?? ""} variant={button.variant ?? "primary"} newTab={button.newTab ?? false} />
          ))}
        </div>
      </div>
      {image && (
        <Image 
          loading="eager" 
          fetchPriority="high" 
          src={urlFor(image).url()} 
          alt={title ?? ""} 
          width={350} 
          height={350}
          className="w-full max-w-[350px] h-auto aspect-square object-cover rounded-full large-shadow"
        />
      )}
      
    </div>
  )
}