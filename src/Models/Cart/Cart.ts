/**
 * @desc Model's
 */
import { Bicycle } from "../Bicycle/Bicycle";

/**
 * @desc Una bicicleta
 */
export interface Product extends Bicycle{
    quantity: number;
    dateFrom: string;
}

/**
 * @desc Multiple Bicicletas
 */
export type Products = Product[];