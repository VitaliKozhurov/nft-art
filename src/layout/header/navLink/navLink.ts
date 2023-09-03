import styled from 'styled-components';
import { Link } from 'react-scroll';
import { theme } from '../../../styles/Theme';

export const MenuItem = styled.li``;

export const NavLink = styled(Link)`
    position: relative;
    cursor: pointer;
    color: ${theme.colors.headerLink};
    transition: color 0.3s ease-out;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.accent};
        bottom: -2px;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }

    &:hover,
    &.active {
        color: #fff;
    }

    &:hover::before,
    &.active::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`;
