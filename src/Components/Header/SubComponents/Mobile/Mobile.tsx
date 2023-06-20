/**
 * @desc Dependencias
 */
import { useTranslation } from "react-i18next";

/**
 * @desc Estilos
 */
import { 
    Root,
        Menu, Button, Link,
        Close, IconOpen, IconClose,
        Logotype,
            Logo, Title
} from "./Mobile.styles";

interface IMobileProps{
    onOpen: () => void;
    onClose: () => void;
    show: boolean;
}

/**
 * @desc Componente de la tarjeta de un producto
 */
const Mobile = ( props : IMobileProps ) => {

    // Alias de las propiedades
    const { onOpen, onClose, show } = props;
    // Traducciones
    const { t } = useTranslation();

    return (
        <Root>
            
            { /* Hamburguesa mobile */ }
            <Button onClick={ () => onOpen() }>
                <IconOpen />
            </Button>
            
            { /* Menu mobile */ }
            <Menu className={ show ? "active" : "" }>
                
                { /* Sección del logo */}
                <Logotype href="/">
                    <Logo src="/images/logo.png" /> 
                    <Title>GrowPro Bicycles</Title>
                </Logotype>

                <Link href="/bicycle/sub-category/electrics" onClick={ onClose }>{ t("electrics") }</Link>
                <Link href="/bicycle/sub-category/moderns" onClick={ onClose }>{ t("moderns") }</Link>
                <Link href="/bicycle/sub-category/old" onClick={ onClose }>{ t("old") }</Link>
            
                <Close onClick={ () => onClose( ) }>
                    <IconClose /> Cerrar
                </Close>
            
            </Menu>

        </Root>
    );

};

export default Mobile;