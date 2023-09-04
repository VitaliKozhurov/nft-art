import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { MenuItem, NavLink } from '../navLink/navLink';
import { LinksItem } from '../header';
import { MobileMenuPopup } from '../popup/popup';
import { BurgerButton } from '../burgerButton/burgerButton';

type Props = { links: LinksItem };
export const MobileMenu: FC<Props> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const popupToggleHandler = () => {
        setIsOpen(!isOpen);
    };
    const closePopUpHandler = () => {
        setIsOpen(false);
    };
    return (
        <StyledMobileMenu>
            <BurgerButton $isOpen={isOpen} onClick={popupToggleHandler}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup $isOpen={isOpen}>
                <HeaderLinkList>
                    {links.map((link) => (
                        <MenuItem key={link.linkTitle}>
                            <NavLink smooth={true} to={link.linkTitle.toLowerCase()} onClick={closePopUpHandler}>
                                {link.linkTitle}
                            </NavLink>
                        </MenuItem>
                    ))}
                </HeaderLinkList>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const HeaderLinkList = styled.ul``;

const StyledMobileMenu = styled.nav`
    display: none;
    position: relative;

    ${HeaderLinkList} {
        display: flex;
        flex-direction: column;
        gap: 60px;

        ${NavLink} {
            font-size: 32px;
        }
    }

    @media ${theme.media.tablet} {
        display: block;
    }
`;
