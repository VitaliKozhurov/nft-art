import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { theme } from '../../styles/Theme';

export const CircleElement = () => {
    const isTabletWidth = useWindowWidth(520);
    const circleText = isTabletWidth ? 'Artworkoftheweek' : 'ArtworkoftheweekArtworkoftheweek';
    const deg = isTabletWidth ? 22 : 11;
    const circleWidth = isTabletWidth ? 82 : 172;
    return (
        <Circle width={circleWidth}>
            <CircleIcon>
                <Icon iconId={'star'} viewBox={'0 0 35 35'} />
            </CircleIcon>
            <CircleTextBlock width={circleWidth}>
                <CircleText>
                    {circleText.split('').map((char, ind) => (
                        <span style={{ rotate: `${ind * deg}deg` }} key={ind}>
                            {char}
                        </span>
                    ))}
                </CircleText>
            </CircleTextBlock>
        </Circle>
    );
};

const Circle = styled.div<{ width: number }>`
    position: absolute;
    z-index: 1000;
    left: -15px;
    top: 220px;
    transition: all 0.4s ease;

    width: ${(props) => props.width}px;
    height: ${(props) => props.width}px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotate 15s linear infinite;
    @media ${theme.media.tablet} {
        left: 15px;
    }
    @media ${theme.media.mobile} {
        left: 0;
    }
    @keyframes rotate {
        0% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    &:hover {
        scale: 1.2;
        rotate: 60deg;
    }
`;

const CircleIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
    height: 35px;
    @media ${theme.media.bigMobile} {
        width: 20px;
        height: 20px;
    }
    svg {
        width: 100%;
        height: 100%;
    }
`;
const CircleTextBlock = styled.div<{ width: number }>`
    position: absolute;
    width: 100%;
    height: 100%;

    span {
        font-family: 'Source Sans 3', sans-serif;
        font-size: 16px;
        position: absolute;
        left: 50%;
        transform-origin: 0 ${(props) => props.width / 2}px;
        @media ${theme.media.bigMobile} {
            font-size: 12px;
            font-weight: 400;
        }
    }
`;
const CircleText = styled.p``;
