import React, { FC } from 'react';
import styled from 'styled-components';
import { Photo } from '../photo/photo';
import { FlexWrapper } from '../common/flexWrapper';
import { Icon } from '../icon/icon';
import { Button } from '../button/button';

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
            <FlexWrapper>
                <h4>{cardTitle}</h4>
                <div>
                    <Icon iconId={'control'} />
                    <span>{price}ETH</span>
                </div>
            </FlexWrapper>
            <FlexWrapper>
                <div>
                    <Icon iconId={'clock'} />
                    <span>{time}</span>
                    <span>Ending In</span>
                </div>
                <Button variant={'outlined'}>Place A Bid</Button>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledCardImage = styled.div``;
