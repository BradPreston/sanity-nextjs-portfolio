import Hero from "@/components/blocks/hero";
import SectionBlock from "@/components/blocks/section";
import { sanityFetch } from "@/sanity/lib/live";
import { homePageQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: page } = await sanityFetch({
    query: homePageQuery,
  });

  return page?.homePage?.content ? (
    <div className="container flex flex-col mx-auto max-w-[800px] bg-dark text-light gap-24 py-16">
      {page.homePage.content?.map((block: any) => {
        switch (block._type) {
          case "hero":
            return <Hero key={block._key} {...block} />
          case "section":
            return <SectionBlock key={block._key} {...block} />
          default:
            return null
        }
      })}
    </div>
  ) : null;
}