
import NavBar, { NavBarProps } from './nav';
import Announcement from './announcement';
import { Separator } from './ui/separator';

export default function Header({ locale, navLinks }: NavBarProps) {

  return (
  <>

    <Announcement locale={locale}/>
    <NavBar locale={locale} navLinks={navLinks}/>
    <Separator className="my-1" />
    </>
  );
}

