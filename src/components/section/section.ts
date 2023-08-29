import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const StyledSection = styled.section`
    padding: 92px 0;
    @media ${theme.media.tablet} {
        padding: 40px 0;
    }
`;
