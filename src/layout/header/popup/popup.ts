import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';

export const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.primaryBg};
    z-index: 100;
    transform: translate(100%, -100%);
    transition: 0.5s;
    ${(props) =>
        props.$isOpen &&
        css<{ $isOpen: boolean }>`
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(0, 0);
        `}
`;
