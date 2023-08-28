import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

type Props = {
    count: number;
    title: string;
};

export const StatisticItem: FC<Props> = ({ count, title }) => {
    return (
        <StyledListItem>
            <h2>
                {count}
                <span>K</span>
            </h2>
            <span>{title}</span>
        </StyledListItem>
    );
};
const StyledListItem = styled.li`
    &:not(:first-child) {
        padding-left: 94px;
    }
    &:not(:last-child) {
        padding-right: 28px;
        border-right: 1px solid ${theme.colors.accent};
    }

    h2 {
        color: ${theme.colors.accent};
        margin-bottom: 8px;
        span {
            color: ${theme.colors.textFont};
        }
    }
    & > span {
        font-size: 1rem;
        line-height: 1.6;
    }

    @media ${theme.media.bigDesktop} {
        &:not(:first-child) {
            padding-left: 56px;
        }
    }
    @media ${theme.media.desktop} {
        &:not(:first-child) {
            padding-left: 28px;
        }
    }
`;
