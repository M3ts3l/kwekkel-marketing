import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import BlogCard from './BlogCard'

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="section" style={{ backgroundColor: 'var(--wolk)' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 800,
                color: 'var(--inkt)',
                margin: 0,
              }}
            >
              Tips voor ouders
            </h2>
          </div>
          <Link
            href="/blog"
            style={{
              fontWeight: 800,
              fontSize: 15,
              color: 'var(--druif)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              flexShrink: 0,
            }}
          >
            Alle artikelen lezen →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
