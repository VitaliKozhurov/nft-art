import React from 'react';
import {
    Button,
    ButtonGridItem,
    Container,
    GridSectionContainer,
    HeaderGridItem,
    SectionTitle,
    StyledSection,
} from '../../../components';
import { AmazingCard } from './amazingCard/amazingCard';
import { amazingCardsData, amazingSectionTitle } from './amazingSectionData';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const Amazing = () => {
    return (
        <StyledSection>
            <Container>
                <GridSectionContainer>
                    <HeaderGridItem maxWidth={'518px'}>
                        <SectionTitle tagName={'h2'} title={amazingSectionTitle} />
                    </HeaderGridItem>
                    <ButtonGridItem align={'end'}>
                        <Button variant={'contained'}>See All</Button>
                    </ButtonGridItem>
                    <CardsGridItem>
                        {amazingCardsData.map((card) => (
                            <AmazingCard {...card} />
                        ))}
                    </CardsGridItem>
                </GridSectionContainer>
            </Container>
        </StyledSection>
    );
};

const CardsGridItem = styled.div`
    grid-area: cards;
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 64px;
    align-items: stretch;

    @media ${theme.media.bigDesktop} {
        flex-wrap: wrap;
    }

    @media ${theme.media.tablet} {
        gap: 24px;
        margin: 32px 0;
    }

    @media ${theme.media.bigMobile} {
        gap: 16px;
    }
`;
