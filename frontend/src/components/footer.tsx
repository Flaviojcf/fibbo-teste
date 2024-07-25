import { cn } from '@/lib/utils'
import Link from 'next/link'

export type GenericHomePageFooterProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function HomePageFooter({
  className,
  children,
}: GenericHomePageFooterProps) {
  return (
    <footer
      className={cn([
        'bottom-0 mt-8 flex w-full items-center justify-between border-t border-border py-8',
        className,
      ])}
    >
      {children}
    </footer>
  )
}

export function HomePageFooterRef({
  className,
  children,
}: GenericHomePageFooterProps) {
  return (
    <span className={cn(['text-xs text-gray-500', className])}>{children}</span>
  )
}

export function HomePageFooterDivLink({
  className,
  children,
}: GenericHomePageFooterProps) {
  return (
    <div className={cn(['flex items-center gap-4', className])}>{children}</div>
  )
}

type HomePageFooterLinkProps = {
  href: string
}

export function HomePageFooterLink({
  className,
  children,
  href,
}: GenericHomePageFooterProps<HomePageFooterLinkProps>) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn([
        'flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-gray-900',
        className,
      ])}
    >
      {children}
    </Link>
  )
}
