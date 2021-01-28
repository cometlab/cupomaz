import React from 'react';
import { coupons } from '../../db/coupons.json';
import { Coupon, CouponListContainer } from './styled';
import { useRouter } from 'next/router'

const CouponList = () => {
  const router = useRouter()
  const couponList = coupons.map((coupon) => (
    <Coupon key={coupon.id}>
      <img src={coupon.store.image} alt={coupon.store.name} />
      <Coupon.Title>
        {coupon.description}
      </Coupon.Title>
      <Coupon.Button
        onClick={function (params) {
          router.push(`/cupom?${coupon.id}`)
        }}>
        Usar Cupom
      </Coupon.Button>
    </Coupon>
  ));

  return (
    <CouponListContainer>
      {couponList}
    </CouponListContainer>
  );
};

export default CouponList;
