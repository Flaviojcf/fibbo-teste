import {
  DashBoardPage,
  DashBoardPageHeader,
  DashBoardPageHeaderTitle,
  DashBoardPageMain,
} from '@/components/dashboard/page'
import { PropsWithChildren } from 'react'
import { SettingsSidebar } from './_components/settings-sidebar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashBoardPage>
      <DashBoardPageHeader className="max-lg:justify-center">
        <DashBoardPageHeaderTitle className="dark:text-white">
          Configurações
        </DashBoardPageHeaderTitle>
      </DashBoardPageHeader>
      <DashBoardPageMain>
        <div className="max-w-[800px]">
          <div className="grid grid-cols-[10rem_1fr] gap-12 max-lg:flex max-lg:flex-col max-lg:gap-2">
            <SettingsSidebar />
            <div>{children}</div>
          </div>
        </div>
      </DashBoardPageMain>
    </DashBoardPage>
  )
}
