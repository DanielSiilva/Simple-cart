export interface Pizza {
    id: number;
    title: string;
    image: string
    price: number;
}

export interface CarItem{
    product: Pizza;
    quantity: number;
}

export const Pizzas: Pizza[] = [
    {
        id: 1, 
        title: 'Calabreza', 
        image: './item01.svg',  
        price: 29.90
    },
    {
        id: 2,
        title: 'portuguesa',
        image: './item02.svg', 
        price: 51.90
    },
    {   
        id:3,
        title: 'Mussarela',
        image: './item03.svg',
        price: 55.99
    }
]