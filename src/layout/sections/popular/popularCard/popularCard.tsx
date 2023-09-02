import React, { FC } from 'react';
import styled from 'styled-components';
import { CardAvatar } from './cardAvatar/cardAvatar';
import { theme } from '../../../../styles/Theme';

type Props = {
    imageUrl: string;
    avatarUrl: string;
    ownerName: string;
};

export const PopularCard: FC<Props> = ({ imageUrl, avatarUrl, ownerName }) => {
    return (
        <CardImage $imageUrl={imageUrl}>
            <CardAvatar avatarUrl={avatarUrl} ownerName={ownerName} />
        </CardImage>
    );
};

const CardImage = styled.div<{ $imageUrl: string }>`
    max-width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    background:
        linear-gradient(2deg, rgba(19, 30, 58, 0.92) 0%, rgba(19, 30, 58, 0) 70.62%),
        url(${(props) => props.$imageUrl}) no-repeat top / cover,
        lightgray 0px -29.153px / 100% 167.203% no-repeat;

    &:nth-child(1) {
        grid-area: 1/1/1/4;
        @media ${theme.media.tablet} {
            grid-area: 1/1/1/7;
        }
        @media ${theme.media.bigMobile} {
            grid-area: 1/1/2/1;
        }
    }

    &:nth-child(2) {
        grid-area: 1/4/1/9;
        @media ${theme.media.tablet} {
            grid-area: 1/7/1/13;
        }
        @media ${theme.media.bigMobile} {
            grid-area: 2/1/3/1;
        }
    }

    &:nth-child(3) {
        grid-area: 1/9 / 3 / 13;
        @media ${theme.media.tablet} {
            grid-area: 2/1/3/7;
        }
        @media ${theme.media.bigMobile} {
            grid-area: 3/1/4/1;
        }
    }

    &:nth-child(4) {
        grid-area: 2/1 / 3 / 5;
        @media ${theme.media.tablet} {
            grid-area: 2/7/3/13;
        }
        @media ${theme.media.bigMobile} {
            grid-area: 4/1/5/1;
        }
    }

    &:nth-child(5) {
        grid-area: 2/5 /3 / 9;
        @media ${theme.media.tablet} {
            grid-area: 3/4/4/10;
        }
        @media ${theme.media.bigMobile} {
            grid-area: 5/1/6/1;
        }
    }
`;
