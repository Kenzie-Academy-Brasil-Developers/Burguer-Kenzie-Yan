import { ProductStyled } from "./styles"
import { Heading3, Caption, Body600 } from '../Typography/styles'
import { Button } from "../Button/styles"

export default function Product({ items, isLoading, setCartList, cartList, filteredList }) {
    function handleAddToCart({ id, name, category, price, img }) {
        if(!cartList.find((product) => product.id === id)) {
            setCartList((oldCartList) => [...oldCartList, { id, name, category, price, img }])
        }
    }

    return(
        <>
        {   
            isLoading ?
                <Heading3>Carregando...</Heading3>
            :
                filteredList ?
                    filteredList.map(({ id, name, category, price, img }) => {
                        return(
                            <ProductStyled key={id}>
                                <figure>
                                    <img src={img} alt={name}/>
                                </figure>
                                <div>
                                    <Heading3>{name}</Heading3>
                                    <Caption color='grey'>{category}</Caption>
                                    <Body600 color='green'>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price)}</Body600>
                                    <Button onClick={() => handleAddToCart({ id, name, category, price, img })}>Adicionar</Button>
                                </div>
                            </ProductStyled>
                    )
                })
                :
                    items.map(({ id, name, category, price, img }) => {
                        return(
                            <ProductStyled key={id}>
                                <figure>
                                    <img src={img} alt={name}/>
                                </figure>
                                <div>
                                    <Heading3>{name}</Heading3>
                                    <Caption color='grey'>{category}</Caption>
                                    <Body600 color='green'>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price)}</Body600>
                                    <Button onClick={() => handleAddToCart({ id, name, category, price, img })}>Adicionar</Button>
                                </div>
                            </ProductStyled>
                        )
                    })
        }
        </>
    )
}