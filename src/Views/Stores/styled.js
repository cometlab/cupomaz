import styled from 'styled-components'

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

Container.Title = styled.div`
    font-size: 3em;
    text-align: center;
    margin: 5% 0;
`;

Container.StoreList = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;

`;

Container.SingleStore = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 0 3px rgba(0,0,0,.15);
    border-radius: 8px;

    img {
        padding: 15px;
    }
`;

