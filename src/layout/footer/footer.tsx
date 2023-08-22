import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/common/flexWrapper';
import { Logo } from '../../components/logo/logo';
import { Socials } from '../../components/socials/socials';
import { footerLinksData } from './footerLinksData';
import { About } from '../../components/about/about';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper>
                <StyledContactsInfo>
                    <FlexWrapper direction={'column'}>
                        <Logo />
                        <p>
                            Discover NFTs by category, track the latest drop, and and follow the collections you love.
                            Enjoy it!
                        </p>
                        <Socials />
                    </FlexWrapper>
                    <FlexWrapper>
                        {footerLinksData.map((item) => (
                            <About title={item.title} links={item.links} />
                        ))}
                    </FlexWrapper>
                </StyledContactsInfo>
                <StyledCopyRight>
                    <h4> &copy; Copyright 2023 - Creativeart</h4>
                    <div>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </StyledCopyRight>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer``;
const StyledContactsInfo = styled.div`
    display: flex;
`;
const StyledCopyRight = styled.div`
    display: flex;
`;
