import styled from 'styled-components'

export const Container = styled.section`
    padding: 0 2rem;

    header h1 {
        font-size: 1.725em;
        font-weight: 900;

        color: #222222; 
    }

    .stores-row {
        margin: 24px 0;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 20px;
    }
    
    .stores-row a {
        box-shadow: 0 0 7px rgba(0,0,0, 0.08);

        border-radius: 3px;
        padding: 8px;
    }
`;

export const Coupon = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    box-shadow: 0 0 8px rgba(0,0,0, 0.12);

    img {
        flex-basis: 100%;
    }
`;

Coupon.Title = styled.h2`
    font-size: 1.090em;
    font-weight: 700;
    line-height: 1.2em;
    padding: 24px 16px;
`;