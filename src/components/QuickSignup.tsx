'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function QuickSignup({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p style={{
        fontWeight: 700,
        fontSize: 15,
        color: variant === 'dark' ? '#fff' : 'var(--munt-d)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        margin: 0,
      }}>
        🐥 Je staat op de wachtlijst!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <input
        type="email"
        required
        placeholder="jouw@emailadres.nl"
        value={email}
        onChange={e => setEmail(e.target.value)}
        autoComplete="email"
        style={{
          flex: 1,
          minWidth: 220,
          height: 58,
          border: variant === 'dark'
            ? '2.5px solid rgba(255,255,255,0.3)'
            : '2.5px solid var(--mist)',
          borderRadius: 16,
          padding: '0 18px',
          fontFamily: 'var(--font-nunito), Nunito, sans-serif',
          fontWeight: 600,
          fontSize: 16,
          color: 'var(--inkt)',
          background: '#fff',
          outline: 'none',
          transition: 'border-color 0.18s',
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-koraal"
        style={{
          fontSize: 16,
          padding: '0 24px',
          height: 58,
          opacity: status === 'loading' ? 0.7 : 1,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        {status === 'loading' ? 'Bezig…' : 'Wachtlijst 🐥'}
      </button>
      {status === 'error' && (
        <p style={{
          width: '100%',
          margin: 0,
          color: variant === 'dark' ? 'rgba(255,255,255,0.85)' : 'var(--koraal-d)',
          fontWeight: 700,
          fontSize: 13,
        }}>
          Er ging iets mis. Probeer het opnieuw.
        </p>
      )}
    </form>
  )
}
