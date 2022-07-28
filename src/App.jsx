import Global from './styles/global'
import { Container } from './styles/app'
import { useEffect, useState } from 'react';
import api from './services/api';
import Header from './components/Header';
import ProductsList from './components/ProductsList/styles';
import Product from './components/Product';
import Cart from './components/Cart';
import { Heading1 } from './components/Typography/styles';

function App() {
    const [mealList, setMealList] = useState([])
    const [mealListFiltered, setMealListFiltered] = useState(null)
    const [cartList, setCartList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        api.get('/products')
            .then(response => setMealList(response.data))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className="App">
            <Global/>
            <Container>
                <Header inputValue={inputValue} setInputValue={setInputValue} setMealListFiltered={setMealListFiltered} list={mealList}/>
                
                <main>
                    <section>
                    {
                        mealListFiltered ?
                        <>
                            <Heading1>Resultados para:</Heading1>
                            <Heading1 color='grey'>{inputValue}</Heading1>
                        </>
                        :
                        null
                    }
                        <ProductsList>
                            <Product items={mealList} isLoading={isLoading} setCartList={setCartList} cartList={cartList} filteredList={mealListFiltered}/>
                        </ProductsList>
                    </section>
                    <Cart list={cartList} setCartList={setCartList}/>
                </main>
            </Container>
        </div>
    );
}

export default App;
