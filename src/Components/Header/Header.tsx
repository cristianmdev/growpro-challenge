/**
 * @desc Dependencias
 */
import { useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * @desc 
 */
import Mobile from "./SubComponents/Mobile";

/**
 * @desc Estilos
 */
import { 
    Root,
        Logotype, Menu,
        Title,
            Logo, Link
} from "./Header.styles";

/**
 * @desc Componente de la tarjeta de un producto
 */
const Header = () => {

    // Indicador del menu
    const [ showMenu, setShowMenu ] = useState( false );
    // Traducciones
    const { t } = useTranslation();

    return (
        <Root>
            
            { /* Sección del logo */}
            <Logotype href="/">
                <Logo src="/images/logo.png" /> 
                <Title>GrowPro Bicycles</Title>
            </Logotype>

            { /* Sección del menu */}
            <Menu>
                <Link href="/bicycle/sub-category/electrics">{ t("electrics") }</Link>
                <Link href="/bicycle/sub-category/moderns">{ t("moderns") }</Link>
                <Link href="/bicycle/sub-category/old">{ t("old") }</Link>
            </Menu>

            { /* Hamburguesa mobile */ }
            <Mobile show={ showMenu }
                    onOpen={ () => setShowMenu( true ) } 
                    onClose={ () => setShowMenu( false ) } 
            />

        </Root>
    );

};

export default Header;