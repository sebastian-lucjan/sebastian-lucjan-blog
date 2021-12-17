import Link from '@/components/Link';
import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import ThemeSwitch from '@/components/ThemeSwitch';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import logoRocket from '../../public/static/logo-icon-60x60.png';

const Header = () => (
  <header className="flex items-center justify-between py-10">
    <div>
      <Link href="/" aria-label="Sebastian Lucjan Blog">
        <div className="flex items-center justify-between">
          <div className="mr-6">
            <Image src={logoRocket} aria-label="logo" alt="logo rakieta" width={60} height={60} />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden text-3xl font-montserrat font-medium tracking-wide leading-9 text-gray-900 dark:text-gray-100 xs:block">
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
);

export default Header;
