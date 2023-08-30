import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const GridSectionContainer = styled.div`
    display: grid;
    grid-template-areas: 'header button' 'cards cards';

    @media ${theme.media.bigMobile} {
        grid-template-areas: 'header' 'cards' 'button';
    }
`;
