import { useEffect, useState } from 'react'
import { Container } from './styles'
import { Body600 } from '../Typography/styles'
import { Button } from '../Button/styles'

export default function CartTotal({ list, setCartList }) {
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        setTotal(list.reduce((currentItem, nextItem) => currentItem + nextItem.price, 0))
    }, [list])

    return(
        <Container>
            <div>
                <Body600>Total</Body600>
                <Body600 color='grey'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Body600>
            </div>
            <Button color='grey' size='big' onClick={() => setCartList([])}>Remover todos</Button>
        </Container>
    )
}