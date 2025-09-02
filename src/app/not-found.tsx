import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-semibold">404 — Страница не найдена</h1>
      <p className="mt-2 text-white/70">Похоже, что страница не найдена</p>
      <Link className="mt-6 inline-block underline" href="/">
        На главную
      </Link>
    </div>
  )
}
