'use client'

import {
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'

export function SettingsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside>
      <DashboardSidebarNav className="max-lg:hidden">
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink
            href="/settings"
            active={isActive('/settings')}
          >
            Tema
          </DashboardSidebarNavLink>
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
    </aside>
  )
}
