import { cn } from '@/lib/utils'

type Props = React.ComponentProps<'div'> & {
  bleed?: boolean
}

export function Container({ className, bleed = false, ...props }: Props) {
  return (
    <div
      className={cn(
       
        bleed ? 'w-full' : 'mx-auto w-full max-w-screen-2xl px-10 md:px-6 lg:px-20', 
        className,
      )}
      {...props}
    />
  )
}
