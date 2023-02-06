import styled from "styled-components";




export const Wrapper =styled.div`
    display: flex;
    justify-content: center;

    align-items: center;
    gap: 2rem;
    

    width: 100vw;
    height: 100vh;



    border: 2px solid red;

`



export const CardContainer = styled.div`
    border: 1px solid black;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 40%;
    height: 40%;


`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;


`

export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40%;
    height: 40%;

    border: 1px solid black;
`