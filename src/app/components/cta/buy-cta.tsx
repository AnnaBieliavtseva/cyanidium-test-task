'use client'

import { Button } from '../ui/button'
import { useModal } from '../ui/modal-provider'

type Props = {
  source?: string
  className?: string
  variant?: React.ComponentProps<typeof Button>['variant']
  size?: React.ComponentProps<typeof Button>['size']
  full?: boolean
  children?: React.ReactNode
  rightBadge?: string
}

export function BuyCta({
  source = 'unknown',
  className,
  variant = 'gradient',
  size = 'md',
  full,
  children = 'Купить со скидкой',
  rightBadge,
}: Props) {
  const { open } = useModal()
  return (
    <Button
      variant={variant}
      size={size}
      full={full}
      className={className}
      rightBadge={rightBadge}
      onClick={() => open('purchase', { source })}
    >
      {children}
    </Button>
  )
}
