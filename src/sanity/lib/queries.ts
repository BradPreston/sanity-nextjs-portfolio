import { groq } from "next-sanity";

export const pagesQuery = groq`
  *[_type == "page"] {
    _id,
    _type,
    title,
    slug,
    content
  }
`

export const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    content[] {
      ...,
      _type == "hero" => {
        ...,
        image {
          ...,
          asset-> {
            ...,
            metadata {
              dimensions
            }
          }
        }
      }
    }
  }
`