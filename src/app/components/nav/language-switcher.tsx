'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowIcon } from '../icons/Arrow'
import { LANGS } from './items'

export function LanguageSwitcher({
  onChange,
  initial = 'ru',
  className = '',
}: {
  onChange?: (code: string) => void
  initial?: 'ru' | 'uk' | 'en'
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [code, setCode] = useState<typeof initial>(initial)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (open && ref.current && !ref.current.contains(e.target as Node))
        setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex cursor-pointer items-center py-1 gap-1 rounded-[var(--radius-xl)] h-5 md:h-7 w-11 md:w-12 text-xs lg:text-base text-white hover:bg-white/10"
      >
        <p>{LANGS.find((l) => l.code === code)?.label}</p>
        <ArrowIcon />
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute right-0 z-50 mt-1 min-w-[80px] overflow-hidden rounded-[var(--radius-xl)] border border-white/15 bg-black/70 p-1 backdrop-blur"
        >
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={code === l.code}
                onClick={() => {
                  setCode(l.code)
                  setOpen(false)
                  onChange?.(l.code)
                }}
                className="w-full rounded-md px-2 py-1 text-left text-xs text-white hover:bg-white/10"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
