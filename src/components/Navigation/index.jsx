import { Container } from './styled'
import Image from 'next/image'
import Link from 'next/link'


const Navigation = () => {
    return (
        <Container>
            <Link href='/'>
                <a>
                    <Image src='/logo.png' width={120} height={26} />
                </a>
            </Link>
            {/* <form action="">
                <img src='/loupe.svg' alt="" />
                <input type="text" name="" id="" placeholder='Encontre
                o melhor desconto...'/>
                <button type="submit">Buscar</button>
            </form> */}
            <nav>
                <Link href='/categorias'><a>Categorias</a></Link>
                <Link href='/lojas'><a>Lojas</a></Link>
            </nav>
        </Container>
    )
}

export default Navigation