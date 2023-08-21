import React from 'react';
import { Button } from '../../../components/button/button';
import styled from 'styled-components';
import mainPhoto from '../../../assets/images/main_section/main.webp';
import { FlexWrapper } from '../../../components/common/flexWrapper';
import { Photo } from '../../../components/photo/photo';

export const Main = () => {
    return (
        <StyledMain>
            <StyledMainInfo>
                <h1>
                    Discover and Collect The Best NFTs <span>Digital Art.</span>
                </h1>
                <p>
                    Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start
                    exploring the world of digital art and NFTs today and take control of your digital assets with
                    confidence!
                </p>
                <div>
                    <Button variant={'contained'}>Explore Now</Button>
                    <Button variant={'link'}>Learn More</Button>
                </div>
            </StyledMainInfo>
            <StyledMainStatistics>
                <ul>
                    <li>
                        <span>8.9</span>K<span>Art work</span>
                    </li>
                    <li>
                        <span>65</span>K<span>Artist</span>
                    </li>
                    <li>
                        <span>87</span>K<span>Collection</span>
                    </li>
                </ul>
            </StyledMainStatistics>
            <StyledMainImage>
                <Photo src={mainPhoto} alt={'Main section photo'} />
                <FlexWrapper direction={'column'}>
                    <FlexWrapper>
                        <StyledCardInfo>
                            <span>Ends in</span>
                            <span>05:45:47</span>
                        </StyledCardInfo>
                        <StyledCardInfo>
                            <span>Current bid</span>
                            <span>0.24ETH</span>
                        </StyledCardInfo>
                    </FlexWrapper>
                    <Button variant={'outlined'}>Place A Bid</Button>
                </FlexWrapper>
            </StyledMainImage>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 170px;
    grid-template-areas: 'info image' 'statistics image';
`;

const StyledMainInfo = styled.div`
    grid-area: info;
`;
const StyledMainImage = styled.div`
    grid-area: image;
`;
const StyledMainStatistics = styled.div`
    grid-area: statistics;
`;

const StyledCardInfo = styled.div``;
