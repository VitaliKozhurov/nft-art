import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

const Card = styled.div`
    flex: 1 1 33.333%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 28px;
    border-top: 1px solid ${theme.colors.accent};
    background: ${theme.colors.cardBg};

    @media ${theme.media.bigDesktop} {
        flex: 0 1 40%;
    }
    @media ${theme.media.desktop} {
        flex: 0 1 45%;
    }
    @media ${theme.media.tablet} {
        flex: 0 1 70%;
    }
    @media ${theme.media.bigMobile} {
        flex: 0 1 100%;
        padding: 16px;
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

export const S = { Card, CardImage, CardPriceInfo, CardTitle, TimeInfo, CardPrice, TimeOutTitle, Countdown };
