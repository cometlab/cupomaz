import { Container, Stores } from './styled'
import Link from 'next/link'
import Image from 'next/image'

export default props => {
  return (
    <Container>
      <header>
        <h1>As melhores lojas!</h1>
      </header>
      <div className='stores-row'>
        <Link href='/lojas/amazon'>
          <a>
            <Image src='/amazon.png' width={185} height={140} />
          </a>
        </Link>
        <Link href='/lojas/zattini'>
          <a>
            <Image src='/zattini.png' width={185} height={140} />
          </a>
        </Link>
        <Link href='/lojas/netshoes'>
          <a>
            <Image src='/netshoes.png' width={185} height={140} />
          </a>
        </Link>
        <Link href='/lojas/peixe-urbano'>
          <a>
            <Image src='/peixe-urbano.png' width={185} height={140} />
          </a>
        </Link>
        <Link href='/lojas/renner'>
          <a>
            <Image src='/renner.png' width={185} height={140} />
          </a>
        </Link>
        <Link href='/lojas/americanas'>
          <a>
            <Image src='/americanas.png' width={185} height={140} />
          </a>
        </Link>
        <Link href='/lojas/submarino'>
          <a>
            <Image src='/submarino.png' width={185} height={140} />
          </a>
        </Link>
      </div>
    </Container >
  )
}