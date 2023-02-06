
import {
    Wrapper,
    CardContainer,
    Product,
    Cart

} from "./styled"

import {Pizzas} from '../../data/data'






export function Home (){
    











    
    return(
        <Wrapper>
             
            <CardContainer>
                {Pizzas.map((item) =>{
                    return(
                        <Product key={item.id}>
                            
                            <p>{item.title}</p>
                            <img  src={item.image}/>
                            <p>{item.price}</p>

                            <button>Adcionar</button>
                        </Product>
                    )
                })}
            </CardContainer>
            
            <Cart>
                <h1>Seu Carrinho</h1>
                
            </Cart>
        </Wrapper>
    )
}