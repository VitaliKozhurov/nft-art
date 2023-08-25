import React from 'react';
import { SectionTitle, TitleTextType } from '../../../components/sectionTitle/sectionTitle';
import { Button, Container, MainImageCard, Photo, SectionDescription, StatisticItem } from '../../../components';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import mainPhoto from '../../../assets/images/main_section/main.webp';

const mainTitle: TitleTextType[] = [
    { text: ' Discover and Collect The Best NFTs', type: 'primary' },
    { text: ' Digital Art.', type: 'accent' },
];
const mainDescription =
    'Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s.\n' +
    '                        Start exploring the world of digital art and NFTs today and take control of your digital assets\n' +
    '                        with confidence!';
const mainStatistics = [
    { count: 8.9, title: 'Art work' },
    { count: 65, title: 'Artist' },
    { count: 87, title: 'Collection' },
];

export const Main = () => {
    return (
        <Container>
            <StyledMain>
                <StyledMainInfo>
                    <SectionTitle tagName={'h1'} title={mainTitle} />
                    <SectionDescription>{mainDescription}</SectionDescription>
                    <StyledButtonsBlock>
                        <Button variant={'contained'}>Explore Now</Button>
                        <Button variant={'link'}>Learn More</Button>
                    </StyledButtonsBlock>
                </StyledMainInfo>
                <StyledListStatistics>
                    {mainStatistics.map((item) => (
                        <StatisticItem key={item.title} title={item.title} count={item.count} />
                    ))}
                </StyledListStatistics>

                <StyledMainImage>
                    <StyledPhotoWrapper>
                        <Photo src={mainPhoto} alt={'Main section photo'} />
                    </StyledPhotoWrapper>

                    <MainImageCard />
                </StyledMainImage>
            </StyledMain>
        </Container>
    );
};

const StyledMain = styled.main`
    padding: 92px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 170px;
    grid-template-areas: 'info image' 'statistics image';
`;
const StyledMainInfo = styled.div`
    grid-area: info;
    padding-top: 26px;
`;
const StyledMainImage = styled.div`
    position: relative;
    grid-area: image;
    display: flex;
    justify-content: center;
`;
const StyledButtonsBlock = styled.div`
    margin-bottom: 72px;
`;
const StyledListStatistics = styled.ul`
    grid-area: statistics;
    padding-bottom: 26px;
    display: flex;

    li + li {
        padding-left: 94px;
        border-left: 1px solid ${theme.colors.accent};
    }
`;
const StyledPhotoWrapper = styled.div`
    max-width: 465px;
    width: 100%;
    max-height: 545px;
    border-radius: 24px;
    overflow: hidden;
`;
