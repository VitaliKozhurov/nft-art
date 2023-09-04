import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export type TitleTextType = { id: number; text: string; type: 'primary' | 'accent' };

type Props = {
    tagName: 'h1' | 'h2';
    title: TitleTextType[];
    maxWidth?: string;
};

export const SectionTitle: FC<Props> = ({ tagName, maxWidth, title }) => {
    return (
        <StyledSectionTitle as={tagName} $maxWidth={maxWidth || '100%'} $tagName={tagName}>
            {title.map((el) => (el.type === 'primary' ? el.text : <StyledSpan key={el.id}>{el.text}</StyledSpan>))}
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.h1<{ $tagName: 'h1' | 'h2'; $maxWidth: string }>`
    letter-spacing: -1px;
    color: ${theme.colors.textFont};
    max-width: ${(props) => props.$maxWidth};
`;

const StyledSpan = styled.span`
    color: ${theme.colors.accent};
`;
