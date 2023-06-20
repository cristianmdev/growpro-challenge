/**
 * @desc Librerias
 */
import { styled } from "styled-components";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:block;
    width:100%;
    max-width:1600px;
    z-index:2;
    margin:20px auto; 
    box-sizing:border-box;

`;

/**
 * @desc Raiz de los componentes
 */
export const Section = styled.div`
    display:flex;
    width:100%;
    margin:0 auto;
    margin-bottom:20px;
    flex-direction:column;
    box-sizing:border-box;
`;

/**
 * @desc Titulo
 */
export const Title = styled.h1`
    display:flex;
    color:#333;
    width:100%;
    margin-bottom:40px;
    align-items:center;
    justify-content:center;
    position:relative;

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

    @media (max-width: 390px){
        font-size:1.5rem;
        text-align:center;
    }
`;

/**
 * @desc SubTitulo
 */
export const SubTitle = styled.h2`
    display:flex;
    color:#42b782;
    font-weight:500;
    margin:0px 10px;
    margin-bottom:5px;
    border-left:2px solid #42b782;
    padding-left:10px;
    text-transform:capitalize;
`;