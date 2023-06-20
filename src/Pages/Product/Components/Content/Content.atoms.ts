/**
 * @desc Dependencias
 */
import { atom } from "jotai";

/**
 * @desc Models
 */
import { Product } from "../../../../Models/Cart/Cart";

/**
 * @desc Atomo del producto actual
 */
export const atomCurrentProduct = atom< Product | null >( null );

/**
 * @desc Atomo de las felicitaciones
 */
export const atomCongrats = atom< boolean >( false );