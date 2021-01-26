import styled from 'styled-components'


export const CouponListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;

    margin: 24px 0;
`;

export const Coupon = styled.article`
    cursor: pointer;
    padding: 20px 16px;

    box-shadow: 0 0 7px rgba(0,0,0, 0.12);

    border-radius: 5px;
    text-align: center;

    img {
        width: 80px;
        padding: 16px 0;
    }
`;

Coupon.Title = styled.h2`
    font-size: .925em;
    /* font-weight: 700; */
    line-height: 1.2em;
`;