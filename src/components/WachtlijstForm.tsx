'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function WachtlijstForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      const data = (await res.json()) as { success?: boolean; error?: string }

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Er ging iets mis. Probeer het opnieuw.')
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch {
      setErrorMsg('Geen verbinding. Controleer je internet en probeer opnieuw.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          backgroundColor: 'var(--munt-l)',
          border: '2px solid var(--munt)',
          borderRadius: 20,
          padding: '32px 28px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 12 }}>🐥</div>
        <h3
          style={{
            fontFamily: 'var(--font-baloo), Baloo 2, cursive',
            fontSize: 20,
            fontWeight: 800,
            color: 'var(--munt-d)',
            margin: '0 0 8px',
          }}
        >
          Je staat op de lijst!
        </h3>
        <p style={{ color: 'var(--munt-d)', fontWeight: 600, margin: 0 }}>
          We houden je op de hoogte van het nieuws rondom Kwekkel.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <label
          htmlFor="wachtlijst-name"
          style={{
            display: 'block',
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--inkt)',
            marginBottom: 6,
          }}
        >
          Voornaam
        </label>
        <input
          id="wachtlijst-name"
          type="text"
          placeholder="Jouw voornaam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="given-name"
        />
      </div>

      <div>
        <label
          htmlFor="wachtlijst-email"
          style={{
            display: 'block',
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--inkt)',
            marginBottom: 6,
          }}
        >
          E-mailadres <span style={{ color: 'var(--koraal)' }}>*</span>
        </label>
        <input
          id="wachtlijst-email"
          type="email"
          placeholder="jouw@email.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          style={{
            backgroundColor: 'var(--koraal-l)',
            border: '2px solid var(--koraal)',
            borderRadius: 12,
            padding: '12px 16px',
            color: 'var(--koraal-d)',
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-koraal"
        style={{
          width: '100%',
          justifyContent: 'center',
          fontSize: 17,
          opacity: status === 'loading' ? 0.7 : 1,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        {status === 'loading' ? 'Bezig...' : 'Kom op de wachtlijst 🐥'}
      </button>
    </form>
  )
}
