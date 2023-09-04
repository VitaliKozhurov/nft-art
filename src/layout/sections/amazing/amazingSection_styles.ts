import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const CardsGridItem = styled.div`
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
