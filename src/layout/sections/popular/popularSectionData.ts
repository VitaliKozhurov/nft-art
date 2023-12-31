import osvaldo from '../../../assets/images/popular_section/popular_osvaldo.webp';
import osvaldoIcon from '../../../assets/images/avatars/osvaldo.webp';
import ranson from '../../../assets/images/popular_section/popular_ranson.webp';
import ransonIcon from '../../../assets/images/avatars/ranson.webp';
import cristio from '../../../assets/images/popular_section/popular_cristio.webp';
import cristioIcon from '../../../assets/images/avatars/cristio.webp';
import sebastian from '../../../assets/images/popular_section/popular_sebastian.webp';
import sebastianIcon from '../../../assets/images/avatars/sebastian.webp';
import abraham from '../../../assets/images/popular_section/popular_abraham.webp';
import abrahamIcon from '../../../assets/images/avatars/abraham.webp';
import { TitleTextType } from '../../../components/sectionTitle/sectionTitle';

export const cardsData = [
    {
        imageUrl: osvaldo,
        avatarUrl: osvaldoIcon,
        ownerName: 'Osvaldo Percy',
    },
    {
        imageUrl: ranson,
        avatarUrl: ransonIcon,
        ownerName: 'Ranson Sqiure',
    },
    {
        imageUrl: cristio,
        avatarUrl: cristioIcon,
        ownerName: 'Cristio leo',
    },
    {
        imageUrl: sebastian,
        avatarUrl: sebastianIcon,
        ownerName: 'Sebastian waltan',
    },
    {
        imageUrl: abraham,
        avatarUrl: abrahamIcon,
        ownerName: 'Abraham Zack',
    },
];

export const popularTitle: TitleTextType[] = [
    { id: 1, text: 'Popular ', type: 'primary' },
    { id: 2, text: 'Artists ', type: 'accent' },
    { id: 3, text: 'On This Week', type: 'primary' },
];
