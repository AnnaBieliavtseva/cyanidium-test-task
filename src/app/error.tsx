'use client'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-semibold">Oops! Someting went wrong </h1>
      <p className="mt-2 text-white/70">{error.message}</p>
      <button
        className="mt-6 rounded-[var(--radius-xl)] border border-white/20 px-4 py-2"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
