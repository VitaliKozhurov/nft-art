import React from 'react';
import { Button } from '../../../components/button/button';
import styled from 'styled-components';
import mainPhoto from '../../../assets/images/main_section/main.webp';
import { FlexWrapper } from '../../../components/common/flexWrapper';
import { Photo } from '../../../components/photo/photo';
import { Container } from '../../../components/container/container';
import { SectionTitle, TitleTextType } from '../../../components/sectionTitle/sectionTitle';
import { SectionDescription } from '../../../components/sectionDescription/sectionDescription';
import { StatisticItem } from '../../../components/statisticItem/statisticItem';
import { theme } from '../../../styles/Theme';

const mainTitle: TitleTextType[] = [
    { text: ' Discover and Collect The Best NFTs', type: 'primary' },
    { text: 'Digital Art.', type: 'accent' },
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
const StyledButtonsBlock = styled.div`
    margin-bottom: 72px;
`;
const StyledMainImage = styled.div`
    grid-area: image;
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

const StyledCardInfo = styled.div``;
