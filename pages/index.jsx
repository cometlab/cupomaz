import Navigation from '../src/components/Navigation'
import TopStores from '../src/components/TopStores'
import Coupons from '../src/components/Coupons'
import styled from 'styled-components'



const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`


export default function Home() {
  return (
    <Container>
      <Navigation />
      <TopStores />
      <Coupons />
    </Container>
  )
}
