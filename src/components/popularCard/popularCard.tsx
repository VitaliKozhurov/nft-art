import React, { FC } from 'react';
import styled from 'styled-components';
import { CardAvatar } from './cardAvatar/cardAvatar';

type Props = {
    imageUrl: string;
    avatarUrl: string;
    ownerName: string;
};

export const PopularCard: FC<Props> = ({ imageUrl, avatarUrl, ownerName }) => {
    return (
        <CardImage imageUrl={imageUrl}>
            <CardAvatar avatarUrl={avatarUrl} ownerName={ownerName} />
        </CardImage>
    );
};

const CardImage = styled.div<{ imageUrl: string }>`
    max-width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    background:
        linear-gradient(2deg, rgba(19, 30, 58, 0.92) 0%, rgba(19, 30, 58, 0) 70.62%),
        url(${(props) => props.imageUrl}) no-repeat 0 20% / cover,
        lightgray 0px -29.153px / 100% 167.203% no-repeat;

    &:nth-child(1) {
        grid-area: 1/1/1/4;
    }

    &:nth-child(2) {
        grid-area: 1/4/1/9;
    }

    &:nth-child(3) {
        grid-area: 1/9 / 3 / 13;
    }

    &:nth-child(4) {
        grid-area: 2/1 / 3 / 5;
    }

    &:nth-child(5) {
        grid-area: 2/5 /3 / 9;
    }
`;
