import React, { ComponentPropsWithoutRef, ElementType } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

type ButtonOwnProps<T extends ElementType = ElementType> = {
    as?: T;
    variant: 'contained' | 'outlined' | 'link';
    fullWidth?: boolean;
    children: string;
};

type Props<T extends ElementType = 'button'> = ButtonOwnProps & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps>;

export const Button = <T extends ElementType>(props: Props<T>) => {
    const { as: Component = 'button', fullWidth, variant, children, ...rest } = props;

    return (
        <StyledButton as={Component} fullWidth={fullWidth} variant={variant} {...rest}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button<Props>`
    padding: 12px 40px;
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    font-size: 1rem;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    line-height: 1.7;

    ${(props) =>
        props.variant === 'contained' &&
        css<Props>`
            background-color: ${theme.colors.accent};
            color: ${theme.colors.btnTextContained};
            transition: all 150ms ease-in-out;

            &:hover {
                background-color: transparent;
                color: #fff;
                outline: solid 2px ${theme.colors.accent};
            }
        `}

    ${(props) =>
        props.variant === 'outlined' &&
        css<Props>`
            color: ${theme.colors.accent};
            background-image: linear-gradient(45deg, ${theme.colors.accent} 50%, transparent 50%);
            background-position: 100%;
            background-size: 400%;
            transition: all 0.5s ease-in-out;

            &:hover {
                background-position: 0;
                color: ${theme.colors.cardBg};
            }
        `}

  ${(props) =>
        props.variant === 'link' &&
        css<Props>`
            background-color: transparent;
            padding: 0;
            border: none;
            color: ${theme.colors.textFont};
            position: relative;

            &::before {
                content: '';
                position: absolute;
                width: 0;
                background: ${theme.colors.accent};
                left: 45%;
                height: 2px;
                bottom: -5px;
                transition: all 0.3s;
                opacity: 0.7;
            }

            &:hover::before {
                width: 110%;
                left: -5%;
            }
        `}
`;
