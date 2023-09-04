import React from 'react';
import { Button, ButtonsContainer, Container, Photo, SectionDescription, SectionTitle } from '../../../components';
import { StatisticItem } from './statisticItem/statisticItem';
import { MainImageCard } from './mainImageCard/mainImageCard';
import mainPhoto from '../../../assets/images/main_section/main.webp';
import { mainDescription, mainStatistics, mainTitle } from './mainSectionData';
import { CircleElement } from '../../../components/circleElement/circleElement';
import { Fade } from 'react-awesome-reveal';
import { S } from './mainSection_styles';

export const Main = () => {
    return (
        <Container>
            <Fade delay={200} triggerOnce={true}>
                <S.MainSection>
                    <S.MainContent>
                        <SectionTitle tagName={'h1'} title={mainTitle} />
                        <SectionDescription>{mainDescription}</SectionDescription>
                        <ButtonsContainer>
                            <Button variant={'contained'}>Explore Now</Button>
                            <Button variant={'link'}>Learn More</Button>
                        </ButtonsContainer>
                    </S.MainContent>

                    <S.MainStatistics>
                        {mainStatistics.map((item) => (
                            <StatisticItem key={item.id} title={item.title} count={item.count} />
                        ))}
                    </S.MainStatistics>

                    <S.MainImage>
                        <S.PhotoWrapper>
                            <Photo src={mainPhoto} alt={'Main section photo'} ratio={'17 / 20'} />
                        </S.PhotoWrapper>
                        <CircleElement />
                        <MainImageCard />
                    </S.MainImage>
                </S.MainSection>
            </Fade>
        </Container>
    );
};
