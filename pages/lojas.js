import Navigation from '../src/components/Navigation'
import { Container } from '../src/Views/Stores/styled'
import styled from '../src/Views/Stores/styled'

export default function Stores(props) {

    const storeList = props.storesRes.stores.map((store) => {
        return (
            <Container.SingleStore key={store.id}>
                <img src={store.thumbnail} />
            </Container.SingleStore>
        )
    })

    return (
        <>
            <Navigation />
            <Container>
                <Container.Title>Mais de 250 lojas parceiras!</Container.Title>
                <Container.StoreList>
                    {storeList}
                </Container.StoreList>
            </Container>
        </>
    )
}

export async function getStaticProps() {

    const storesData = await fetch('https://api.lomadee.com/v3/1611855841303b30b6c5f/store/_all?sourceId=36379559')
        .then((storesData) => {
            return storesData.json();
        })

    return {
        props: {
            storesRes: storesData,
        },
    }
}