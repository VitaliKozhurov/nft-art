import React, { FC } from 'react';
import styled from 'styled-components';
import { Photo } from '../photo/photo';
import { FlexWrapper } from '../common/flexWrapper';
import { Icon } from '../icon/icon';
import { Button } from '../button/button';
import { theme } from '../../styles/Theme';

type Props = {
    imageLink: string;
    cardTitle: string;
    price: string;
    time: string;
};

export const AmazingCard: FC<Props> = ({ imageLink, cardTitle, price, time }) => {
    return (
        <StyledCard>
            <StyledCardImage>
                <Photo src={imageLink} alt={'Card image'} />
            </StyledCardImage>
            <FlexWrapper justify={'space-between'} margin={'0 0 16px'}>
                <StyledCardTitle>{cardTitle}</StyledCardTitle>
                <FlexWrapper align={'center'}>
                    <Icon iconId={'control'} />
                    <span>{price}ETH</span>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper justify={'space-between'}>
                <FlexWrapper direction={'column'}>
                    <StyledCardSubtitle>Ending In</StyledCardSubtitle>
                    <FlexWrapper align={'center'}>
                        <Icon iconId={'clock'} />
                        <StyledCardTimer>{time}</StyledCardTimer>
                    </FlexWrapper>
                </FlexWrapper>
                <Button variant={'outlined'}>Place A Bid</Button>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 28px;
    border-top: 1px solid ${theme.colors.accent};
    background: ${theme.colors.cardBg};
`;

const StyledCardImage = styled.div`
    border-radius: 16px;
    overflow: hidden;
    height: 340px;
    margin-bottom: 24px;
`;

const StyledCardTitle = styled.h4`
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    color: ${theme.colors.textFont};
`;

const StyledCardSubtitle = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    color: ${theme.colors.cardSubTitle};
    margin-bottom: 4px;
`;
const StyledCardTimer = styled.span`
    margin-left: 12px;
`;
