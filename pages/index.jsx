import Navigation from '../src/components/Navigation'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
`;

const Content = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

const CouponList = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 30px 0%;
`;

const Title = styled.h1`
    font-size: 1.5em;
    font-weight: 700;
`;

const SingleCoupon = styled.article`
    box-shadow: 0 0 3px 0 rgba(0,0,0, .15);
    border-radius: 8px;
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
        font-size: 1.5em;
        font-weight: 700;
        color: #222;
        border: dotted 1px #43c801;
        background-color: #ffe09e;
        position: relative;

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
        font-size: .875em;
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

function Home(props) {
    const couponList = props.response.coupons.slice(0, 20).map((coupon) => {
        return (
            <SingleCoupon key={coupon.id}>
                <img src={coupon.store.image} alt={coupon.store.name} />
                <header>{coupon.description}...</header>
                <button>
                    {coupon.code}
                    <span>Usar Cupom</span>
                </button>
            </SingleCoupon>
        )

    })

    return (
        <Container>
            <Navigation />
            <Content>
                <Title>
                    Os melhores Cupons de Desconto!
                </Title>
                <CouponList>
                    {couponList}
                </CouponList>
            </Content>
        </Container>

    )
}

export async function getStaticProps() {
    const couponRes = await fetch('http://sandbox-api.lomadee.com/v2/1611855841303b30b6c5f/coupon/_all?sourceId=36379559')
        .then((couponsRes) => {
            return couponsRes.json();
        });

    if (!couponRes) {
        notFound: 'Not Found!'
    }

    return {
        props: {
            warning: 'Server incoming data...',
            response: couponRes,
        },
    }
}

export default Home