import React from 'react';
import mainImage from '../../../assets/images/best_section/best_1.webp';
import secondaryImage from '../../../assets/images/best_section/best_2.webp';
import {
    Button,
    ButtonsContainer,
    Container,
    Photo,
    SectionDescription,
    SectionTitle,
    StyledSection,
} from '../../../components';
import { bestDescription, bestSectionTitle } from './bestNFTSectionData';
import { S } from './bestNFTSection_styles';

export const BestNft = () => {
    return (
        <StyledSection id={'collections'}>
            <Container>
                <S.BestFlexContainer>
                    <S.BestSectionContent>
                        <SectionTitle tagName={'h2'} title={bestSectionTitle} />
                        <SectionDescription>{bestDescription}</SectionDescription>
                        <ButtonsContainer margin={'0'}>
                            <Button variant={'contained'}>Create Now</Button>
                            <Button variant={'link'}>Learn More</Button>
                        </ButtonsContainer>
                    </S.BestSectionContent>
                    <S.BestCardsBlock>
                        <S.BestCard height={'475px'} right={'0'} top={'0'}>
                            <Photo src={secondaryImage} alt={'Section image'} />
                        </S.BestCard>
                        <S.BestCard height={'400px'} left={'0'} bottom={'0'}>
                            <Photo src={mainImage} alt={'Section image'} />
                        </S.BestCard>
                    </S.BestCardsBlock>
                </S.BestFlexContainer>
            </Container>
        </StyledSection>
    );
};
