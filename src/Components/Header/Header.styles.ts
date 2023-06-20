/**
 * @desc Dependencias
 */
import { styled } from "styled-components";
import { Link as LinkWouter } from "wouter";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:grid;
    background:#111;
    width:90%;
    height:50px;
    grid-template-columns:minmax(200px, 50%) 50%;
    position:fixed;
    top:25px;
    z-index:3;
    margin:0px;
    left:5%;
    border-radius:50px;
    box-sizing:border-box;

    @media (max-width:390px){
        display:flex;
        width:100%;
        height:60px;
        border-radius:0px;
        top:0px;
        left:0px;
        align-items:center;
        justify-content:space-between;
    }
`;

    /**
     * @desc Secciones
     */
    export const Title = styled.h5`
        display:flex;
        align-items:center;
        margin:0px;
    `;

    /**
     * @desc Secciones
     */
    export const Logotype = styled( LinkWouter )`
        display:flex;
        color:#48ba86;
        text-decoration:none;
        margin:0px 25px;

        &:hover{
            color:#48ba86cc;
        }
        &:active{
            color:#48ba86;
        }

        @media (max-width:390px){
            margin:0px;
        }
    `;
    
    /**
     * @desc Imagen de logotipo
     */
    export const Logo = styled.img`
        max-height:48px;
    `;

    /**
     * @desc Menu de la página
     */
    export const Menu = styled.menu`
        display:flex;
        align-items:center;
        justify-content:right;

        @media (max-width:390px){
            display:none;
        }
    `;


    /**
     * @desc Links
     */
    export const Link = styled( LinkWouter )`
        display:block;
        color:#fff;
        margin:0px 25px;
        text-decoration:none;
        text-transform:capitalize;

        &:hover{
            color:#48ba86cc;
        }
        &:active{
            color:#48ba86;
        }
    `;