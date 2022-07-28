import { Aside, CartStyled } from './styles'
import { Heading3, Body } from '../Typography/styles'
import CartProduct from '../CartProduct'
import CartTotal from '../CartTotal'

export default function Cart({ list, setCartList }) {
    return(
        <Aside>
            <div>
                <Heading3 color='white'>Carrinho de compras</Heading3>
                <CartStyled list={list}>
                    {
                        list.length > 0 ?
                            <>
                                <CartProduct list={list} setCartList={setCartList}/>
                                <CartTotal list={list} setCartList={setCartList}/>            
                            </>
                        :   
                            <>
                                <Heading3>Sua sacola está vazia</Heading3>
                                <Body color='grey'>Adicione itens</Body>
                            </>
                    }
                </CartStyled>
            </div>
        </Aside>
    )    
}