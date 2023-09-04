import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const SubscribeFlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 0;
    }
`;

const SubscribeSectionContent = styled.div`
    max-width: 520px;
    width: 100%;
    padding: 90px 0;

    @media ${theme.media.bigDesktop} {
        max-width: 420px;
    }

    @media ${theme.media.desktop} {
        max-width: 380px;
        padding: 60px 0;
    }

    @media ${theme.media.tablet} {
        padding: 0;
        text-align: center;
        order: 1;
        margin: 0 auto 48px;
    }
`;

const SubscribeCardsBody = styled.div`
    position: relative;
    width: 100%;

    @media ${theme.media.tablet} {
        min-height: 420px;
        order: 2;
        max-width: 80%;
        margin: 0 auto;
    }

    @media ${theme.media.bigMobile} {
        width: 100%;
        min-height: 290px;
    }
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: ${theme.colors.cardBg};
    position: relative;

    button {
        position: absolute;
        top: 50%;
        right: 4px;
        transform: translateY(-50%);
    }

    @media ${theme.media.tablet} {
        & button {
            top: unset;
            right: unset;
            left: 50%;
            bottom: -76px;
            transform: translate(-50%, 0%);
        }
    }
`;

const Input = styled.input`
    color: ${theme.colors.textFont};
    border-radius: 8px;
    padding: 16px 166px 16px 24px;
    &:focus {
        outline: 1px solid ${theme.colors.accent};
    }
    @media ${theme.media.tablet} {
        padding: 16px 24px;
    }
`;

type SubscribeCardProps = {
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    transform?: string;
    origin?: string;
};

const SubscribeCard = styled.div<SubscribeCardProps>`
    position: absolute;
    width: 100%;
    border-radius: 24px;
    overflow: hidden;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    transform: ${(props) => props.transform};
    transform-origin: ${(props) => props.origin};
    transition: all 0.3s ease;
    &:first-child {
        width: 60%;
        height: 376px;
    }

    &:last-child {
        width: 45%;
        height: 348px;
    }

    @media ${theme.media.bigDesktop} {
        &:first-child {
            height: 306px;
        }

        &:last-child {
            height: 278px;
        }
    }

    @media ${theme.media.desktop} {
        &:first-child {
            height: 266px;
            right: 90px;
        }
        &:last-child {
            height: 238px;
        }
    }

    @media ${theme.media.bigMobile} {
        &:first-child {
            height: 190px;
            width: 70%;
        }
        &:last-child {
            height: 200px;
            width: 60%;
        }
    }
    &:hover {
        scale: 1.1;
    }
`;

export const S = {
    SubscribeFlexContainer,
    SubscribeSectionContent,
    SubscribeCardsBody,
    SubscribeCard,
    Input,
    InputBox,
};
