import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type Props = {
    margin?: string;
};

export const ButtonsContainer = styled.div<Props>`
    margin: ${(props) => props.margin || '0 0 72px 0'};
    button:first-child {
        margin-right: 36px;
    }
    @media ${theme.media.tablet} {
        margin-bottom: 54px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 48px;
    }
`;
