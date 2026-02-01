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
            metadata {
              dimensions
            }
          }
        }
      },
      _type == "section" => {
          ...,
          content[] {
            ...,
            _type == "reference" => @->{
              ...,
              tags[]->
            }
          }
        }
    }
  }
`

export const homePageQuery = groq`
  *[_id == "siteSettings"][0]{
    homePage->{
      content[]{
        ...,
        _type == "section" => {
          ...,
          content[] {
            ...,
            _type == "reference" => @->{
              ...,
              tags[]->
            }
          }
        }
      }
    }
  }
`