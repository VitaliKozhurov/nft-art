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
import { PopularCard } from './popularCard/popularCard';
import { cardsData, popularTitle } from './popularSectionData';
import { S } from './popularSection_styles';

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
                    <S.CardsGridItem>
                        <S.CardsGridContainer>
                            {cardsData.map((card) => (
                                <PopularCard key={card.ownerName} {...card} />
                            ))}
                        </S.CardsGridContainer>
                    </S.CardsGridItem>
                </GridSectionContainer>
            </Container>
        </StyledSection>
    );
};
