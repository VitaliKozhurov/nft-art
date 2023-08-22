import React from 'react';
import { Icon } from '../icon/icon';
import styled from 'styled-components';

const socialsData = [
    { id: 'facebook', url: 'https://www.facebook.com/' },
    { id: 'telegram', url: 'https://telegram.org/' },
    { id: 'twitter', url: 'https://twitter.com/' },
    { id: 'linkedin', url: 'https://www.linkedin.com/' },
];

export const Socials = () => {
    return (
        <StyledSocialList>
            {socialsData.map((social) => (
                <li key={social.id}>
                    <a href={social.url}>
                        <Icon iconId={social.id} />
                    </a>
                </li>
            ))}
        </StyledSocialList>
    );
};

const StyledSocialList = styled.ul``;
