import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    width: 1200px;
    margin: 5% auto;
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 20px;
`;

export const Column = styled.section`
    .single-coupon-info {
        border-radius: 8px;
        box-shadow: 0 0 3px rgba(0,0,0,0.15);
        padding: 20px;

        article {
            display: grid;
            grid-template-columns: 1fr 6fr 2fr;

            .single-coupon-image {
                display: flex;
                justify-content: center;
            }

            .single-coupon-image img {
                width: 100%;
            }

            .single-coupon-description h2 {
                padding: 0 30px;
                font-size: 1.3em;
                line-height: 1.2em;
            }

            .single-coupon-link {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            .single-coupon-link p {
                cursor: pointer;
                flex-basis: 100%;
                background: #ffe09e;
                border: dotted 1px #43c801;
                border-radius: 3px;
                height: 35px;
                margin-bottom: 10px;

                font-size: 1.1em;
                font-weight: 700;
                
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .single-coupon-link a {
                flex-basis: 100%;
                text-decoration: none;
                background: #43c801;
                box-shadow: 0 3px 0 rgba(59,148,0, 1);

                border-radius: 3px;
                height: 35px;

                font-size: 1.1em;
                font-weight: 700;
                color: #FFFFFF;
                
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

`;
