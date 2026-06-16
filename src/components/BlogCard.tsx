import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

interface BlogCardProps {
  post: PostMeta
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: '28px 28px 24px',
        boxShadow: '0 4px 20px rgba(43, 43, 64, 0.07)',
        border: '1px solid var(--mist)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 8px 28px rgba(43, 43, 64, 0.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = '0 4px 20px rgba(43, 43, 64, 0.07)'
      }}
    >
      <time
        dateTime={post.date}
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: 'var(--grijs)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        {formatDate(post.date)}
      </time>

      <h3
        style={{
          fontFamily: 'var(--font-baloo), Baloo 2, cursive',
          fontSize: 18,
          fontWeight: 800,
          color: 'var(--inkt)',
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {post.title}
      </h3>

      <p
        style={{
          fontSize: 14,
          color: 'var(--grijs)',
          lineHeight: 1.65,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {post.description}
      </p>

      <Link
        href={`/blog/${post.slug}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          color: 'var(--druif)',
          fontWeight: 800,
          fontSize: 14,
          textDecoration: 'none',
          marginTop: 4,
          transition: 'gap 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.gap = '8px')}
        onMouseLeave={(e) => (e.currentTarget.style.gap = '4px')}
      >
        Lees meer →
      </Link>
    </article>
  )
}
