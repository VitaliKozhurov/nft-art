import React, { FC } from 'react';
import styled from 'styled-components';

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

const StyledAbout = styled.div``;
const StyledAboutTitle = styled.h4``;
const StyledAboutList = styled.ul``;
