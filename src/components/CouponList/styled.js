import styled from 'styled-components';

export const CouponListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 24px 0;
`;

export const Coupon = styled.article`
    padding: 20px 16px;
    border: dotted  1px #5E60CE;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-flow: columns;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    img {
        width: 80px;
        padding: 16px 0;
    }
`;

Coupon.Title = styled.h2`
    height: 50px;
    overflow: hidden;
    flex-basis: 100%;
    font-size: .925em;
    line-height: 1.2em;
`;

Coupon.Button = styled.button`
    cursor: pointer;
    height: 40px;
    flex-basis: 100%;
    padding: 8px 16px;
    margin-top: 24px;
    background: #43c801;
    border-radius: 3px;
    border: none;
    color: #FFF;
    transition: 150ms;
    font-size: 1.2em;
    font-weight: 700;
    box-shadow: 0 0 18px rgba(0,0,0, 0.12);
    :hover {
        box-shadow: 0 0 8px rgba(0,0,0, 0.12);
    }
`;