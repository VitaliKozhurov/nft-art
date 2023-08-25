import React from 'react';
import { FlexWrapper } from '../common/flexWrapper';
import { Button } from '../button/button';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const MainImageCard = () => {
    return (
        <StyledCardBox>
            <FlexWrapper justify={'space-between'}>
                <StyledCardItemInfo>
                    <h4>Ends in</h4>
                    <span>05:45:47</span>
                </StyledCardItemInfo>
                <StyledCardItemInfo>
                    <h4>Current bid</h4>
                    <span>0.24ETH</span>
                </StyledCardItemInfo>
            </FlexWrapper>
            <Button variant={'outlined'}>Place A Bid</Button>
        </StyledCardBox>
    );
};

const StyledCardBox = styled.div`
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
`;

const StyledCardItemInfo = styled.div`
    font-size: 1rem;
    margin-bottom: 24px;
    h4 {
        color: ${theme.colors.accent};
        font-weight: 400;
        line-height: 1.6;
        margin-bottom: 10px;
    }
    span {
        font-weight: 700;
        line-height: 1.2;
    }
`;
