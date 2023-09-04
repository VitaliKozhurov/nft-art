import React from 'react';
import { Button, ButtonsContainer, Container, Photo, SectionDescription, SectionTitle } from '../../../components';
import { StatisticItem } from './statisticItem/statisticItem';
import { MainImageCard } from './mainImageCard/mainImageCard';
import styled from 'styled-components';
import mainPhoto from '../../../assets/images/main_section/main.webp';
import { theme } from '../../../styles/Theme';
import { mainDescription, mainStatistics, mainTitle } from './mainSectionData';
import { CircleElement } from '../../../components/circleElement/circleElement';
import { Fade, Zoom } from 'react-awesome-reveal';

export const Main = () => {
    return (
        <Container>
            <Fade delay={200} triggerOnce={true}>
                <MainSection>
                    <MainContent>
                        <SectionTitle tagName={'h1'} title={mainTitle} />
                        <SectionDescription>{mainDescription}</SectionDescription>
                        <ButtonsContainer>
                            <Button variant={'contained'}>Explore Now</Button>
                            <Button variant={'link'}>Learn More</Button>
                        </ButtonsContainer>
                    </MainContent>

                    <MainStatistics>
                        {mainStatistics.map((item) => (
                            <StatisticItem key={item.title} title={item.title} count={item.count} />
                        ))}
                    </MainStatistics>

                    <MainImage>
                        <PhotoWrapper>
                            <Photo src={mainPhoto} alt={'Main section photo'} ratio={'17 / 20'} />
                        </PhotoWrapper>
                        <CircleElement />
                        <MainImageCard />
                    </MainImage>
                </MainSection>
            </Fade>
        </Container>
    );
};

const MainSection = styled.main`
    padding: 92px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 170px;
    grid-template-areas: 'content image' 'statistics image';
    margin-top: 84px;
    @media ${theme.media.bigDesktop} {
        column-gap: 100px;
    }

    @media ${theme.media.desktop} {
        column-gap: 25px;
    }

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
        grid-template-areas: 'content' 'image' 'statistics';
        padding: 60px 0 40px;
    }
`;
const MainContent = styled.div`
    grid-area: content;
    padding-top: 26px;

    @media ${theme.media.tablet} {
        padding-top: 0;
        text-align: center;
    }
`;

const MainStatistics = styled.ul`
    grid-area: statistics;
    padding-bottom: 26px;
    display: flex;

    @media ${theme.media.tablet} {
        justify-content: center;
    }
`;
const MainImage = styled.div`
    grid-area: image;
    position: relative;
    display: flex;
    justify-content: center;
    padding-bottom: 96px;

    @media ${theme.media.tablet} {
        margin-bottom: 54px;
        padding-bottom: 76px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 32px;
    }
`;

const PhotoWrapper = styled.div`
    width: 83%;
    border-radius: 24px;
    overflow: hidden;

    @media ${theme.media.mobile} {
        width: 90%;
    }
`;
