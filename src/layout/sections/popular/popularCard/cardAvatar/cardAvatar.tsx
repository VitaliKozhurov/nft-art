import { FlexWrapper, Photo } from 'components';
import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
    avatarUrl: string;
    ownerName: string;
};

export const CardAvatar: FC<Props> = ({ avatarUrl, ownerName }) => {
    return (
        <CardOwnerBlock>
            <Avatar>
                <Photo src={avatarUrl} alt="Avatar icon" />
            </Avatar>
            <FlexWrapper direction={'column'}>
                <OwnerHeader>Owner</OwnerHeader>
                <OwnerName>{ownerName}</OwnerName>
            </FlexWrapper>
        </CardOwnerBlock>
    );
};

const CardOwnerBlock = styled.div`
    display: flex;
    position: absolute;
    left: 24px;
    bottom: 24px;
`;

const Avatar = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 12px;
`;

const OwnerHeader = styled.h4`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 4px;
`;
const OwnerName = styled.h5`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
`;
