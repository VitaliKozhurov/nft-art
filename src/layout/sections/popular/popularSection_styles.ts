import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

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

export const S = { CardsGridContainer, CardsGridItem };
