import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type Props = {
    maxWidth: string;
};

export const HeaderGridItem = styled.div<Props>`
    grid-area: header;
    max-width: ${(props) => props.maxWidth};
    margin-right: 15px;
    @media ${theme.media.tablet} {
        max-width: 100%;
    }
    @media ${theme.media.bigMobile} {
        margin: 0;
    }
`;
