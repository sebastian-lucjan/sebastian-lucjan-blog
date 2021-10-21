import Link from '@/components/Link'
import Logo from '@/data/logo.svg'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from '@/components/ThemeSwitch'
import MobileNav from '@/components/MobileNav'

// import styled from 'styled-components'
//
// const StyledBlogTitle = styled.div`
//   //font-family: 'Montserrat', 'Arial', serif;
//   //font-family: 'Montserrat';
//   //font-weight: black;
// `

const Header = () => (
  <header className="flex items-center justify-between py-10">
    <div>
      <Link href="/" aria-label="Sebastian Lucjan Blog">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden text-2xl font-montserrat font-light xs:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
    </div>
    <div className="flex items-center text-base leading-5">
      <div className="hidden sm:block">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <ThemeSwitch />
      <MobileNav />
    </div>
  </header>
)

export default Header
