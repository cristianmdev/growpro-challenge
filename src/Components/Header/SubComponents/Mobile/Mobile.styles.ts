/**
 * @desc Dependencias
 */
import { styled } from "styled-components";
import { Link as LinkWouter } from "wouter";

/**
 * @desc Icon's
 */
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * @desc Raiz de los componentes
 */
export const Root = styled.div`
    display:none;
    @media (max-width:390px){
        display:flex;
    }
`;
    /**
     * @desc Menu de la página
     */
    export const Menu = styled.menu`
        display:flex;
        background:#000;
        width:100%;
        height:100%;
        position:fixed;
        top:0px;
        left:0px;
        z-index:99;
        flex-direction:column;
        align-items:center;
        margin:0px;
        padding:0px;
        display:none;
        &.active{
            display:flex;
        }
    `;

    /**
     * @desc Botón del cierre
     */
    export const Close = styled.button`
        display:flex;
        background:transparent;
        color:white;
        width:120px;
        border-radius:50%;
        align-items:center;
        justify-content:center;
        border:0px;
        position:absolute;
        bottom:20px;
        left:calc(50% - 60px);
    `;

    /**
     * @desc Icono de apertura
     */
    export const IconOpen = styled( MenuIcon )`
        color:white;
    `;

    /**
     * @desc Icono del cierre
     */
    export const IconClose = styled( CloseIcon )`
        color:white;
    `;

    /**
     * @desc Imagen de logotipo
     */
    export const Link = styled(LinkWouter)`
        color:white;
        text-decoration:none;
        padding:15px 0px;
        text-transform:capitalize;
    `;

    /**
     * @desc Botón
     */
    export const Button = styled.button`
        display:flex;
        background:transparent;
        border-radius:50%;
        align-items:center;
        justify-content:center;
        border:0px;
        margin:0px 20px;
    `;


    /**
     * @desc Secciones
     */
    export const Logotype = styled( LinkWouter )`
        display:flex;
        color:#48ba86;
        text-decoration:none;
        margin:25px;

        &:hover{
            color:#48ba86cc;
        }
        &:active{
            color:#48ba86;
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
     * @desc Imagen de logotipo
     */
    export const Logo = styled.img`
        max-height:48px;
    `;
