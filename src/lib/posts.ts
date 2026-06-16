import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  focusKeyword?: string
}

export interface Post extends PostMeta {
  content: string
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace('.md', ''))
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const file = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf8')
      const { data } = matter(file)
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: String(data.date),
        focusKeyword: data.focusKeyword as string | undefined,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const file = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf8')
  const { data, content } = matter(file)

  const { remark } = await import('remark')
  const remarkHtml = await import('remark-html')
  const processed = await remark().use(remarkHtml.default).process(content)

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: String(data.date),
    focusKeyword: data.focusKeyword as string | undefined,
    content: processed.toString(),
  }
}
