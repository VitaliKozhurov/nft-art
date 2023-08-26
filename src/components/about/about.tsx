import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type LinkProps = { linkUrl: string; linkTitle: string };

type Props = {
    title: string;
    links: LinkProps[];
};

export const About: FC<Props> = ({ title, links }) => {
    return (
        <StyledAbout>
            <StyledAboutTitle>{title}</StyledAboutTitle>
            <StyledAboutList>
                {links.map((link) => (
                    <li key={link.linkTitle}>
                        <a href={link.linkUrl || '#'}>{link.linkTitle}</a>
                    </li>
                ))}
            </StyledAboutList>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    &:not(:last-child) {
        margin-right: 94px;
    }
`;
const StyledAboutTitle = styled.h4`
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    margin-bottom: 24px;
`;
const StyledAboutList = styled.ul`
    li {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
        &:not(:last-child) {
            margin-bottom: 8px;
        }

        a {
            color: ${theme.colors.textFont};
        }
    }
`;
