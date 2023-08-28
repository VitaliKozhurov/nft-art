import React from 'react';
import { Button, Container, SectionTitle, StyledSection } from '../../../components';
import { AmazingCard } from './amazingCard/amazingCard';
import { amazingCardsData, amazingSectionTitle } from './amazingSectionData';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const Amazing = () => {
    return (
        <StyledSection>
            <Container>
                <AmazingGridContainer>
                    <HeaderGridItem>
                        <SectionTitle tagName={'h2'} title={amazingSectionTitle} maxWidth={'518px'} />
                    </HeaderGridItem>
                    <ButtonGridItem>
                        <Button variant={'contained'}>See All</Button>
                    </ButtonGridItem>
                    <CardsGridItem>
                        {amazingCardsData.map((card) => (
                            <AmazingCard {...card} />
                        ))}
                    </CardsGridItem>
                </AmazingGridContainer>
            </Container>
        </StyledSection>
    );
};

const AmazingGridContainer = styled.div`
    display: grid;
    grid-template-areas: 'header button' 'cards cards';
`;

const HeaderGridItem = styled.div`
    grid-area: header;
`;

const ButtonGridItem = styled.div`
    grid-area: button;
    justify-self: right;
    align-self: end;
`;

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
`;
