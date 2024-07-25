'use client'
import {
  DesktopIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
  MixerVerticalIcon,
} from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from '@/components/dashboard/sidebar'

export function MainDashboardSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo />
      </DashboardSidebarHeader>

      <DashboardSidebarMain className="flex flex-grow flex-col">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/" active={isActive('/')}>
              <HomeIcon className="mr-3 h-3 w-3" />
              Produtos
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/settings"
              active={isActive('/settings')}
            >
              <MixerVerticalIcon className="mr-3 h-3 w-3" />
              Configurações
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto max-lg:hidden">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle className="text-bold">
              Links extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink
              isTargert
              href="https://github.com/Flaviojcf"
              className="gap-2 text-xs text-gray-500 hover:text-gray-900 dark:text-white"
            >
              <GitHubLogoIcon />
              Github
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              isTargert
              href="https://www.linkedin.com/in/flaviojcf"
              className="gap-2 text-xs text-gray-500 hover:text-gray-900 dark:text-white"
            >
              <LinkedInLogoIcon />
              Linkedin
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              isTargert
              href="https://flaviojcf.vercel.app/"
              className="gap-2 text-xs text-gray-500 hover:text-gray-900 dark:text-white"
            >
              <DesktopIcon />
              Portfólio
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter className="dark:text-white max-lg:hidden">
        ©2024 Flaviojcf
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}
