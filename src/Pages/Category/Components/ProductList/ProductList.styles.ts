/**
 * @desc Librerias
 */
import { styled } from "styled-components";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:block;
    max-width:1600px;
    z-index:2;
    margin:20px auto; 
`;

/**
 * @desc Raiz de los componentes
 */
export const Content = styled.div`
    display:grid;
    width:100%;
    margin:0 auto;
    padding:0px 2%;
    grid-template-columns:repeat(5, 1fr);
    padding:20px 0px;

    @media ( width <= 768px ){
        grid-template-columns:repeat(3, 1fr);
    }
    
    @media ( width <= 390px ){
        grid-template-columns:repeat(1, 1fr);
    }
`;

/**
 * @desc Titulo
 */
export const Title = styled.h1`
    display:flex;
    color:#333;
    width:100%;
    margin-bottom:5px;
    align-items:center;
    justify-content:center;
    position:relative;
    text-transform:capitalize;

    &:before, &:after{
        display:block;
        width:300px;
        content:"";
        border-bottom:1px solid #42b782;
        position:absolute;
        top:calc( 100% + 10px );
        left:calc( 50% - 150px );
    }
    &:before{
        top:-10px;
    }
`;

/**
 * @desc SubTitulo
 */
export const SubTitle = styled.h2`
    display:flex;
    color:#42b782;
    font-weight:500;
    margin-bottom:5px;
    border-left:2px solid #42b782;
    padding-left:10px;
`;