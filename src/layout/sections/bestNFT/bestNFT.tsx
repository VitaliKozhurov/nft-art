import React from 'react';
import { FlexWrapper } from '../../../components/common/flexWrapper';
import styled from 'styled-components';
import { Button } from '../../../components/button/button';
import { Photo } from '../../../components/photo/photo';
import mainImage from '../../../assets/images/best_section/best_1.webp';
import secondaryImage from '../../../assets/images/best_section/best_2.webp';

export const BestNft = () => {
    return (
        <StyledSection>
            <FlexWrapper>
                <BestNFTInfo>
                    <h2>
                        Create And Sell Your <span>Best NFTs</span>
                    </h2>
                    <p>
                        Start exploring the world of digital art and NFTs today and take control of your digital assets
                        with confidence!
                    </p>
                    <div>
                        <Button variant={'contained'}>Create Now</Button>
                        <Button variant={'link'}>Learn More</Button>
                    </div>
                </BestNFTInfo>
            </FlexWrapper>
            <div>
                <Photo src={mainImage} alt={'Section image'} />
                <Photo src={secondaryImage} alt={'Section image'} />
            </div>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    display: flex;
`;

const BestNFTInfo = styled.div``;
