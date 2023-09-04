import React, { FC } from 'react';
import { Button, FlexWrapper, Icon, Photo } from '../../../../components';
import Tilt from 'react-parallax-tilt';
import { S } from './amazingCard_styles';

type Props = {
    imageLink: string;
    cardTitle: string;
    price: string;
    time: string;
};

export const AmazingCard: FC<Props> = ({ imageLink, cardTitle, price, time }) => {
    return (
        <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={700}
            transitionSpeed={1300}
            gyroscope={true}
        >
            <S.Card>
                <S.CardImage>
                    <Photo src={imageLink} alt={'Card image'} />
                </S.CardImage>

                <S.CardPriceInfo>
                    <S.CardTitle>{cardTitle}</S.CardTitle>
                    <FlexWrapper align={'center'}>
                        <Icon iconId={'control'} />
                        <S.CardPrice>{price}ETH</S.CardPrice>
                    </FlexWrapper>
                </S.CardPriceInfo>

                <S.TimeInfo>
                    <FlexWrapper direction={'column'}>
                        <S.TimeOutTitle>Ending In</S.TimeOutTitle>
                        <FlexWrapper align={'center'}>
                            <Icon iconId={'clock'} />
                            <S.Countdown>{time}</S.Countdown>
                        </FlexWrapper>
                    </FlexWrapper>
                    <Button variant={'outlined'}>Place A Bid</Button>
                </S.TimeInfo>
            </S.Card>
        </Tilt>
    );
};
