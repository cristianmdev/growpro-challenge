/**
 * @desc Dependencias
 */
import { useTranslation } from "react-i18next";

/**
 * @desc Estilos
 */
import { 
    Root,
    Breadcrumbs,
        Link, Typography,
    Figure, Image, 
    Content,
        SubCategory,
        Title, Created,
        Description
} from "./Details.styles";

/**
 * @desc Model's
 */
import { Bicycle } from "../../../../../../Models/Bicycle/Bicycle";

/**
 * @desc Interface del componente
 */
interface IProps {
    data: Bicycle;
}

/**
 * @desc Pantalla de productos
 */
const Details = ( props : IProps ) => {

    // Alias de las propiedades
    const { data } = props;
    
    // Traducciones
    const { t } = useTranslation();

    // Ruta
    const { description, name, image, createdAt, category, subCategory } = data;

    return (
        <Root>

            { /* Breadcrumbs */}
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/"> { t( category ) } </Link>
                <Link underline="hover" color="inherit" href={`/sub-category/${ subCategory }`}>{ t( subCategory ) }</Link>
                <Typography color="text.primary">{ name }</Typography>
            </Breadcrumbs>

            { /* Imagen */ }
            <Figure>
                <Image src={ image } />
            </Figure>

            { /* Contenido */ }
            <Content>
                
                { /* Nombre */ }
                <Title>
                    { name }
                    <Created>Creada en el: { createdAt }</Created>
                </Title>

                { /* Sub categoria de bicicleta */}
                <SubCategory>
                    { t(category) } { t("type") }: <b>{ t(subCategory) }</b>
                </SubCategory>

                { /* Imagen */ }
                <Description>{ description }</Description>

            </Content>

        </Root>
    );

};

export default Details;