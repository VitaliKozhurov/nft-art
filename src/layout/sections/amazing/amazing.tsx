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
import { CardsGridItem } from './amazingSection_styles';

export const Amazing = () => {
    return (
        <StyledSection id={'marketplace'}>
            <Container>
                <GridSectionContainer>
                    <HeaderGridItem $maxWidth={'518px'}>
                        <SectionTitle tagName={'h2'} title={amazingSectionTitle} />
                    </HeaderGridItem>
                    <ButtonGridItem align={'end'}>
                        <Button variant={'contained'}>See All</Button>
                    </ButtonGridItem>
                    <CardsGridItem>
                        {amazingCardsData.map((card) => (
                            <AmazingCard key={card.id} {...card} />
                        ))}
                    </CardsGridItem>
                </GridSectionContainer>
            </Container>
        </StyledSection>
    );
};
