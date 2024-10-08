import { URL } from "@/app/constants/route";
import Link from "next/link";

type NavLinkProps = {
  label: string;
  href: string | URL;
};

const NavLink = ({ label, href }: NavLinkProps) => {
  return (
    <Link href={href} className="p-3 px-8 duration-200 hover:bg-white hover:bg-opacity-10">
      {label}
    </Link>
  )
}

export function SideNav() {
  const links: Array<NavLinkProps> = [
    { label: 'Início', href: URL.HOME },
    { label: 'Planejamento Mensal', href: URL.MONTHLY_PLANNING },
  ];

  return (
    <nav className="h-screen flex flex-col text-sm bg-slate-700 text-white">
      {
        links.map(link => (
          <NavLink key={link.label} href={link.href} label={link.label} />
        ))
      }
    </nav>
  )
}