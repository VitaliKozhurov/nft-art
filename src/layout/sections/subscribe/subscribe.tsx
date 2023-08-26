import React from 'react';
import styled from 'styled-components';

import cardFrontSide from '../../../assets/images/subscribe_section/subscribe_1.webp';
import cardBackSide from '../../../assets/images/subscribe_section/subscribe_2.webp';
import {
    Button,
    Container,
    FlexWrapper,
    Photo,
    SectionDescription,
    SectionTitle,
    StyledSection,
} from '../../../components';
import { TitleTextType } from '../../../components/sectionTitle/sectionTitle';
import { theme } from '../../../styles/Theme';

const subscribeSectionTitle: TitleTextType[] = [
    { text: 'Subscribe And ', type: 'primary' },
    { text: 'get our Updates ', type: 'accent' },
    { text: 'Every Week', type: 'primary' },
];

export const Subscribe = () => {
    return (
        <StyledSection>
            <Container>
                <FlexWrapper gap={'30px'} justify={'space-between'}>
                    <SubscribeCardsBody>
                        <SubscribeCard
                            height={'376px'}
                            right={'154px'}
                            bottom={'10px'}
                            width={'410px'}
                            transform={'rotate(-11deg)'}
                            origin={'left bottom'}
                        >
                            <Photo src={cardFrontSide} alt={'Subscribe card photo'} />
                        </SubscribeCard>
                        <SubscribeCard height={'348px'} right={'0'} bottom={'0'} width={'282px'}>
                            <Photo src={cardBackSide} alt={'Subscribe card photo'} />
                        </SubscribeCard>
                    </SubscribeCardsBody>
                    <SubscribeContainer>
                        <FlexWrapper direction={'column'}>
                            <SectionTitle tagName={'h2'} title={subscribeSectionTitle} />
                            <SectionDescription>
                                We have a blog related to NFT so we can share thoughts and routines on our blog which is
                                updated weekly
                            </SectionDescription>
                            <InputBox>
                                <StyledInput type="text" placeholder={'Enter your e-mail'} />
                                <Button variant={'contained'}>Subscribe</Button>
                            </InputBox>
                        </FlexWrapper>
                    </SubscribeContainer>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

const SubscribeContainer = styled.div`
    max-width: 520px;
    width: 100%;
    padding: 178px 0;
`;

const SubscribeCardsBody = styled.div`
    position: relative;
    max-width: 630px;
    width: 100%;
`;

const InputBox = styled.div`
    display: flex;
    border-radius: 8px;
    background: ${theme.colors.cardBg};
    padding: 4px 4px 4px 24px;
`;

const StyledInput = styled.input`
    flex: 1 1 auto;
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    border: none;
    outline: none;
    color: ${theme.colors.textFont};
    margin-right: 10px;
`;

type SubscribeCardProps = {
    width?: string;
    height?: string;
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    transform?: string;
    origin?: string;
};

const SubscribeCard = styled.div<SubscribeCardProps>`
    position: absolute;
    max-width: ${(props) => props.width};
    width: 100%;
    height: ${(props) => props.height || '100%'};
    border-radius: 24px;
    overflow: hidden;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    transform: ${(props) => props.transform};
    transform-origin: ${(props) => props.origin};
`;
