import { cn } from '@/lib/utils'

export type GenericDashBoardPageProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DashBoardPage({
  className,
  children,
}: GenericDashBoardPageProps) {
  return <section className={cn(['h-screen', className])}>{children}</section>
}

export function DashBoardPageHeader({
  className,
  children,
}: GenericDashBoardPageProps) {
  return (
    <header
      className={cn([
        'flex items-center justify-between border-b border-border px-6 py-3',
        className,
      ])}
    >
      {children}
    </header>
  )
}

export function DashBoardPageHeaderTitle({
  className,
  children,
}: GenericDashBoardPageProps) {
  return (
    <span
      className={cn(['text-md uppercase text-muted-foreground', className])}
    >
      {children}
    </span>
  )
}

export function DashBoardPageHeaderNav({
  className,
  children,
}: GenericDashBoardPageProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function DashBoardPageMain({
  className,
  children,
}: GenericDashBoardPageProps) {
  return <main className={cn(['p-6', className])}>{children}</main>
}
