
import {
    Wrapper,
    CardContainer,
    Product,
    Cart

} from "./styled"

import {Pizzas, CarItem} from '../../data/data'
import { useState } from "react"






export function Home (){
    const [shoppingCart, setShoppingCart] = useState<CarItem[]>([])


    //Função de adcionar item

    function handleAddToCart(id: number){
        //Pegar o id do produto
        const idProduct = Pizzas.find((pizza) => pizza.id === id)

        //Verificando se já está no carrinho 
        const alreadyInShoppingCart = shoppingCart.find((item) => item.product.id === id)

        //se o livro estiver no carrinho de compras

        if(alreadyInShoppingCart){
            const newShoppingCart:CarItem[] = shoppingCart.map((item) =>{
                if(item.product.id === id)
                ({
                    ...item,
                    quantity: item.quantity++
                });
                return item  
            });
            setShoppingCart(newShoppingCart)
            return
        }

        // se o livro ainda não estiver no carrinho de compras

        const cartItem: CarItem = {
            product: idProduct!,
            quantity: 1,
        }

        const newShoppingcart: CarItem[] = [...shoppingCart, cartItem]

        setShoppingCart(newShoppingcart)
    }


    //Função remover do carrinho

    function handleRemoveFromCart(id: number){
        //Verificar se está no carrinho

        const alreadyInShoppingCart = shoppingCart.find((item) => item.product.id === id)

        //Se estiver, remover a quantidade 

        if(alreadyInShoppingCart!.quantity > 1){
            const newShoppingCart:CarItem[] = shoppingCart.map((item) =>{
                if(item.product.id === id)
                ({
                    ...item,
                    quantity: item.quantity--
                })
                return item;
            })

            setShoppingCart(newShoppingCart)
            return;
        }

        const newShoppingCart: CarItem[] = shoppingCart.filter((item) => item.product.id !== id);

        setShoppingCart(newShoppingCart)

    }


    //Calcular o preço total

    const totalCart = shoppingCart.reduce((total, current) =>{
        return total + current.product.price * current.quantity
    }, 0)







    
    return(
        <Wrapper>
             
            <CardContainer>
                {Pizzas.map((pizza) =>{
                    return(
                        <Product key={pizza.id}>
                            
                            <p>{pizza.title}</p>
                            <img  src={pizza.image}/>
                            <p>{pizza.price}</p>

                            <h3>
                                 {shoppingCart.find((item) => pizza.id === item.product.id)?.quantity
                                ? shoppingCart.find((item) => pizza.id === item.product.id)?.quantity
                                : 0}
                            </h3>

                            <button 
                                onClick={()=>handleAddToCart(pizza.id)}
                            >
                                +
                            </button>

                            <button 
                                onClick={()=>handleRemoveFromCart(pizza.id)}
                            >
                                -
                            </button>
                        </Product>
                    )
                })}
            </CardContainer>
            
            <Cart>
                <h1>Seu Carrinho</h1>
                {shoppingCart.map((item)=>{
                    return(
                        <div key={item.product.id}>
                            <p>{item.product.title}</p>
                            <img src={item.product.image} />
                            <p>{item.product.price}</p>
                            <p>{item.quantity}</p>

                            <button onClick={()=>handleRemoveFromCart(item.product.id)}>Remover</button>
                        </div>
                    )
                })}

                <h1>Preço total: {totalCart}</h1>
            </Cart>
        </Wrapper>
    )
}