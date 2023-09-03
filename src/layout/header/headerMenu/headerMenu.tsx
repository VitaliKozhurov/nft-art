import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { MenuItem, NavLink } from '../navLink/navLink';

export type LinkItem = {
    linkTitle: string;
};

type Props = { links: LinkItem[] };

export const HeaderMenu: FC<Props> = ({ links }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {links.map((link) => (
                    <MenuItem key={link.linkTitle}>
                        <NavLink activeClass={'active'} smooth={true} to={link.linkTitle.toLowerCase()}>
                            {link.linkTitle}
                        </NavLink>
                    </MenuItem>
                ))}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`;
