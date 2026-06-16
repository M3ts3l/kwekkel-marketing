import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Praktische tips voor ouders over veilig chatten, schermtijd en de digitale wereld van kinderen van 6–11 jaar.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: 'var(--druif)',
          padding: '64px 0 72px',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1
            style={{
              fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 12px',
            }}
          >
            Tips voor ouders
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: 17,
              fontWeight: 600,
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            Alles over veilig chatten, schermtijd en de digitale wereld van je kind.
          </p>
        </div>
      </section>

      {/* Artikelen */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 28,
            }}
          >
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
