import { Container, StyledInput } from './styles'
import { Button } from '../Button/styles'
import { useEffect } from 'react'

export default function InputSearch({ placeholder, children, setMealListFiltered, list, inputValue, setInputValue }) {
    function handleSearchClick(event) {
        setInputValue(event.target.value)
    }

    useEffect(() => {
        if(inputValue === '') {
            setMealListFiltered(null)
        } else {
            setMealListFiltered(list.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase())))
        }
    }, [inputValue])

    return(
        <Container>
            <StyledInput onChange={(event) => handleSearchClick(event)} placeholder={placeholder}/>
            <Button onClick={() => handleSearchClick()}>{children}</Button>
        </Container>
    )
}