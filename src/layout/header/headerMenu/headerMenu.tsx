import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { MenuItem, NavLink } from '../navLink/navLink';
import { LinksItem } from '../header';

type Props = { links: LinksItem };

export const HeaderMenu: FC<Props> = ({ links }) => {
    return (
        <HeaderDesktopMenu>
            <HeaderLinkList>
                {links.map((link) => (
                    <MenuItem key={link.id}>
                        <NavLink activeClass={'active'} smooth={true} to={link.linkTitle.toLowerCase()}>
                            {link.linkTitle}
                        </NavLink>
                    </MenuItem>
                ))}
            </HeaderLinkList>
        </HeaderDesktopMenu>
    );
};

const HeaderLinkList = styled.ul``;

const HeaderDesktopMenu = styled.nav`
    ${HeaderLinkList} {
        display: flex;
        gap: 40px;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`;
