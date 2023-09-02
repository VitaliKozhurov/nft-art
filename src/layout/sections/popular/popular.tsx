import React from 'react';
import styled from 'styled-components';
import {
    Button,
    ButtonGridItem,
    Container,
    GridSectionContainer,
    HeaderGridItem,
    SectionTitle,
    StyledSection,
} from '../../../components';
import { theme } from '../../../styles/Theme';
import { PopularCard } from './popularCard/popularCard';
import { cardsData, popularTitle } from './popularSectionData';

export const Popular = () => {
    return (
        <StyledSection id={'artists'}>
            <Container>
                <GridSectionContainer>
                    <HeaderGridItem $maxWidth={'360px'}>
                        <SectionTitle tagName={'h2'} title={popularTitle} />
                    </HeaderGridItem>
                    <ButtonGridItem>
                        <Button variant={'contained'}>See All</Button>
                    </ButtonGridItem>
                    <CardsGridItem>
                        <CardsGridContainer>
                            {cardsData.map((card) => (
                                <PopularCard key={card.ownerName} {...card} />
                            ))}
                        </CardsGridContainer>
                    </CardsGridItem>
                </GridSectionContainer>
            </Container>
        </StyledSection>
    );
};

const CardsGridItem = styled.div`
    grid-area: cards;
    margin-top: 64px;

    @media ${theme.media.tablet} {
        margin: 32px 0;
    }
`;

const CardsGridContainer = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 310px);
    @media ${theme.media.tablet} {
        grid-template-rows: repeat(3, 310px);
    }

    @media ${theme.media.bigMobile} {
        gap: 16px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 356px);
    }
`;
