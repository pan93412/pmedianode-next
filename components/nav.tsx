import {
    Navbar,
    NavbarBrand,
    NavbarItem,
    NavbarBurger,
    NavbarMenu,
    NavbarStart,
    NavbarEnd,
    NavbarDivider,
    NavbarDropdown,
    NavbarLink,
} from 'bloomer';
import { useState } from 'react';

export interface NavProps {
    pageTitle: string;
    user?: string;
}

export default function nav(props: NavProps) {
    const [isActive, _setIsActive] = useState(false);
    const setIsActive = () => _setIsActive(!isActive);

    return (
        <Navbar>
            <NavbarBrand>
                <NavbarItem>
                    <img style={{ marginRight: 5 }} /> pMediaNode | {props.pageTitle}
                </NavbarItem>
                <NavbarBurger isActive={isActive} onClick={setIsActive} />
            </NavbarBrand>
            <NavbarMenu isActive={isActive} onClick={setIsActive}>
                <NavbarStart>
                    <NavbarItem href='#/'>首頁</NavbarItem>
                    <NavbarItem href='#/'>影片</NavbarItem>
                    <NavbarItem href='#/'>公告</NavbarItem>
                </NavbarStart>
                <NavbarEnd>
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
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
    );
}