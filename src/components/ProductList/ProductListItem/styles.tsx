import styled from 'styled-components';

export const StyledProductListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
`;

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
    & > h2, h5, p {
        margin: 0;
    }
`;
export const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
