import React, { FC } from 'react';
import styled from 'styled-components';

type LinkItem = {
    linkTitle: string;
    linkUrl: string;
};

type Props = { links: LinkItem[] };

export const Menu: FC<Props> = ({ links }) => {
    return (
        <StyledMenu>
            <ul>
                {links.map((link) => (
                    <li key={link.linkTitle}>
                        <a href={link.linkUrl}>{link.linkTitle}</a>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        background-color: chartreuse;
        display: flex;
        li + li {
            margin-left: 25px;
        }
    }
`;
