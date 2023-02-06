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
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 40%;
    height: auto;

    padding: 2rem;

    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;


    border: 1px solid ${(props) => props.theme['base-card']};

`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;


    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    padding: 1rem;

    width: 400px;
    height: 100px;

    img{
        width: 60px;
        height: 60px;
    }

    span{
        color: red;
        font-weight: bold;
    }


    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;

       

        svg{
            cursor: pointer;
        }
    }


`
export const Info = styled.section`
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap:4px;


    p:nth-child(1){
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
        color: #1E1E1E;

    }

    p:nth-child(2){
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
      
        color: #1E1E1E;
    }
  
`



export const Title = styled.p`
    font-weight: bold;
    color: red;

    text-transform: uppercase;

`


export const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
`

export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 40%;
    height: 450px;

    padding: 2rem;

    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;


    
`




export const ProductCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;


    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    padding: 1rem;

    width: 400px;
    height: 100px;

    img{
        width: 60px;
        height: 60px;
    }

    span{
        color: red;
        font-weight: bold;
    }


    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;

       

        svg{
            cursor: pointer;
        }
    }




`

export const EmptyCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h3{
        font-weight: bold;
        font-size: 30px;
    }

`