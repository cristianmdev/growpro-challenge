/**
 * @desc Librerias
 */
import { Link as LinkWouter } from "wouter";
import { styled } from "styled-components";

/**
 * @desc Raiz de los componentes
 */
export const Root = styled( LinkWouter )`
    display:block;
    background:white;
    padding: 10px;
    border-radius:6px;
    margin:10px;
    text-decoration:none;
    overflow:hidden;

    & > *{
        user-select:none;
    }
`;

    /**
     * @desc Linea horizontal
     */
    export const Horizontal = styled.hr`
        border:0px;
        border-bottom:1px solid #dddc;
        margin:10px 0px;
    `;

    /**
     * @desc Raiz de los componentes
     */
    export const Figure = styled.div`
        display:flex;
        height:160px;
        justify-content:center;
        align-items:center;
    `;

    /**
     * @desc Raiz de los componentes
     */
    export const Image = styled.img`
        max-width: 75%;
        max-height:120px;
    `;

    /**
     * @desc Raiz de los componentes
     */
    export const Title = styled.h4`
        color:#444;
        margin:5px 0px;
    `;

    /**
     * @desc Raiz de los componentes
     */
    export const Description = styled.p`
        color:#777;
        margin:0px;
        font-size:12px;
    `;