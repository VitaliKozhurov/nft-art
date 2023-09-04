import React from 'react';
import styled, { css } from 'styled-components';
import { Button, Container, FlexWrapper, Logo } from '../../components';
import { HeaderMenu } from './headerMenu/headerMenu';
import { theme } from '../../styles/Theme';
import { MobileMenu } from './mobileMenu/mobileMenu';
import { useWindowScroll } from '../../hooks/useWindowScroll';
import { Fade } from 'react-awesome-reveal';

const links = [
    { linkTitle: 'Marketplace' },
    { linkTitle: 'Artists' },
    { linkTitle: 'Community' },
    { linkTitle: 'Collections' },
];

export const Header = () => {
    const backGroundAfterScroll = useWindowScroll();
    return (
        <StyledHeader $changeBackGround={backGroundAfterScroll}>
            <Container>
                {' '}
                <Fade>
                    <FlexWrapper justify={'space-between'} align={'center'}>
                        <Logo />
                        <HeaderMenu links={links} />
                        <MobileMenu links={links} />
                        <Button variant={'contained'}>Contact</Button>
                    </FlexWrapper>
                </Fade>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header<{ $changeBackGround: boolean }>`
    padding: 28px 0;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;

    ${(props) =>
        props.$changeBackGround &&
        css<{ $changeBackGround: boolean }>`
            background-color: rgba(0, 0, 0, 0.8);
        `}

    @media ${theme.media.tablet} {
        padding: 30px 0;
    }

    ${FlexWrapper} {
        @media ${theme.media.desktop} {
            & > button {
                display: none;
            }
        }
    }
`;
