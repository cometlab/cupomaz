import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
`;

Container.Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

Container.CouponList = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 30px 0%;
`;

Container.Title = styled.h2`
    font-size: 1.5em;
    font-weight: 700;
    margin: 30px 0;
`;

Container.SingleCoupon = styled.article`
    box-shadow: 0 0 3px 0 rgba(0,0,0, .15);
    border-radius: 3px;
    display: flex;
    flex-wrap: wrap;
    padding: 8px 12px;
    align-items: flex-end;
    height: 230px;

    img {
        width: 80px;
        height: auto;
        margin: 0 auto;
    }

    header {
        font-size: 1.1em;
        flex-basis: 100%;
        height: 60px;
        overflow: hidden;
        line-height: 1.2em;  
    }

    button {
        cursor: pointer;
        border-radius: 3px;
        flex-basis: 100%;
        height: 45px;
        margin: 10px 0;
        font-size: 1.1em;
        font-weight: 700;
        color: #222;
        border: dotted 1px #43c801;
        background-color: #ffe09e;
        position: relative;
        text-align: end;

        :hover {
            span {
            background-color: #4dbd15;
            clip-path: polygon(80% 0, 100% 90%, 100% 100%, 0% 100%, 0 53%, 0% 0%);
            }
        }
    }

    button::after {
        content: "";
        position: absolute;
        background-color: #339601;
        height: 20px;
        width: 25px;
        right: 0;
        top: 0;
        clip-path: polygon(5% 0, 0% 100%, 100% 95%);
        transition: 150ms ease-in-out;
    }

    button:hover::after {
        height: 41px;
        width: 57px;
        right: 0;
        top: 0;
        clip-path: polygon(13% 0, 0% 100%, 100% 95%);
    }

    span {
        background-color:  #43c801;
        color: #fff;
        font-size: 1.1em;
        font-weight: 400;
        position: absolute;
        display: flex;
        border-radius: 3px 0 3px 3px;
        justify-content: center;
        align-items: center;
        width: 261px;
        left: -1px;
        bottom: -1px;
        height: 45px;
        clip-path: polygon(90% 0, 100% 45%, 100% 100%, 0% 100%, 0 53%, 0% 0%);
        transition: 150ms ease-in-out;
    }
`;

Container.StoreList = styled.section`
    display: inline-grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
`;

Container.SingleStore = styled.article`
    cursor: pointer;
    display: flex;
    box-shadow: 0 0 3px rgba(0,0,0, .15);
    padding: 10px;
    border-radius: 3px;
`;
