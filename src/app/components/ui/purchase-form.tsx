'use client'
import * as React from 'react'
import * as yup from 'yup'
import { Field, Label } from './field'
import { Input } from './input'
import { Button } from './button'
import { toast } from 'sonner'

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Введите имя (минимум 2 символа)')
    .required('Имя обязательно'),
  telegram: yup
    .string()
    .trim()
    .test(
      'tg',
      'Ник должен начинаться с @ и быть не короче 4 символов',
      (v) => !v || /^@[\w._]{3,}$/.test(v),
    ),
  email: yup
    .string()
    .trim()
    .email('Неверный email')
    .required('Email обязателен'),
})

type Values = yup.InferType<typeof schema>

export function PurchaseForm({ onDone }: { onDone?: () => void }) {
  const [loading, setLoading] = React.useState(false)
  const [values, setValues] = React.useState<Values>({
    name: '',
    telegram: '',
    email: '',
  })
  const [errors, setErrors] = React.useState<
    Partial<Record<keyof Values, string>>
  >({})

  const setField =
    (field: keyof Values) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value
      setValues((s) => ({ ...s, [field]: v }))
    }

  const validateField = async (field: keyof Values) => {
    try {
      await schema.validateAt(field as string, values)
      setErrors((e) => ({ ...e, [field]: undefined }))
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setErrors((e) => ({ ...e, [field]: err.message }))
      }
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      await schema.validate(values, { abortEarly: false })
      setErrors({})
      await new Promise((r) => setTimeout(r, 900))
      toast.success('Спасибо! Мы скоро с вами свяжемся.')
      onDone?.()
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const map: Partial<Record<keyof Values, string>> = {}
        for (const issue of err.inner) {
          if (issue.path && !map[issue.path as keyof Values]) {
            map[issue.path as keyof Values] = issue.message
          }
        }
        setErrors(map)
      } else {
        toast.error('Не удалось отправить форму. Попробуйте позже.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="md:[max-h-491px] mx-auto flex items-center h-full w-full max-w-[410px] flex-col justify-between px-6 pt-[157px] pb-8 md:rounded-[28px] md:border-[var(--color-logo-dark)] md:pt-[90px] md:pb-[73px] md:shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)]"
    >
      <div className="md:-w-[310px]">
        <h3 className="mb-6 text-center text-2xl font-extrabold tracking-tight uppercase md:mb-9">
          УКАЖИТЕ СВОИ ДАННЫЕ
        </h3>

        <div className="mb-[40px] flex flex-col gap-[18px]">
          <Field>
            <Label htmlFor="name" className="sr-only">
              Имя
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Имя"
              value={values.name}
              onChange={setField('name')}
              onBlur={() => validateField('name')}
              error={errors.name}
              size="md"
            />
          </Field>

          <Field>
            <Label htmlFor="tg" className="sr-only">
              Ник Telegram
            </Label>
            <Input
              id="tg"
              name="telegram"
              placeholder="Ник Telegram"
              value={values.telegram ?? ''}
              onChange={setField('telegram')}
              onBlur={() => validateField('telegram')}
              error={errors.telegram}
              size="md"
            />
          </Field>

          <Field>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={values.email}
              onChange={setField('email')}
              onBlur={() => validateField('email')}
              error={errors.email}
              size="md"
            />
          </Field>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          variant="modal"
          size="lg"
          className="h-[50px] w-[310px] rounded-[10px]"
          full
          loading={loading}
        >
          Отправить
        </Button>
      </div>
    </form>
  )
}
