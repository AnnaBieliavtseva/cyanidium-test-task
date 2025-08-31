'use client'
import * as React from 'react'
import { Field, Label } from './field'
import { Input } from './input'
import { Button } from './button'

export function PurchaseForm({ onDone }: { onDone?: () => void }) {
  const [loading, setLoading] = React.useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      // TODO: отправка на API/Telegram/Forms
      await new Promise((r) => setTimeout(r, 900))
      onDone?.()
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-2 w-full max-w-md space-y-3"
    >
      <h3 className="mb-2 text-center text-lg font-extrabold uppercase">
        УКАЖИТЕ СВОИ ДАННЫЕ
      </h3>

      <Field>
        <Label htmlFor="name">Имя</Label>
        <Input id="name" name="name" placeholder="Имя" required />
      </Field>

      <Field>
        <Label htmlFor="tg">Ник Telegram</Label>
        <Input id="tg" name="telegram" placeholder="@nickname" />
      </Field>

      <Field>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="mail@domain.com"
          required
        />
      </Field>

      <div className="pt-2">
        <Button type="submit" variant="light" size="xl" full loading={loading}>
          Отправить
        </Button>
      </div>
    </form>
  )
}
