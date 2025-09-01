export default function Loading() {
  return (
    <div className="bg-background/60 fixed inset-0 z-[100] grid place-items-center backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="sr-only">Loading…</span>
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        <p className="text-sm text-white/90">Загружаем страницу…</p>
      </div>
    </div>
  )
}
