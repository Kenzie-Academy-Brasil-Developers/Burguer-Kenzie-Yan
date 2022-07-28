import Logo from "../Logo"
import InputSearch from '../InputSearch'
import { HeaderStyled } from './styles'

export default function Header({ setMealListFiltered, list, inputValue, setInputValue }) {
    return(
        <HeaderStyled>
            <div>
                <Logo/>
                <InputSearch inputValue={inputValue} setInputValue={setInputValue} list={list} setMealListFiltered={setMealListFiltered} placeholder='Digitar Pesquisa'>Pesquisar</InputSearch>
            </div>
        </HeaderStyled>
    )
}