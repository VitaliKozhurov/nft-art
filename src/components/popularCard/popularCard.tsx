import React, { FC } from 'react';
import styled from 'styled-components';
import { Photo } from '../photo/photo';
import { CardAvatar } from './cardAvatar/cardAvatar';

type Props = {
    imageUrl: string;
    avatarUrl: string;
    ownerName: string;
};

export const PopularCard: FC<Props> = ({ imageUrl, avatarUrl, ownerName }) => {
    return (
        <StyledCardImage>
            <Photo src={imageUrl} alt={'Card image'} />
            <CardAvatar avatarUrl={avatarUrl} ownerName={ownerName} />
        </StyledCardImage>
    );
};

const StyledCardImage = styled.div``;
