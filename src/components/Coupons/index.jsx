import { Container, Coupon } from './styled'
import CouponList from '../CouponList'
import Image from 'next/image'

const Coupons = () => {
    return (
        <Container>
            <header>
                <h1>Os melhores cupons!</h1>
            </header>
            <CouponList />
        </Container>
    )
}

export default Coupons