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
          <Link href="/video"><NavbarItem href="#">影片</NavbarItem></Link>
          <Link href="/audio"><NavbarItem href="#">音樂</NavbarItem></Link>
          <Link href="/photo"><NavbarItem href="#">圖片</NavbarItem></Link>
          <Link href="/announce"><NavbarItem href="#">公告</NavbarItem></Link>
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
        {// TODO: I will do this as long as v1 released.
                /* <NavbarEnd>
                    <NavbarItem hasDropdown isHoverable>
                        <NavbarLink href='#/documentation'>嗨，{props.user || '訪客'}</NavbarLink>
                        {
                            props.user ?
                            (
                                <NavbarDropdown>
                                    <NavbarItem>個人資料</NavbarItem>
                                    <NavbarItem>登出</NavbarItem>
                                </NavbarDropdown>
                            ) :
                            (
                                <NavbarDropdown>
                                <NavbarItem>登入</NavbarItem>
                                <NavbarItem>註冊</NavbarItem>
                                </NavbarDropdown>
                            )
                        }
                    </NavbarItem>
                </NavbarEnd> */}
      </NavbarMenu>
    </Navbar>
  );
}
