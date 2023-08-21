import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/menu';
import { Logo } from '../../components/logo/logo';

const links = [
    { linkTitle: 'Marketplace', linkUrl: '#' },
    { linkTitle: 'Artists', linkUrl: '#' },
    { linkTitle: 'Community', linkUrl: '#' },
    { linkTitle: 'Collections', linkUrl: '#' },
];

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <Logo />
                <Menu links={links} />
            </StyledHeader>
        </>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(26, 209, 188, 0.73);
    display: flex;
    justify-content: space-between;
`;
