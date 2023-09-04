import React from 'react';
import { footerData, footerDescription } from './footerData';
import { Container, FlexWrapper, Logo, SectionDescription } from '../../components';
import { About } from './about/about';
import { Socials } from './socials/socials';
import { Fade } from 'react-awesome-reveal';
import { S } from './footer_styles';

export const Footer = () => {
    return (
        <S.StyledFooter>
            <Container>
                <S.StyledContactsInfo>
                    <S.ContactBox>
                        <Fade triggerOnce={true} direction={'left'}>
                            <FlexWrapper direction={'column'}>
                                <Logo />
                                <SectionDescription margin={'20px 0 24px'}>{footerDescription}</SectionDescription>
                                <Socials />
                            </FlexWrapper>
                        </Fade>
                    </S.ContactBox>
                    <FlexWrapper>
                        {footerData.map((item) => (
                            <About key={item.id} {...item} />
                        ))}
                    </FlexWrapper>
                </S.StyledContactsInfo>

                <S.StyledCopyRight>
                    <S.CopyrightHeader>&copy; Copyright 2023 - Creativeart</S.CopyrightHeader>
                    <S.CopyrightLinksBox>
                        <S.Link href="#">Privacy Policy</S.Link>
                        <S.Link href="#">Terms & Conditions</S.Link>
                    </S.CopyrightLinksBox>
                </S.StyledCopyRight>
            </Container>
        </S.StyledFooter>
    );
};
