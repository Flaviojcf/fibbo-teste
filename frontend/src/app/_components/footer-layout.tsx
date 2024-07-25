import {
  HomePageFooter,
  HomePageFooterDivLink,
  HomePageFooterLink,
  HomePageFooterRef,
} from '@/components/footer'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DesktopIcon,
} from '@radix-ui/react-icons'

export function FooterLayout() {
  return (
    <HomePageFooter className="hidden px-8 max-lg:flex max-sm:flex-col max-sm:justify-center max-sm:gap-2 max-sm:px-2">
      <HomePageFooterRef className="dark:text-white">
        ©2024 FlavioJcf
      </HomePageFooterRef>
      <HomePageFooterDivLink>
        <HomePageFooterLink
          href="https://github.com/Flaviojcf"
          className="dark:text-white"
        >
          <GitHubLogoIcon />
          Github
        </HomePageFooterLink>
        <HomePageFooterLink
          href="https://www.linkedin.com/in/flaviojcf"
          className="dark:text-white"
        >
          <LinkedInLogoIcon />
          Linkedin
        </HomePageFooterLink>
        <HomePageFooterLink
          href="https://portfolio-flaviojcf.vercel.app/"
          className="dark:text-white"
        >
          <DesktopIcon />
          Portfólio
        </HomePageFooterLink>
      </HomePageFooterDivLink>
    </HomePageFooter>
  )
}
