import React from 'react';
import { AmazingCard, Button, Container, FlexWrapper, SectionTitle, StyledSection } from '../../../components';
import cyberpank from '../../../assets/images/amazing_section/amazing_cyberpank.webp';
import surgeon from '../../../assets/images/amazing_section/amazing_surgeon.webp';
import charge from '../../../assets/images/amazing_section/amazing_charge.webp';
import { TitleTextType } from '../../../components/sectionTitle/sectionTitle';
import styled from 'styled-components/dist/constructors/styled';

const cardsData = [
    {
        imageLink: cyberpank,
        cardTitle: 'Cyberpunk Cocomo',
        price: '490',
        time: '03:24:56',
    },
    {
        imageLink: charge,
        cardTitle: 'Charge, Qi tiao yu',
        price: '490',
        time: '03:24:56',
    },
    {
        imageLink: surgeon,
        cardTitle: 'Surgeon, Josh Rife',
        price: '490',
        time: '03:24:56',
    },
];

const amazingSectionTitle: TitleTextType[] = [
    { text: 'Amazing', type: 'accent' },
    { text: ' and Super Unique Art of This ', type: 'primary' },
    { text: 'Week', type: 'accent' },
];

export const Amazing = () => {
    return (
        <StyledSection>
            <Container>
                <FlexWrapper justify={'space-between'} align={'flex-end'} margin={'0 0 64px'}>
                    <SectionTitle tagName={'h2'} title={amazingSectionTitle} maxWidth={'506px'} />
                    <Button variant={'contained'}>See All</Button>
                </FlexWrapper>
                <FlexWrapper gap={'30px'}>
                    {cardsData.map((card) => (
                        <AmazingCard {...card} />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};
