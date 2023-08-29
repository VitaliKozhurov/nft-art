import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/Theme';
import mainImage from '../../../assets/images/best_section/best_1.webp';
import secondaryImage from '../../../assets/images/best_section/best_2.webp';
import {
    Button,
    ButtonsContainer,
    Container,
    Photo,
    SectionDescription,
    SectionTitle,
    StyledSection,
} from '../../../components';
import { bestDescription, bestSectionTitle } from './bestNFTSectionData';

export const BestNft = () => {
    return (
        <StyledSection>
            <Container>
                <BestFlexContainer>
                    <BestSectionContent>
                        <SectionTitle tagName={'h2'} title={bestSectionTitle} />
                        <SectionDescription>{bestDescription}</SectionDescription>
                        <ButtonsContainer margin={'0'}>
                            <Button variant={'contained'}>Create Now</Button>
                            <Button variant={'link'}>Learn More</Button>
                        </ButtonsContainer>
                    </BestSectionContent>
                    <BestCardsBlock>
                        <BestCard height={'475px'} right={'0'} top={'0'}>
                            <Photo src={secondaryImage} alt={'Section image'} />
                        </BestCard>
                        <BestCard height={'400px'} left={'0'} bottom={'0'}>
                            <Photo src={mainImage} alt={'Section image'} />
                        </BestCard>
                    </BestCardsBlock>
                </BestFlexContainer>
            </Container>
        </StyledSection>
    );
};

const BestFlexContainer = styled.div`
    display: flex;
    gap: 124px;

    @media ${theme.media.bigDesktop} {
        gap: 60px;
    }

    @media ${theme.media.desktop} {
        gap: 25px;
    }

    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 0;
    }
`;

const BestSectionContent = styled.div`
    max-width: 426px;
    width: 100%;
    padding: 140px 0;
    display: flex;
    flex-direction: column;
    @media ${theme.media.desktop} {
        padding: 120px 0;
    }

    @media ${theme.media.tablet} {
        padding: 0;
        max-width: 100%;
        text-align: center;
    }
`;

const BestCardsBlock = styled.div`
    position: relative;
    width: 100%;
    @media ${theme.media.tablet} {
        min-height: 540px;
    }
    @media ${theme.media.mobile} {
        min-height: 260px;
    }
`;

type BestCardProps = {
    height?: string;
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
};

const BestCard = styled.div<BestCardProps>`
    position: absolute;
    width: 55.5%;
    height: ${(props) => props.height || '100%'};
    border-radius: 24px;
    overflow: hidden;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};

    @media ${theme.media.desktop} {
        width: 60%;
    }

    @media ${theme.media.mobile} {
        &:first-child {
            height: 220px;
        }

        &:last-child {
            height: 190px;
        }
    }
`;
