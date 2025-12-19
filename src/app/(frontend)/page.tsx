import { client } from "@/sanity/lib/client"
import { pagesQuery } from "@/sanity/lib/queries"
import { Page } from "@/sanity/types"
import Link from "next/link"

export default async function Page() {
  const pages = await client.fetch(pagesQuery)
  return (
    <div className="container mx-auto bg-dark text-light">
      <h1>Pages</h1>
      <ul>
        {pages.map((page: Page) => (
          <li key={page._id}>
            <Link href={page.slug?.current ?? ""}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}