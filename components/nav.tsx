import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarDropdown,
  NavbarLink,
} from 'bloomer';
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export interface NavProps {
  pageTitle: string;
  // user?: string;
}

export default function nav({
  pageTitle,
}: NavProps) {
  const [isActive, _setIsActive] = useState(false);
  const setIsActive = () => _setIsActive(!isActive);

  return (
    <div>
      <Head>
        <title>
          pMediaNode |
          {' '}
          {pageTitle}
        </title>
      </Head>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            pMediaNode |
            {' '}
            {pageTitle}
          </NavbarItem>
          <NavbarBurger isActive={isActive} onClick={setIsActive} />
        </NavbarBrand>
        <NavbarMenu isActive={isActive} onClick={setIsActive}>
          <NavbarStart>
            <Link href="/home"><NavbarItem href="#">首頁</NavbarItem></Link>
            <Link href="/library/video"><NavbarItem href="#">影片</NavbarItem></Link>
            <Link href="/library/audio"><NavbarItem href="#">音樂</NavbarItem></Link>
            <Link href="/library/announce"><NavbarItem href="#">公告</NavbarItem></Link>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem hasDropdown isHoverable>
              <NavbarLink>設定 & 關於</NavbarLink>
              <NavbarDropdown>
                <Link href="/preferences"><NavbarItem href="#">偏好設定</NavbarItem></Link>
                <Link href="/about"><NavbarItem href="#">關於</NavbarItem></Link>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
