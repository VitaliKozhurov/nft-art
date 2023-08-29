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
                        <SectionTitle tagName={'h2'} title={amazingSectionTitle} />
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

    @media ${theme.media.bigMobile} {
        grid-template-areas: 'header' 'cards' 'button';
    }
`;

const HeaderGridItem = styled.div`
    grid-area: header;
    max-width: 518px;
`;

const ButtonGridItem = styled.div`
    grid-area: button;
    justify-self: right;
    align-self: end;

    @media ${theme.media.bigMobile} {
        justify-self: center;
    }
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

    @media ${theme.media.tablet} {
        gap: 24px;
        margin: 32px 0;
    }

    @media ${theme.media.bigMobile} {
        gap: 16px;
    }
`;
