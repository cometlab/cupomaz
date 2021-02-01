import React from 'react'
import Navigation from '../../components/Navigation'
import { Container } from './styled'
import { useRouter } from 'next/router'

function Home(props) {
    const router = useRouter();

    const storeList = props.storeResponse.stores.slice(0, 16).map((store) => {
        return (
            <Container.SingleStore key={store.id} onClick={() => {
                router.push(`/loja?${store.id}`)
            }}>
                <img src={store.thumbnail} alt={store.name} />
            </Container.SingleStore>
        )
    })

    const couponList = props.couponRes.coupons.slice(0, 20).map((coupon) => {
        return (
            <Container.SingleCoupon key={coupon.id}>
                <img src={coupon.store.image} alt={coupon.store.name} />
                <header>{coupon.description}...</header>
                <button onClick={() => {
                    router.push(`/cupom?${coupon.id}`);
                }}>
                    {coupon.code}
                    <span>Usar Cupom</span>
                </button>
            </Container.SingleCoupon>
        )
    })

    return (
        <Container>
            <Navigation />
            <Container.Content>
                <Container.Title>As melhores Lojas!</Container.Title>
                <Container.StoreList>
                    {storeList}
                </Container.StoreList>
                <Container.Title>
                    Os melhores Cupons de Desconto!
                </Container.Title>
                <Container.CouponList>
                    {couponList}
                </Container.CouponList>
            </Container.Content>
        </Container>
    )
}

export default Home


export async function getStaticProps() {
    const couponRes = await fetch('http://api.lomadee.com/v2/1611855841303b30b6c5f/coupon/_all?sourceId=36379559')
        .then((couponsRes) => {
            return couponsRes.json();
        });

    const storeRes = await fetch('https://api.lomadee.com/v3/1611855841303b30b6c5f/store/_all?sourceId=36379559')
        .then((storeRes) => {
            return storeRes.json();
        })

    return {
        props: {
            warning: 'Server incoming data...',
            couponRes: couponRes,
            storeResponse: storeRes,
        },
    }
}