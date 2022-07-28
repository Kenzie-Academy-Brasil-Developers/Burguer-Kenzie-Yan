import { CartProductStyled } from './styles'
import { Heading4, Caption } from "../Typography/styles"

export default function CartProduct({ list, setCartList }) {
    function handleRemoveItem(id) {
        setCartList((oldCartList) => oldCartList.filter((product) => product.id !== id))
    }

    return(
        list.map(({ id, name, category, img }) => {
            return(  
                <CartProductStyled key={id}>
                    <figure>
                        <img src={img} alt={name}/>
                    </figure>
                    <div>
                        <Heading4>{name}</Heading4>
                        <Caption color='grey'>{category}</Caption>
                    </div>
                    <button onClick={() => handleRemoveItem(id)}>remover</button>
                </CartProductStyled>
            )
        })
    )
}