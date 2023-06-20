/**
 * @desc Model's
 */
import { Bicycles, Bicycle } from "../../../../Models/Bicycle/Bicycle";

/**
 * @desc Adaptador de la lista de productos
 */
class ProductListAdapter{

    /**
     * @desc Datos
     */
    Data : Bicycles = [];

    /**
     * @desc Constructor
     */
    constructor( data: Bicycles ){

        // Asignamos los nuevos datos
        this.Data = data;

        return this;

    }

    /**
     * @desc Filtra productos por una categoria
     */
    getBySubCategory( subCategory: Bicycle['subCategory'] ) : Bicycles {
        return this.Data?.filter( ( item : Bicycle ) => item.subCategory === subCategory );
    }

}

export default ProductListAdapter;