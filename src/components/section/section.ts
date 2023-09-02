import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type Props = {
    id?: string;
};

export const StyledSection = styled.section<Props>`
    padding: 92px 0;
    @media ${theme.media.tablet} {
        padding: 40px 0;
    }
`;
