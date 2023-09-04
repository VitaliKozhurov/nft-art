import React from 'react';
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
import { subscribeSectionDescription, subscribeSectionTitle } from './subscribeSectionData';
import { S } from './subscribeSection_styles';

export const Subscribe = () => {
    return (
        <StyledSection id={'community'}>
            <Container>
                <S.SubscribeFlexContainer>
                    <S.SubscribeCardsBody>
                        <S.SubscribeCard
                            right={'154px'}
                            bottom={'10px'}
                            transform={'rotate(-11deg)'}
                            origin={'left bottom'}
                        >
                            <Photo src={cardFrontSide} alt={'Subscribe card photo'} />
                        </S.SubscribeCard>
                        <S.SubscribeCard right={'0'} bottom={'0'}>
                            <Photo src={cardBackSide} alt={'Subscribe card photo'} />
                        </S.SubscribeCard>
                    </S.SubscribeCardsBody>

                    <S.SubscribeSectionContent>
                        <FlexWrapper direction={'column'}>
                            <SectionTitle tagName={'h2'} title={subscribeSectionTitle} />
                            <SectionDescription>{subscribeSectionDescription}</SectionDescription>
                            <S.InputBox>
                                <S.Input type="text" placeholder={'Enter your e-mail'} />
                                <Button variant={'contained'}>Subscribe</Button>
                            </S.InputBox>
                        </FlexWrapper>
                    </S.SubscribeSectionContent>
                </S.SubscribeFlexContainer>
            </Container>
        </StyledSection>
    );
};
