/**
 * @desc Model's
 */
import { Bicycles, Bicycle, SubCategoryTypes } from "../../../../Models/Bicycle/Bicycle";

/**
 * @desc Opciones disponibles
 */
export interface IOptionsAdapter{
    subCategory: SubCategoryTypes;
}

/**
 * @desc Adaptador de la lista de productos
 */
class ProductListAdapter{

    /**
     * @desc Datos
     */
    Data : Bicycles = [];

    /**
     * @desc Opciones
     */
    Options : IOptionsAdapter;

    /**
     * @desc Constructor
     */
    constructor( data: Bicycles, options : IOptionsAdapter ){

        // Asignamos los nuevos datos
        this.Data = data;
        // Opciones
        this.Options = this.sanitizeOptions( options );

        return this;

    }

    /**
     * @desc Limpiamos las opciones
     */
    private sanitizeOptions( options: IOptionsAdapter ){

        // Sanitizamos la subcategoria
        if( options?.subCategory && SubCategoryTypes[options.subCategory] ){

            // Sub categoria
            const subCategory : SubCategoryTypes = SubCategoryTypes[ ( options.subCategory ?? SubCategoryTypes.electrics ) as keyof typeof SubCategoryTypes ];
            // Actualizamos la subCategoria
            options.subCategory = subCategory;
        
        }

        return options ?? {};

    }

    /**
     * @desc Filtra productos por una categoria
     */
    getBySubCategory( subCategory: Bicycle['subCategory'] ) : Bicycles {
        return this.Data?.filter( ( item : Bicycle ) => item.subCategory === subCategory );
    }

}

export default ProductListAdapter;