import React from 'react';
import styled from 'styled-components';
import { Button, Container, FlexWrapper, Logo } from '../../components';
import { HeaderMenu } from './headerMenu/headerMenu';
import { theme } from '../../styles/Theme';
import { MobileMenu } from './mobileMenu/mobileMenu';

const links = [
    { linkTitle: 'Marketplace', linkUrl: '#' },
    { linkTitle: 'Artists', linkUrl: '#' },
    { linkTitle: 'Community', linkUrl: '#' },
    { linkTitle: 'Collections', linkUrl: '#' },
];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo />
                    <HeaderMenu links={links} />
                    <MobileMenu links={links} />
                    <Button variant={'contained'}>Contact</Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 28px 0;

    @media ${theme.media.tablet} {
        padding: 40px 0 0;
    }
    ${FlexWrapper} {
        @media ${theme.media.desktop} {
            & > button {
                display: none;
            }
        }
    }
`;
