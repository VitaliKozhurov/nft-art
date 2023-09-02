import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';
import { LinkItem } from '../headerMenu/headerMenu';

type Props = { links: LinkItem[] };

export const MobileMenu: FC<Props> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const popupToggleHandler = () => {
        setIsOpen(!isOpen);
    };
    const setLinkHandler = () => {
        setIsOpen(false);
    };
    return (
        <StyledMobileMenu>
            <BurgerButton $isOpen={isOpen} onClick={popupToggleHandler}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup $isOpen={isOpen}>
                <ul>
                    {links.map((link) => (
                        <li key={link.linkTitle} onClick={setLinkHandler}>
                            <a href={link.linkUrl}>{link.linkTitle}</a>
                        </li>
                    ))}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    position: relative;

    ul {
        display: flex;
        flex-direction: column;
        gap: 60px;

        li a {
            position: relative;
            color: ${theme.colors.headerLink};
            font-size: 32px;
            transition: color 0.3s ease-out;
            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${theme.colors.accent};
                bottom: -2px;
                left: 0;
                transform-origin: right;
                transform: scaleX(0);
                transition: transform 0.3s ease-in-out;
            }

            &:hover {
                color: #fff;
            }

            &:hover::before {
                transform-origin: left;
                transform: scaleX(1);
            }
        }
    }

    @media ${theme.media.tablet} {
        display: block;
    }
`;

const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.primaryBg};
    z-index: 100;
    transform: translate(100%, -100%);
    transition: 0.5s;
    ${(props) =>
        props.$isOpen &&
        css<{ $isOpen: boolean }>`
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(0, 0);
        `}
`;

const BurgerButton = styled.button<{ $isOpen: boolean }>`
    position: relative;
    z-index: 101;
    right: 16px;
    top: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;

    span {
        display: block;
        width: 24px;
        height: 2px;
        border-radius: 10px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-4px);
        transition: 0.2s;

        ${(props) =>
            props.$isOpen &&
            css<{ $isOpen: boolean }>`
                width: 0;
                background-color: rgba(255, 255, 255, 0);
            `}
        &::before {
            content: '';
            width: 24px;
            height: 2px;
            border-radius: 10px;
            position: absolute;
            background: #fff;
            left: 0;
            transform: translateY(-8px);
            transition-delay: 0.2s;
            transition: 0.4s;
            ${(props) =>
                props.$isOpen &&
                css<{ $isOpen: boolean }>`
                    transform: rotate(-45deg) translateY(0);
                `}
        }

        &::after {
            content: '';
            width: 24px;
            height: 2px;
            border-radius: 10px;
            position: absolute;
            background: #fff;
            left: 0;
            transform: translateY(8px);
            transition-delay: 0.4s;
            transition: 0.4s;
            ${(props) =>
                props.$isOpen &&
                css<{ $isOpen: boolean }>`
                    transform: rotate(45deg) translateY(0);
                `}
        }
    }
`;
