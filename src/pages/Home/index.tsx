import {ArrowFatLinesDown, ArrowFatLinesUp,  ShoppingCart} from 'phosphor-react'


import {
    Wrapper,
    CardContainer,
    Product,
    Cart,
    ProductCart,
    Title,
    Info,
    Quantity,
    EmptyCart

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
                <div>
                    <h1>Lista de Produtos</h1>
                </div>

                {Pizzas.map((pizza) =>{
                    return(
                        <Product key={pizza.id}>
                            <img  src={pizza.image}/>

                            <Info>
                                <p>{pizza.title}</p>
                                <p>{pizza.description}</p>
                            </Info>
                            
                            <span>R$ {pizza.price}</span>
                            
                            <div>
                                <h3>
                                    {shoppingCart.find((item) => pizza.id === item.product.id)?.quantity
                                    ? shoppingCart.find((item) => pizza.id === item.product.id)?.quantity
                                    : 0}
                                </h3>
                                
                                <Quantity>
                                    <ArrowFatLinesUp 
                                        size={12}
                                        weight='fill'
                                        color='black'
                                        onClick={()=>handleAddToCart(pizza.id)}
                                    /> 
                                     <ArrowFatLinesDown 
                                        size={12}
                                        weight='fill'
                                        color='black'
                                        onClick={()=>handleRemoveFromCart(pizza.id)}
                                    />       
                                </Quantity>
                               
                            </div>
                           

                            
                        </Product>
                    )
                })}
            </CardContainer>
            
            <Cart>
                <div>
                    <h1>Itens no carrinho</h1>
                </div>

                {shoppingCart.length > 0 ? 
                
                    shoppingCart.map((item)=>{
                        return (
                            <ProductCart key={item.product.id}>
                                <img src={item.product.image} />
                                <Title>{item.product.title}</Title>
                                <p> R$ {item.product.price}</p>

                                <div>
                                    <ArrowFatLinesUp 
                                            size={12}
                                            weight='fill'
                                            color='black'
                                            onClick={()=>handleAddToCart(item.product.id)}
                                        /> 
                                    <p>{item.quantity}</p>

                                    <ArrowFatLinesDown 
                                            size={12}
                                            weight='fill'
                                            color='black'
                                            onClick={()=>handleRemoveFromCart(item.product.id)}
                                    /> 
                                </div>
                        
                            </ProductCart>
                        )
                    })
                    
                    :
                    
                    <EmptyCart>
                        <ShoppingCart 
                            size={50}
                            weight='fill'
                            color='black'
                        />

                        <h3> Está vazio</h3>
                    </EmptyCart>
                }

                <h1>Preço total: {totalCart.toFixed(2)}</h1>
            </Cart>
        </Wrapper>
    )
}