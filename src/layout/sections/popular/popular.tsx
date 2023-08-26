import React from 'react';
import styled from 'styled-components';
import { cardsData } from './cardsData';
import { Button, Container, FlexWrapper, PopularCard, SectionTitle, StyledSection } from '../../../components';
import { TitleTextType } from '../../../components/sectionTitle/sectionTitle';

const popularTitle: TitleTextType[] = [
    { text: 'Popular ', type: 'primary' },
    { text: 'Artists ', type: 'accent' },
    { text: 'On This Week', type: 'primary' },
];

export const Popular = () => {
    return (
        <StyledSection>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <SectionTitle tagName={'h2'} title={popularTitle} maxWidth={'314px'} />
                    <Button variant={'contained'}>See All</Button>
                </FlexWrapper>
                <StyledGridContainer>
                    {cardsData.map((card) => (
                        <PopularCard {...card} />
                    ))}
                </StyledGridContainer>
            </Container>
        </StyledSection>
    );
};

const StyledGridContainer = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 310px);
    margin-top: 64px;
`;
