import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/common/flexWrapper';
import { Photo } from '../../../components/photo/photo';

import cardFrontSide from '../../../assets/images/subscribe_section/subscribe_1.webp';
import cardBackSide from '../../../assets/images/subscribe_section/subscribe_2.webp';
import { Button } from '../../../components/button/button';

export const Subscribe = () => {
    return (
        <StyledSection>
            <FlexWrapper>
                <StyledCardsBody>
                    <Photo src={cardFrontSide} alt={'Subscribe card photo'} />
                    <Photo src={cardBackSide} alt={'Subscribe card photo'} />
                </StyledCardsBody>
                <FlexWrapper>
                    <h2>Subscribe And get our Updates Every Week</h2>
                    <p>
                        We have a blog related to NFT so we can share thoughts and routines on our blog which is updated
                        weekly
                    </p>
                    <div>
                        <input type="text" />
                        <Button variant={'contained'}>Subscribe</Button>
                    </div>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSection>
    );
};

const StyledSection = styled.section``;
const StyledCardsBody = styled.div``;
