import { coupons } from '../../db/coupons.json'
import { Coupon, CouponListContainer } from './styled'

const CouponList = () => {

  const couponList = coupons.map((coupon) => {
    return (
      <Coupon key={coupon.id}>
        <img src={coupon.store.image} alt={coupon.store.name} />
        <Coupon.Title>
          {coupon.description}
        </Coupon.Title>
      </Coupon>
    )
  })

  return (
    <CouponListContainer>
      {couponList}
    </CouponListContainer>
  )
}

export default CouponList