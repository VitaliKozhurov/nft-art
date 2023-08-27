import React from 'react';
import { Icon } from '../icon/icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Logo = () => {
    return (
        <StyledLogoLink href={'#'}>
            <Icon iconId={'logo'} />
            <h3>
                Creative<span>art</span>
            </h3>
        </StyledLogoLink>
    );
};

const StyledLogoLink = styled.a`
    position: relative;
    display: inline-flex;
    align-items: center;
    h3 {
        position: absolute;
        left: 32px;
        bottom: -22px;

        font-family: Spectral, sans-serif;
        font-size: 2rem;
        font-weight: 500;
        line-height: 120%;
        color: ${theme.colors.captionFont};
        span {
            color: ${theme.colors.accent};
        }

        @media ${theme.media.tablet} {
            bottom: -6px;
        }
    }
`;
