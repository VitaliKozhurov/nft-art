import React from 'react';
import styled from 'styled-components';

import { footerLinksData } from './footerLinksData';
import { About, Container, FlexWrapper, Logo, SectionDescription, Socials } from '../../components';
import { theme } from '../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledContactsInfo>
                    <ContactBox>
                        <FlexWrapper direction={'column'}>
                            <Logo />
                            <SectionDescription margin={'20px 0 24px'}>
                                Discover NFTs by category, track the latest drop, and and follow the collections you
                                love. Enjoy it!
                            </SectionDescription>
                            <Socials />
                        </FlexWrapper>
                    </ContactBox>
                    <FlexWrapper>
                        {footerLinksData.map((item) => (
                            <About title={item.title} links={item.links} />
                        ))}
                    </FlexWrapper>
                </StyledContactsInfo>

                <StyledCopyRight>
                    <CopyrightHeader> &copy; Copyright 2023 - Creativeart</CopyrightHeader>
                    <CopyrightLinksBox>
                        <Links href="#">Privacy Policy</Links>
                        <Links href="#">Terms & Conditions</Links>
                    </CopyrightLinksBox>
                </StyledCopyRight>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 92px 0;
`;

const ContactBox = styled.div`
    max-width: 272px;
    width: 100%;
`;

const StyledContactsInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 48px;
    margin-bottom: 48px;
    border-bottom: 1px solid #838382;
`;
const StyledCopyRight = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CopyrightHeader = styled.h4`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
`;

const CopyrightLinksBox = styled.div``;

const Links = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: ${theme.colors.textFont};
    &:last-child {
        margin-left: 28px;
    }
`;
