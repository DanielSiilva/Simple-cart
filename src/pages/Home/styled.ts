import styled from "styled-components";




export const Wrapper =styled.div`
    display: flex;
    justify-content: center;

    align-items: center;
    gap: 2rem;
    

    width: 100vw;
    height: 100vh;



  

`



export const CardContainer = styled.div`
    
    
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

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;

        background-color: ${(props) => props.theme['base-button']};

        svg{
            background-color: ${(props) => props.theme['base-button']};
            color: ${(props) => props.theme['purple']};
            padding: 2px;

            cursor: pointer;
        }
    }


`

export const Title = styled.p`
    font-weight: bold;
    color: red;

    text-transform: uppercase;

`

export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 40%;
    height: auto;

    
`

export const ProductCart = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    

    img{
        height: 40px;
        width: 40px;
    }


    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;

        background-color: ${(props) => props.theme['base-button']};

        svg{
            background-color: ${(props) => props.theme['base-button']};
            color: ${(props) => props.theme['purple']};
            padding: 2px;

            cursor: pointer;
        }
    }


`