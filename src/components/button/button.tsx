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
        `}

    ${(props) =>
        props.variant === 'outlined' &&
        css<Props>`
            background-color: transparent;
            border: solid 1px ${theme.colors.accent};
            color: ${theme.colors.accent};
        `}

  ${(props) =>
        props.variant === 'link' &&
        css<Props>`
            background-color: transparent;
            border: none;
            color: ${theme.colors.textFont};
        `}
`;
