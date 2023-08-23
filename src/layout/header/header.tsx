import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/menu';
import { Logo } from '../../components/logo/logo';
import { Container } from '../../components/container/container';
import { FlexWrapper } from '../../components/common/flexWrapper';
import { Button } from '../../components/button/button';

const links = [
    { linkTitle: 'Marketplace', linkUrl: '#' },
    { linkTitle: 'Artists', linkUrl: '#' },
    { linkTitle: 'Community', linkUrl: '#' },
    { linkTitle: 'Collections', linkUrl: '#' },
];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo />
                    <Menu links={links} />
                    <Button as={'a'} href={'#'} variant={'contained'}>
                        Contact
                    </Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 28px 0;
`;
