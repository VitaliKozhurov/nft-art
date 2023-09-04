import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Button, FlexWrapper } from '../../../../components';

export const MainImageCard = () => {
    return (
        <CardBox>
            <FlexWrapper justify={'space-between'}>
                <CardItemInfo>
                    <CardSubtitle>Ends in</CardSubtitle>
                    <CardParamsValue>05:45:47</CardParamsValue>
                </CardItemInfo>
                <CardItemInfo>
                    <CardSubtitle>Current bid</CardSubtitle>
                    <CardParamsValue>0.24ETH</CardParamsValue>
                </CardItemInfo>
            </FlexWrapper>
            <Button variant={'outlined'}>Place A Bid</Button>
        </CardBox>
    );
};

const CardSubtitle = styled.h5`
    color: ${theme.colors.accent};
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 10px;
`;

const CardParamsValue = styled.span`
    font-weight: 700;
    line-height: 1.2;
`;

const CardBox = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 304px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.cardBg};
    padding: 20px;
    border-radius: 16px;
    border-top: 1px solid ${theme.colors.accent};
    box-shadow: 0 9px 50px 0 rgba(23, 36, 65, 0.04);

    @media ${theme.media.mobile} {
        max-width: 224px;
    }
`;

const CardItemInfo = styled.div`
    font-size: 16px;
    margin-bottom: 24px;
    @media ${theme.media.tablet} {
        font-size: 16px;
        margin-bottom: 16px;
    }
`;
