import { cn } from '@/lib/utils'
export function Container({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1200px] px-4', className)}
      {...props}
    />
  )
}
