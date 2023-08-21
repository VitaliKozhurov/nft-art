import React from 'react';
import { FlexWrapper } from '../../../components/common/flexWrapper';
import { Button } from '../../../components/button/button';
import cyberpank from '../../../assets/images/amazing_section/amazing_cyberpank.webp';
import surgeon from '../../../assets/images/amazing_section/amazing_surgeon.webp';
import charge from '../../../assets/images/amazing_section/amazing_charge.webp';
import { AmazingCard } from '../../../components/amazingCard/amazingCard';

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

export const Amazing = () => {
    return (
        <section>
            <FlexWrapper>
                <h2>
                    <span>Amazing</span> and Super Unique Art of This <span>Week</span>
                </h2>
                <Button variant={'contained'}>See All</Button>
            </FlexWrapper>
            <FlexWrapper gap={'30px'}>
                {cardsData.map((card) => (
                    <AmazingCard {...card} />
                ))}
            </FlexWrapper>
        </section>
    );
};
