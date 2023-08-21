import React, { ComponentPropsWithoutRef, ElementType, FC } from 'react';

type ButtonOwnProps<T extends ElementType = ElementType> = {
    as?: T;
    variant: 'contained' | 'outlined' | 'link';
    children: string;
};

type Props<T extends ElementType = 'button'> = ButtonOwnProps & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps>;

export const Button: FC<Props> = (props) => {
    const { as: Component = 'button', variant, children, ...rest } = props;

    return <Component>{children}</Component>;
};
