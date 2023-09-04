import cyberpank from '../../../assets/images/amazing_section/amazing_cyberpank.webp';
import charge from '../../../assets/images/amazing_section/amazing_charge.webp';
import surgeon from '../../../assets/images/amazing_section/amazing_surgeon.webp';
import { TitleTextType } from '../../../components/sectionTitle/sectionTitle';

export const amazingCardsData = [
    {
        id: 1,
        imageLink: cyberpank,
        cardTitle: 'Cyberpunk Cocomo',
        price: '490',
        time: '03:24:56',
    },
    {
        id: 2,
        imageLink: charge,
        cardTitle: 'Charge, Qi tiao yu',
        price: '490',
        time: '03:24:56',
    },
    {
        id: 3,
        imageLink: surgeon,
        cardTitle: 'Surgeon, Josh Rife',
        price: '490',
        time: '03:24:56',
    },
];

export const amazingSectionTitle: TitleTextType[] = [
    { id: 1, text: 'Amazing', type: 'accent' },
    { id: 2, text: ' and Super Unique Art of This ', type: 'primary' },
    { id: 3, text: 'Week', type: 'accent' },
];
