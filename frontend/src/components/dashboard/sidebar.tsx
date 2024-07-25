import { cn } from '@/lib/utils'
import Link from 'next/link'

export type GenericDashboardSidebarProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardSidebar({
  className,
  children,
}: GenericDashboardSidebarProps) {
  return (
    <aside
      className={cn([
        'flex flex-col space-y-6 border-r border-border',
        className,
      ])}
    >
      {children}
    </aside>
  )
}

export function DashboardSidebarHeader({
  className,
  children,
}: GenericDashboardSidebarProps) {
  return (
    <header className={cn(['border-b border-border px-6 py-3', className])}>
      {children}
    </header>
  )
}

export function DashboardSidebarHeaderTitle({
  className,
  children,
}: GenericDashboardSidebarProps) {
  return <h2 className={cn(['', className])}>{children}</h2>
}

export function DashboardSidebarMain({
  className,
  children,
}: GenericDashboardSidebarProps) {
  return <main className={cn(['px-3', className])}>{children}</main>
}

export function DashboardSidebarNav({
  className,
  children,
}: GenericDashboardSidebarProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function DashboardSidebarNavHeader({
  className,
  children,
}: GenericDashboardSidebarProps) {
  return <header className={cn(['', className])}>{children}</header>
}

export function DashboardSidebarNavHeaderTitle({
  className,
  children,
}: GenericDashboardSidebarProps) {
  return (
    <div
      className={cn([
        'ml-3 text-xs uppercase text-muted-foreground',
        className,
      ])}
    >
      {children}
    </div>
  )
}

export function DashboardSidebarNavMain({
  className,
  children,
}: GenericDashboardSidebarProps) {
  return <main className={cn(['flex flex-col', className])}>{children}</main>
}

type DashboardSidebarNavLinkProps = {
  href: string
  active?: boolean
  isTargert?: boolean
}
export function DashboardSidebarNavLink({
  className,
  children,
  href,
  active,
  isTargert,
}: GenericDashboardSidebarProps<DashboardSidebarNavLinkProps>) {
  return (
    <Link
      target={isTargert ? '_blank' : '_self'}
      href={href}
      className={cn([
        'flex items-center rounded-md px-3 py-2 text-xs',
        active && 'bg-secondary',
        className,
      ])}
    >
      {children}
    </Link>
  )
}

export function DashboardSidebarFooter({
  className,
  children,
}: GenericDashboardSidebarProps) {
  return (
    <footer className={cn(['mt-auto border-t border-border p-6', className])}>
      {children}
    </footer>
  )
}
