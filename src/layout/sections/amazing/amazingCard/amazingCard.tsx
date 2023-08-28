import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Button, FlexWrapper, Icon, Photo } from '../../../../components';

type Props = {
    imageLink: string;
    cardTitle: string;
    price: string;
    time: string;
};

export const AmazingCard: FC<Props> = ({ imageLink, cardTitle, price, time }) => {
    return (
        <Card>
            <CardImage>
                <Photo src={imageLink} alt={'Card image'} />
            </CardImage>

            <CardPriceInfo>
                <CardTitle>{cardTitle}</CardTitle>
                <FlexWrapper align={'center'}>
                    <Icon iconId={'control'} />
                    <CardPrice>{price}ETH</CardPrice>
                </FlexWrapper>
            </CardPriceInfo>

            <TimeInfo>
                <FlexWrapper direction={'column'}>
                    <TimeOutTitle>Ending In</TimeOutTitle>
                    <FlexWrapper align={'center'}>
                        <Icon iconId={'clock'} />
                        <Countdown>{time}</Countdown>
                    </FlexWrapper>
                </FlexWrapper>
                <Button variant={'outlined'}>Place A Bid</Button>
            </TimeInfo>
        </Card>
    );
};

const Card = styled.div`
    flex: 1 1 33.333%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 28px;
    border-top: 1px solid ${theme.colors.accent};
    background: ${theme.colors.cardBg};

    @media ${theme.media.bigDesktop} {
        & {
            max-width: 40%;
        }
    }

    @media ${theme.media.desktop} {
        & {
            max-width: 50%;
        }
    }
`;

const CardImage = styled.div`
    border-radius: 16px;
    overflow: hidden;
    height: 340px;
    margin-bottom: 24px;
`;

const CardPriceInfo = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
`;

const TimeInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CardTitle = styled.h3`
    color: ${theme.colors.textFont};
    @media ${theme.media.tablet} {
        font-size: 20px;
    }
`;

const CardPrice = styled.span``;

const TimeOutTitle = styled.span`
    font-size: 14px;
    line-height: 1.6;
    color: ${theme.colors.cardSubTitle};
    margin-bottom: 4px;
`;
const Countdown = styled.span`
    margin-left: 12px;
`;
