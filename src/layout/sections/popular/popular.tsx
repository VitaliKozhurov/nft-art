import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/common/flexWrapper';
import { Button } from '../../../components/button/button';
import { cardsData } from './cardsData';
import { PopularCard } from '../../../components/popularCard/popularCard';

export const Popular = () => {
    return (
        <StyledSection>
            <FlexWrapper>
                <h2>Popular Artists On This Week</h2>
                <Button variant={'contained'}>See All</Button>
            </FlexWrapper>
            <StyledGridContainer>
                {cardsData.map((card) => (
                    <PopularCard {...card} />
                ))}
            </StyledGridContainer>
        </StyledSection>
    );
};

const StyledSection = styled.section``;

const StyledGridContainer = styled.div`
    display: grid;
`;
