import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type PostCategory = 'setup' | 'records' | 'automation' | 'guides' | 'troubleshooting'

export type PostMeta = {
  slug: string
  title: string
  category: PostCategory
  episode: number
  date: string
  readingTime: string
  summary: string
  draft?: boolean
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export function getAllPostMeta(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8')
    const { data } = matter(raw)
    const fallbackSlug = file.replace(/\.mdx$/, '')
    return {
      slug: (data.slug as string) ?? fallbackSlug,
      title: (data.title as string) ?? fallbackSlug,
      category: (data.category as PostCategory) ?? 'setup',
      episode: (data.episode as number) ?? 999,
      date: (data.date as string) ?? '',
      readingTime: (data.readingTime as string) ?? '',
      summary: (data.summary as string) ?? '',
      draft: (data.draft as boolean) ?? false,
    } satisfies PostMeta
  })
}

export function getPostMeta(slug: string): PostMeta | undefined {
  return getAllPostMeta().find((p) => p.slug === slug)
}

export function getPostsByCategory(category: PostCategory): PostMeta[] {
  return getAllPostMeta()
    .filter((p) => p.category === category && !p.draft)
    .sort((a, b) => a.episode - b.episode)
}
