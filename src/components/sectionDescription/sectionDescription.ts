import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const SectionDescription = styled.p<{ margin?: string }>`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.65;
    color: ${theme.colors.textFont};
    margin: ${(props) => props.margin || '20px 0 40px'};

    @media ${theme.media.mobile} {
        margin: 20px 0 32px;
    }
`;
