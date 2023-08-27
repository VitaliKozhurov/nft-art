import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export type LinkItem = {
    linkTitle: string;
    linkUrl: string;
};

type Props = { links: LinkItem[] };

export const HeaderMenu: FC<Props> = ({ links }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {links.map((link) => (
                    <li key={link.linkTitle}>
                        <a href={link.linkUrl}>{link.linkTitle}</a>
                    </li>
                ))}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;

        li a {
            position: relative;
            color: ${theme.colors.headerLink};
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
        display: none;
    }
`;
