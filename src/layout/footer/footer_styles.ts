import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components';

const StyledFooter = styled.footer`
    padding: 92px 0;

    @media ${theme.media.tablet} {
        padding: 40px 0;
    }
`;

const ContactBox = styled.div`
    max-width: 272px;
    width: 100%;
    margin-right: 10px;
    @media ${theme.media.tablet} {
        margin: 0 0 48px 0;
        max-width: 100%;
    }
`;

const StyledContactsInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 48px;
    margin-bottom: 48px;
    border-bottom: 1px solid #838382;

    @media ${theme.media.desktop} {
        ${FlexWrapper} {
            flex-wrap: wrap;
        }
    }
    @media ${theme.media.tablet} {
        padding-bottom: 0;
        flex-direction: column;
    }
`;

const CopyrightHeader = styled.h4`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
`;

const StyledCopyRight = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${theme.media.tablet} {
        align-items: center;
    }
    @media ${theme.media.bigMobile} {
        flex-direction: column;
        align-items: flex-start;
        ${CopyrightHeader} {
            margin-bottom: 16px;
        }
    }
`;

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: ${theme.colors.textFont};

    &:last-child {
        margin-left: 28px;
    }
`;

const CopyrightLinksBox = styled.div`
    display: flex;
    @media ${theme.media.tablet} {
        flex-direction: column;
        ${Link} {
            margin: 0;

            &:first-child {
                margin-bottom: 16px;
            }
        }
    }
`;

export const S = {
    StyledFooter,
    ContactBox,
    StyledContactsInfo,
    StyledCopyRight,
    Link,
    CopyrightHeader,
    CopyrightLinksBox,
};
