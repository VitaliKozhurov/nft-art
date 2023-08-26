import React from 'react';
import styled from 'styled-components';
import mainImage from '../../../assets/images/best_section/best_1.webp';
import secondaryImage from '../../../assets/images/best_section/best_2.webp';
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

const bestSectionTitle: TitleTextType[] = [
    { text: 'Create And Sell Your ', type: 'primary' },
    { text: 'Best NFTs', type: 'accent' },
];

export const BestNft = () => {
    return (
        <StyledSection>
            <Container>
                <FlexWrapper gap={'124px'}>
                    <BestContainer>
                        <FlexWrapper direction={'column'}>
                            <SectionTitle tagName={'h2'} title={bestSectionTitle} />
                            <SectionDescription>
                                Start exploring the world of digital art and NFTs today and take control of your digital
                                assets with confidence!
                            </SectionDescription>
                            <StyledButtonBlock>
                                <Button variant={'contained'}>Create Now</Button>
                                <Button variant={'link'}>Learn More</Button>
                            </StyledButtonBlock>
                        </FlexWrapper>
                    </BestContainer>
                    <StyledCardsBlock>
                        <BestCard height={'475px'} right={'0'} top={'0'}>
                            <Photo src={secondaryImage} alt={'Section image'} />
                        </BestCard>
                        <BestCard height={'400px'} left={'0'} bottom={'0'}>
                            <Photo src={mainImage} alt={'Section image'} />
                        </BestCard>
                    </StyledCardsBlock>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

const BestContainer = styled.div`
    max-width: 426px;
    width: 100%;
    padding: 140px 0;
`;

type BestCardProps = {
    height?: string;
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
};

const StyledButtonBlock = styled.div``;
const StyledCardsBlock = styled.div`
    position: relative;
    width: 100%;
`;

const BestCard = styled.div<BestCardProps>`
    position: absolute;
    //max-width: 410px;
    width: 55.5%;
    height: ${(props) => props.height || '100%'};
    border-radius: 24px;
    overflow: hidden;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
`;
