import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-semibold">404 — Page not found</h1>
      <p className="mt-2 text-white/70">Oops, it seems that there is no page</p>
      <Link className="mt-6 inline-block underline" href="/">
        Go back
      </Link>
    </div>
  )
}
