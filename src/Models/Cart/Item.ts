/**
 * @desc Modelos
 */
import { Bicycle } from "../../Models/Bicycle/Bicycle";

interface INewItem{
    id: string;
    quantity: number;
    dateFrom: string;
}

/**
 * @desc Bicicleta
 */
class Item {

    /**
     * @desc Obtiene todas las bicicletas
     */
    constructor( data : INewItem, bicycle: Bicycle ){

        // Nuevo item
        const item = Object.assign( bicycle, data );

        return item;

    }

}

export default Item;