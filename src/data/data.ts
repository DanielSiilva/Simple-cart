export interface Pizza {
    id: number;
    title: string;
    description: string,
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
        title: 'Italy Pizza',
        description: 'Extra cheese and toping',
        image: './item01.svg',  
        price: 29.90
    },
    {
        id: 2,
        title: 'Combo Plate',
        description: "Extra cheese and toping",
        image: './item02.svg', 
        price: 51.90
    },
    {   
        id:3,
        title: 'Spanish Rice',
        description: "Extra garllic",
        image: './item03.svg',
        price: 55.99
    }
]