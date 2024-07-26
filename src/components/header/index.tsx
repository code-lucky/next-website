'use client';
import React, { use } from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: 'Feature', link: '#Feature' },
    { name: 'Pricing', link: '#Pricing' },
    { name: 'FAQ', link: '#FAQ' },
  ]
  const changeLanguage = (lang:string) => {
    console.log(lang)
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="border-b border-slate-400/10">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden mr-5"
        />
        <NavbarBrand>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={36} height={36} className="cursor-pointer" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href={item.link}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger className="cursor-pointer">
              <Link color="foreground" className="hover:text-cyan-800">
                <Image src="/icons/language.svg" alt="Avatar" width={24} height={24} />
                <span>English</span>
              </Link>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="zh" onClick={()=>changeLanguage('zh')}>中文简体</DropdownItem>
              <DropdownItem key="en" onClick={()=>changeLanguage('en')}>English</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} onClick={() => setIsMenuOpen(false)}>
            <Link
              color="foreground"
              className="w-full"
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
