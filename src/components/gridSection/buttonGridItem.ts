import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type Props = {
    align?: string;
};

export const ButtonGridItem = styled.div<Props>`
    grid-area: button;
    justify-self: right;
    align-self: ${(props) => props.align || 'center'};

    @media ${theme.media.bigMobile} {
        justify-self: center;
    }
`;
