import React, { FC } from 'react';
import { FlexWrapper } from '../../common/flexWrapper';

type Props = {
    avatarUrl: string;
    ownerName: string;
};

export const CardAvatar: FC<Props> = ({ avatarUrl, ownerName }) => {
    return (
        <FlexWrapper>
            <div>
                <img src={avatarUrl} alt="Avatar icon" />
            </div>
            <div>
                <span>Owner</span>
                <h4>{ownerName}</h4>
            </div>
        </FlexWrapper>
    );
};
