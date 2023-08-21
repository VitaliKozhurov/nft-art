import React, { FC } from 'react';
import iconSprite from '../../assets/images/svg_sprite.svg';

type Props = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
};

export const Icon: FC<Props> = ({ iconId, width, height, viewBox }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || '28'}
            height={height || '28'}
            viewBox={viewBox || '0 0 28 28'}
            fill="none"
        >
            <use xlinkHref={`${iconSprite}#${iconId}`} />
        </svg>
    );
};
