import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug)
    return {
      title: post.title,
      description: post.description,
    }
  } catch {
    return {}
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  let post
  try {
    post = await getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: 'var(--druif)',
          padding: '48px 0 56px',
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 24,
              fontSize: 13,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            <Link
              href="/"
              className="breadcrumb-link"
              style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}
            >
              Home
            </Link>
            <span aria-hidden="true">›</span>
            <Link
              href="/blog"
              className="breadcrumb-link"
              style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}
            >
              Blog
            </Link>
            <span aria-hidden="true">›</span>
            <span
              style={{
                color: 'rgba(255,255,255,0.9)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: 280,
              }}
            >
              {post.title}
            </span>
          </nav>

          <h1
            style={{
              fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              fontSize: 'clamp(24px, 4.5vw, 44px)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 16px',
              lineHeight: 1.15,
              maxWidth: 760,
            }}
          >
            {post.title}
          </h1>

          <time
            dateTime={post.date}
            style={{
              display: 'block',
              color: 'rgba(255,255,255,0.65)',
              fontWeight: 700,
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {formatDate(post.date)}
          </time>
        </div>
      </section>

      {/* Article */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              maxWidth: 760,
              margin: '0 auto',
            }}
          >
            <article
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: 'var(--inkt)',
              }}
            />

            {/* CTA blok */}
            <div
              style={{
                marginTop: 64,
                backgroundColor: 'var(--druif-l)',
                border: '2px solid var(--druif)',
                borderRadius: 24,
                padding: '40px 36px',
                textAlign: 'center',
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <img src="/kwekkel-logo.svg" alt="Kwekkel" width={64} height={64} style={{ borderRadius: 14, display: 'block', margin: '0 auto' }} />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                  fontSize: 24,
                  fontWeight: 800,
                  color: 'var(--druif-d)',
                  margin: '0 0 10px',
                }}
              >
                Klaar om Kwekkel te proberen?
              </h2>
              <p
                style={{
                  color: 'var(--grijs)',
                  fontSize: 15,
                  fontWeight: 600,
                  margin: '0 0 24px',
                  maxWidth: 400,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Veilig chatten en bellen voor je kind — gebouwd in Nederland, geen advertenties.
              </p>
              <Link href="/aanmelden" className="btn btn-koraal">
                Kom op de wachtlijst 🐥
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
