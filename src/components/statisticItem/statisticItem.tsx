import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type Props = {
    count: number;
    title: string;
};

export const StatisticItem: FC<Props> = ({ count, title }) => {
    return (
        <StyledListItem>
            <h4>
                {count}
                <span>K</span>
            </h4>
            <span>{title}</span>
        </StyledListItem>
    );
};
const StyledListItem = styled.li`
    &:not(:last-child) {
        padding-right: 28px;
    }

    h4 {
        font-family: Spectral, sans-serif;
        font-size: 48px;
        font-weight: 500;
        line-height: 1.2;
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
`;
