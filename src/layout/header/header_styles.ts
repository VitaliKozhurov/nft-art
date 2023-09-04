import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components';

export const StyledHeader = styled.header<{ $changeBackGround: boolean }>`
    padding: 28px 0;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    transition: background-color 0.3s ease;

    ${(props) =>
        props.$changeBackGround &&
        css<{ $changeBackGround: boolean }>`
            background-color: rgba(0, 0, 0, 0.8);
        `} @media ${theme.media.tablet} {
        padding: 30px 0;
    }

    ${FlexWrapper} {
        @media ${theme.media.desktop} {
            & > button {
                display: none;
            }
        }
    }
`;
