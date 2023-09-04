import styled, { css } from 'styled-components';

export const BurgerButton = styled.button<{ $isOpen: boolean }>`
    position: relative;
    z-index: 101;
    right: 16px;
    top: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;

    span {
        display: block;
        width: 24px;
        height: 2px;
        border-radius: 10px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-4px);
        transition: 0.2s;

        ${(props) =>
            props.$isOpen &&
            css<{ $isOpen: boolean }>`
                width: 0;
                background-color: rgba(255, 255, 255, 0);
            `}
        &::before {
            content: '';
            width: 24px;
            height: 2px;
            border-radius: 10px;
            position: absolute;
            background: #fff;
            left: 0;
            transform: translateY(-8px);
            transition-delay: 0.2s;
            transition: 0.4s;
            ${(props) =>
                props.$isOpen &&
                css<{ $isOpen: boolean }>`
                    transform: rotate(-45deg) translateY(0);
                `}
        }

        &::after {
            content: '';
            width: 24px;
            height: 2px;
            border-radius: 10px;
            position: absolute;
            background: #fff;
            left: 0;
            transform: translateY(8px);
            transition-delay: 0.4s;
            transition: 0.4s;
            ${(props) =>
                props.$isOpen &&
                css<{ $isOpen: boolean }>`
                    transform: rotate(45deg) translateY(0);
                `}
        }
    }
`;
