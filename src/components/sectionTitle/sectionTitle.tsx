import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export type TitleTextType = { text: string; type: 'primary' | 'accent' };

type Props = {
    tagName: 'h1' | 'h2';
    title: TitleTextType[];
    maxWidth?: string;
};

export const SectionTitle: FC<Props> = ({ tagName, maxWidth, title }) => {
    return (
        <StyledSectionTitle as={tagName} maxWidth={maxWidth || '100%'} tagName={tagName}>
            {title.map((el) => (el.type === 'primary' ? el.text : <StyledSpan>{el.text}</StyledSpan>))}
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.h1<{ tagName: 'h1' | 'h2'; maxWidth: string }>`
    font-family: Spectral, sans-serif;
    letter-spacing: -1px;
    font-size: ${(props) => (props.tagName === 'h1' ? '64px' : '48px')};
    color: ${theme.colors.textFont};
    max-width: ${(props) => props.maxWidth};
    font-weight: 500;
    line-height: 1.2;
`;

const StyledSpan = styled.span`
    color: ${theme.colors.accent};
`;
