import React from 'react';
import { Button, Container, FlexWrapper, Logo } from '../../components';
import { HeaderMenu } from './headerMenu/headerMenu';
import { MobileMenu } from './mobileMenu/mobileMenu';
import { useWindowScroll } from '../../hooks/useWindowScroll';
import { Fade } from 'react-awesome-reveal';
import { StyledHeader } from './header_styles';

export type LinksItem = Array<{
    id: number;
    linkTitle: string;
}>;
const links = [
    { id: 1, linkTitle: 'Marketplace' },
    { id: 2, linkTitle: 'Artists' },
    { id: 3, linkTitle: 'Community' },
    { id: 4, linkTitle: 'Collections' },
];

export const Header = () => {
    const backGroundAfterScroll = useWindowScroll();
    return (
        <StyledHeader $changeBackGround={backGroundAfterScroll}>
            <Container>
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
