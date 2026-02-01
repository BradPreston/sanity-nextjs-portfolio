import Hero from "@/components/blocks/hero";
import { client } from "@/sanity/lib/client";
import { pageQuery } from "@/sanity/lib/queries"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = await client.fetch(pageQuery, { slug })
  console.log(page)
  if (!page) {
    return <div>Page not found</div>
  }
  if (page._type !== "page") {
    return <div>Page not found</div>
  }
  return (
    <div className="container mx-auto max-w-[800px] bg-dark text-light">
      {page.content?.map((block: any) => {
        switch (block._type) {
          case "hero":
            return <Hero key={block._key} {...block} />
          default:
            return null
        }
      })}
    </div>
  );
}