import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const SectionDescription = styled.p<{ margin?: string }>`
    margin: 20px 0 40px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.65;
    color: ${theme.colors.textFont};
    margin: ${(props) => props.margin};
`;
